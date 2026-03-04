/**
 * SSR API route (Pages Router): Renders a custom layout TSX code with
 * provided content data to produce static HTML.
 *
 * Unlike render-slide.ts (which looks up built-in layouts by ID),
 * this endpoint accepts raw TSX code and compiles it on the fly.
 *
 * POST /api/render-custom-slide
 * Body: { tsx_code: string, content_json: object, css_variables?: Record<string, string> }
 * Returns: { html, layout_id }
 */
import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import ReactDOMServer from "react-dom/server";
import * as z from "zod";
import * as Babel from "@babel/standalone";

let Recharts: any = {};
try {
    Recharts = require("recharts");
} catch {}

let d3: any = {};
try {
    d3 = require("d3");
} catch {}

interface RenderResponse {
    html?: string;
    layout_id?: string;
    error?: string;
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "20mb",
        },
    },
};

function cleanTsxCode(code: string): string {
    return code
        .replace(/import\s+React\s*,?\s*\{?[^}]*\}?\s*from\s+['"]react['"];?/g, "")
        .replace(/import\s+\*\s+as\s+React\s+from\s+['"]react['"];?/g, "")
        .replace(/import\s+{\s*[^}]*\s*}\s*from\s+['"]react['"];?/g, "")
        .replace(/import\s+\*\s+as\s+z\s+from\s+['"]zod['"];?/g, "")
        .replace(/import\s+{\s*z\s*}\s*from\s+['"]zod['"];?/g, "")
        .replace(/import\s+.*\s+from\s+['"]zod['"];?/g, "")
        .replace(/import\s+.*\s+from\s+['"]recharts['"];?/g, "")
        .replace(/import\s+.*\s+from\s+['"]@\/[^'"]+['"];?/g, "")
        .replace(/import\s+.*\s+from\s+['"]d3['"];?/g, "")
        .replace(/export\s+default\s+\w+;?\s*$/g, "")
        .replace(/export\s+(const|function|class|type|interface)\s/g, "$1 ");
}

function compileAndExecute(tsxCode: string) {
    const cleanCode = cleanTsxCode(tsxCode);

    const compiled = Babel.transform(cleanCode, {
        presets: [
            ["react", { runtime: "classic" }],
            ["typescript", { isTSX: true, allExtensions: true }],
        ],
        sourceType: "script",
    });

    if (!compiled.code) throw new Error("Babel compilation returned empty code");

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

        ${compiled.code}

        return {
            component: typeof dynamicSlideLayout !== 'undefined'
                ? dynamicSlideLayout
                : (typeof DefaultLayout !== 'undefined' ? DefaultLayout : undefined),
            layoutId: typeof layoutId !== 'undefined' ? layoutId : 'custom-layout',
        };
        `
    );

    return factory(React, z, Recharts, d3);
}

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
<meta name="layout-id" content="${layoutId.replace(/"/g, "&quot;")}">
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

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<RenderResponse>
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { tsx_code, content_json, css_variables } = req.body;

    if (!tsx_code) {
        return res.status(400).json({ error: "tsx_code is required" });
    }

    try {
        const result = compileAndExecute(tsx_code);

        if (!result.component) {
            return res.status(400).json({
                error: "No dynamicSlideLayout component found in the compiled code",
            });
        }

        const element = React.createElement(result.component, {
            data: content_json || {},
        });
        const componentHtml = ReactDOMServer.renderToStaticMarkup(element);

        const cssVarDecls = css_variables
            ? Object.entries(css_variables)
                  .map(([k, v]) => `  ${k}: ${v};`)
                  .join("\n")
            : "";

        const html = buildSlideHtml(componentHtml, cssVarDecls, result.layoutId);

        return res.status(200).json({ html, layout_id: result.layoutId });
    } catch (err: any) {
        console.error("[render-custom-slide] Error:", err);
        return res.status(500).json({
            error: err.message || String(err),
        });
    }
}
