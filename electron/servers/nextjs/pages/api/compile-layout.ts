/**
 * SSR API route (Pages Router): Compiles a TSX layout code string into
 * JSON Schema, sample data, and an SSR preview HTML.
 *
 * Uses Pages Router (not App Router) because we need react-dom/server
 * for preview HTML generation.
 *
 * POST /api/compile-layout
 * Body: { tsx_code: string, css_variables?: Record<string, string> }
 * Returns: { success, layout_id, layout_name, layout_description,
 *            schema_json, sample_data, preview_html, error? }
 */
import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import ReactDOMServer from "react-dom/server";
import * as z from "zod";
import * as Babel from "@babel/standalone";

// Recharts — may not be available in all environments
let Recharts: any = {};
try {
    Recharts = require("recharts");
} catch {
    // Recharts not available server-side, provide stubs
}

let d3: any = {};
try {
    d3 = require("d3");
} catch {
    // d3 not available, provide empty object
}

interface CompileResponse {
    success: boolean;
    layout_id?: string;
    layout_name?: string;
    layout_description?: string;
    schema_json?: object;
    sample_data?: object;
    preview_html?: string;
    error?: string;
}

// Allow large payloads (tsx_code can be substantial)
export const config = {
    api: {
        bodyParser: {
            sizeLimit: "20mb",
        },
    },
};

/**
 * Strip import/export statements from TSX code.
 * Dependencies (React, Zod, Recharts, D3) are injected via factory function.
 */
function cleanTsxCode(code: string): string {
    return code
        // Remove React imports
        .replace(
            /import\s+React\s*,?\s*\{?[^}]*\}?\s*from\s+['"]react['"];?/g,
            ""
        )
        .replace(
            /import\s+\*\s+as\s+React\s+from\s+['"]react['"];?/g,
            ""
        )
        .replace(
            /import\s+{\s*[^}]*\s*}\s*from\s+['"]react['"];?/g,
            ""
        )
        // Remove zod imports
        .replace(/import\s+\*\s+as\s+z\s+from\s+['"]zod['"];?/g, "")
        .replace(/import\s+{\s*z\s*}\s*from\s+['"]zod['"];?/g, "")
        .replace(/import\s+.*\s+from\s+['"]zod['"];?/g, "")
        // Remove recharts imports
        .replace(/import\s+.*\s+from\s+['"]recharts['"];?/g, "")
        // Remove other imports
        .replace(/import\s+.*\s+from\s+['"]@\/[^'"]+['"];?/g, "")
        .replace(/import\s+.*\s+from\s+['"]d3['"];?/g, "")
        // Remove export default
        .replace(/export\s+default\s+\w+;?\s*$/g, "")
        // Remove other exports
        .replace(/export\s+(const|function|class|type|interface)\s/g, "$1 ");
}

/**
 * Compile TSX string to JS using Babel standalone.
 */
function transpileTsx(cleanCode: string): string {
    const result = Babel.transform(cleanCode, {
        presets: [
            ["react", { runtime: "classic" }],
            ["typescript", { isTSX: true, allExtensions: true }],
        ],
        sourceType: "script",
    });

    if (!result.code) {
        throw new Error("Babel compilation returned empty code");
    }

    return result.code;
}

/**
 * Execute compiled JS code with injected dependencies.
 * Returns the extracted component, schema, and metadata.
 */
function executeCompiledCode(compiledJs: string) {
    const factory = new Function(
        "React",
        "_z",
        "Recharts",
        "_d3",
        `
        const z = _z;
        const d3 = _d3;
        const { useState, useEffect, useRef, useMemo, useCallback, Fragment } = React;

        const {
            ResponsiveContainer, LineChart, Line, BarChart, Bar,
            XAxis, YAxis, CartesianGrid, Tooltip, Legend,
            PieChart, Pie, Cell, AreaChart, Area,
            RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
            ComposedChart, ScatterChart, Scatter,
            RadialBarChart, RadialBar,
            ReferenceLine, ReferenceDot, ReferenceArea,
            Brush, LabelList, Label, Text
        } = Recharts || {};

        ${compiledJs}

        return {
            component: typeof dynamicSlideLayout !== 'undefined'
                ? dynamicSlideLayout
                : (typeof DefaultLayout !== 'undefined' ? DefaultLayout : undefined),
            layoutId: typeof layoutId !== 'undefined' ? layoutId : 'custom-layout',
            layoutName: typeof layoutName !== 'undefined' ? layoutName : 'Custom Layout',
            layoutDescription: typeof layoutDescription !== 'undefined' ? layoutDescription : '',
            Schema: typeof Schema !== 'undefined' ? Schema : null,
        };
        `
    );

    return factory(React, z, Recharts, d3);
}

/**
 * Build a complete self-contained HTML document for slide preview.
 */
function buildSlideHtml(
    componentHtml: string,
    cssVarDecls: string,
    layoutId: string
): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=1280">
<meta name="slide-type" content="bnp-custom">
<meta name="layout-id" content="${escapeHtml(layoutId)}">
<script src="https://cdn.tailwindcss.com"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {
${cssVarDecls}
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 1280px; height: 720px; overflow: hidden; }
</style>
</head>
<body>
${componentHtml}
</body>
</html>`;
}

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CompileResponse>
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ success: false, error: "Method not allowed" });
    }

    const { tsx_code, css_variables } = req.body;

    if (!tsx_code || typeof tsx_code !== "string") {
        return res
            .status(400)
            .json({ success: false, error: "tsx_code is required and must be a string" });
    }

    try {
        // ─── Step 1: Clean imports ───
        const cleanCode = cleanTsxCode(tsx_code);

        // ─── Step 2: Babel transpile TSX → JS ───
        const compiledJs = transpileTsx(cleanCode);

        // ─── Step 3: Execute compiled code ───
        const result = executeCompiledCode(compiledJs);

        if (!result.component) {
            return res.status(200).json({
                success: false,
                error:
                    "No dynamicSlideLayout component found in the compiled code. " +
                    "Make sure the code defines: const dynamicSlideLayout = ...",
            });
        }

        if (!result.Schema) {
            return res.status(200).json({
                success: false,
                error:
                    "No Schema found in the compiled code. " +
                    "Make sure the code defines: const Schema = z.object({...})",
            });
        }

        // ─── Step 4: Extract JSON Schema ───
        let schemaJSON: object = {};
        try {
            schemaJSON = z.toJSONSchema(result.Schema);
        } catch (e: any) {
            return res.status(200).json({
                success: false,
                error: `Failed to convert Zod schema to JSON Schema: ${e.message}`,
            });
        }

        // ─── Step 5: Extract sample data ───
        let sampleData: object = {};
        try {
            sampleData = result.Schema.parse({});
        } catch {
            try {
                sampleData = result.Schema.parse(undefined);
            } catch {
                // Schema has no defaults — use empty object
            }
        }

        // ─── Step 6: SSR render preview ───
        let previewHtml = "";
        try {
            const element = React.createElement(result.component, {
                data: sampleData,
            });
            const componentHtml = ReactDOMServer.renderToStaticMarkup(element);

            const cssVarDecls = css_variables
                ? Object.entries(css_variables)
                      .map(([k, v]) => `  ${k}: ${v};`)
                      .join("\n")
                : "";

            previewHtml = buildSlideHtml(
                componentHtml,
                cssVarDecls,
                result.layoutId
            );
        } catch (renderErr: any) {
            console.warn(
                "[compile-layout] SSR preview failed (non-fatal):",
                renderErr.message
            );
            // Preview failure is non-fatal — schema + sample_data are still valid
        }

        // ─── Return result ───
        return res.status(200).json({
            success: true,
            layout_id: result.layoutId,
            layout_name: result.layoutName,
            layout_description: result.layoutDescription,
            schema_json: schemaJSON,
            sample_data: sampleData,
            preview_html: previewHtml || undefined,
        });
    } catch (err: any) {
        console.error("[compile-layout] Compilation error:", err);
        return res.status(200).json({
            success: false,
            error: err.message || String(err),
        });
    }
}
