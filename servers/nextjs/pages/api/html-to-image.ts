/**
 * API route (Pages Router): Renders a complete HTML document to a PNG screenshot.
 *
 * Uses Puppeteer to open the HTML in a headless browser and capture the viewport.
 * Designed for the visual reflection loop in template generation — compares
 * rendered template previews against original slide images.
 *
 * POST /api/html-to-image
 * Body: { html: string, width?: number, height?: number }
 * Returns: { success: boolean, image_base64?: string, error?: string }
 */
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

interface HtmlToImageResponse {
    success: boolean;
    image_base64?: string;
    error?: string;
}

// Allow large payloads (preview_html can contain embedded base64 images)
export const config = {
    api: {
        bodyParser: {
            sizeLimit: "20mb",
        },
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<HtmlToImageResponse>
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ success: false, error: "Method not allowed" });
    }

    const { html, width = 1280, height = 720 } = req.body;

    if (!html || typeof html !== "string") {
        return res.status(400).json({ success: false, error: "html is required" });
    }

    let browser;
    try {
        browser = await puppeteer.launch({
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--disable-web-security",
                "--disable-background-timer-throttling",
                "--disable-backgrounding-occluded-windows",
                "--disable-renderer-backgrounding",
            ],
        });

        const page = await browser.newPage();
        await page.setViewport({
            width: Number(width),
            height: Number(height),
            deviceScaleFactor: 1,
        });

        // Set the HTML content directly — preview_html is a self-contained document
        // with Tailwind CDN + Google Fonts loaded via <link>/<script> tags.
        await page.setContent(html, {
            waitUntil: "networkidle0",
            timeout: 30000,
        });

        // Extra delay for Tailwind JIT compilation and font loading
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Screenshot the viewport as PNG
        const screenshotBuffer = await page.screenshot({
            type: "png",
            clip: { x: 0, y: 0, width: Number(width), height: Number(height) },
        });

        const image_base64 = Buffer.from(screenshotBuffer).toString("base64");

        return res.status(200).json({ success: true, image_base64 });
    } catch (err: any) {
        console.error("[html-to-image] Error:", err);
        return res.status(200).json({
            success: false,
            error: err.message || String(err),
        });
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}
