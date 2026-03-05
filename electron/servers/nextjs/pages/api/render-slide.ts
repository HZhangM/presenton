/**
 * SSR API route (Pages Router): Renders a Presenton slide layout to static HTML.
 *
 * Uses Pages Router instead of App Router because App Router blocks
 * react-dom/server imports in route handlers.
 *
 * POST /api/render-slide
 * Body: { layout_id, content_json, css_variables? }
 * Returns: { html, layout_id }
 *
 * Used by the BNP slide agent: Python backend calls this endpoint
 * to render structured JSON content via the actual Presenton React
 * layout components, producing pixel-accurate HTML.
 */
import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { getLayoutByLayoutId, allLayouts } from "@/app/presentation-templates";
import { resolveAllIcons } from "@/lib/iconResolver";

type ResponseData = {
    html?: string;
    layout_id?: string;
    error?: string;
    details?: string;
    available_sample?: string[];
};

// Increase body size limit — content_json may contain base64 data-URI images
export const config = {
    api: {
        bodyParser: {
            sizeLimit: "20mb",
        },
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { layout_id, content_json, css_variables } = req.body;

        if (!layout_id) {
            return res.status(400).json({ error: "layout_id is required" });
        }

        const template = getLayoutByLayoutId(layout_id);
        if (!template) {
            const available = allLayouts.map((l) => l.layoutId).slice(0, 20);
            return res.status(404).json({
                error: `Unknown layout: ${layout_id}`,
                available_sample: available,
            });
        }

        // Resolve __icon_query__ → __icon_url__ (data URIs) before rendering
        const contentCopy = JSON.parse(JSON.stringify(content_json || {}));
        const resolvedContent = resolveAllIcons(contentCopy);

        // Debug: log icon resolution results
        const iconsBefore = JSON.stringify(content_json).match(/__icon_query__/g)?.length ?? 0;
        const iconsAfter = JSON.stringify(resolvedContent).match(/__icon_url__/g)?.length ?? 0;
        if (iconsBefore > 0 || iconsAfter > 0) {
            console.log(`[render-slide] Icons: ${iconsBefore} queries found, ${iconsAfter} URLs resolved`);
        }

        // Render the React component to static HTML
        const element = React.createElement(template.component, {
            data: resolvedContent,
        });
        const componentHtml = ReactDOMServer.renderToStaticMarkup(element);

        // Build CSS variable declarations
        const cssVarDecls = css_variables
            ? Object.entries(css_variables)
                  .map(([k, v]) => `  ${k}: ${v};`)
                  .join("\n")
            : "";

        // Build complete self-contained HTML document
        const html = buildSlideHtml(componentHtml, cssVarDecls, layout_id);

        return res.status(200).json({ html, layout_id });
    } catch (error: any) {
        console.error("[render-slide] SSR error:", error);
        return res.status(500).json({
            error: "SSR rendering failed",
            details: error?.message || String(error),
        });
    }
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
<meta name="slide-type" content="bnp-ssr">
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
<div class="slide-root" style="position:relative;width:1280px;height:720px;overflow:hidden;">
<div style="position:absolute;inset:0;z-index:0;background:var(--slide-bg-fallback, var(--background-color, #ffffff));"></div>
<div style="position:absolute;inset:0;z-index:1;background-image:var(--slide-bg-image, none);background-size:cover;background-position:center;"></div>
<div style="position:absolute;inset:0;z-index:2;background:var(--slide-bg-overlay, transparent);"></div>
${componentHtml}
</div>
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
