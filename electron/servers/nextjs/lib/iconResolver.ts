/**
 * Icon resolver for SSR rendering.
 *
 * Resolves __icon_query__ directives to inline data-URI __icon_url__ values
 * using the Phosphor Icons index (icons.json).
 *
 * Runs entirely on the Next.js server — no dependency on the FastAPI
 * or Python backend.
 */
import * as fs from "fs";
import * as path from "path";

// ── Icon index (lazy-loaded, cached for process lifetime) ──

interface IconEntry {
    name: string;
    content: string; // inline SVG markup
    tags: string;
}

let iconIndex: Map<string, IconEntry> | null = null;

function getIconIndex(): Map<string, IconEntry> {
    if (iconIndex) return iconIndex;

    iconIndex = new Map();

    // process.cwd() = the nextjs/ project root; icons.json is in the
    // sibling fastapi server directory.
    const jsonPath = path.resolve(
        process.cwd(),
        "..", "fastapi", "assets", "icons.json",
    );

    if (!fs.existsSync(jsonPath)) {
        console.warn(`[iconResolver] icons.json not found: ${jsonPath}`);
        return iconIndex;
    }

    try {
        const raw = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
        const icons: IconEntry[] = raw.icons ?? [];

        for (const icon of icons) {
            if (!icon.name.endsWith("-bold")) continue;

            const baseName = icon.name.replace("-bold", "");

            // Index by full base name
            indexSet(baseName.toLowerCase(), icon);

            // Index by each word in the base name
            for (const word of baseName.split("-")) {
                if (word.length > 2) indexSet(word.toLowerCase(), icon);
            }

            // Index by tags
            const tags = (icon.tags || "")
                .toLowerCase()
                .replace("*new*,", "")
                .split(",")
                .map((t) => t.trim())
                .filter((t) => t.length > 2);
            for (const tag of tags) {
                indexSet(tag, icon);
            }
        }

        console.log(
            `[iconResolver] Loaded ${icons.filter((i) => i.name.endsWith("-bold")).length} bold icons, ${iconIndex.size} keywords`,
        );
    } catch (err) {
        console.error("[iconResolver] Failed to load icons.json:", err);
    }

    return iconIndex;
}

/** Only set if key doesn't already exist (first match wins). */
function indexSet(key: string, entry: IconEntry) {
    if (!iconIndex!.has(key)) {
        iconIndex!.set(key, entry);
    }
}

// ── SVG → data URI ──

function svgToDataUri(svgContent: string): string {
    const b64 = Buffer.from(svgContent, "utf-8").toString("base64");
    return `data:image/svg+xml;base64,${b64}`;
}

// ── Public API ──

/**
 * Resolve an icon query string (e.g. "tree leaf nature") to a data URI.
 * Returns empty string if no match found.
 */
export function resolveIconQuery(query: string): string {
    const index = getIconIndex();
    if (index.size === 0) return "";

    const q = query.toLowerCase().trim();

    // 1. Exact match on full query
    const exact = index.get(q);
    if (exact) return svgToDataUri(exact.content);

    // 2. Direct keyword match on each word
    const words = q.replace(/[-_]/g, " ").split(/\s+/);
    for (const word of words) {
        if (word.length <= 2) continue;
        const hit = index.get(word);
        if (hit) return svgToDataUri(hit.content);
    }

    // 3. Fuzzy: check if any keyword contains a query word (or vice versa)
    let bestEntry: IconEntry | null = null;
    let bestScore = 0;

    for (const word of words) {
        if (word.length <= 2) continue;
        index.forEach((entry, keyword) => {
            if (word.includes(keyword) || keyword.includes(word)) {
                const score =
                    word.length / Math.max(keyword.length, word.length);
                if (score > bestScore) {
                    bestScore = score;
                    bestEntry = entry;
                }
            }
        });
    }

    if (bestEntry && bestScore > 0.4) {
        return svgToDataUri(bestEntry.content);
    }

    // 4. Fallback: return a generic placeholder icon (circle-dashed)
    //    so the slide still shows something rather than an empty circle.
    const fallback = index.get("circle");
    if (fallback) {
        console.warn(`[iconResolver] No match for "${query}", using fallback`);
        return svgToDataUri(fallback.content);
    }

    console.warn(`[iconResolver] No match for "${query}", no fallback available`);
    return "";
}

/**
 * Recursively walk a content object and resolve all __icon_query__
 * directives that don't already have a usable __icon_url__.
 *
 * Mutates `data` in-place and returns it.
 */
export function resolveAllIcons<T>(data: T): T {
    if (data === null || data === undefined || typeof data !== "object") {
        return data;
    }

    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            resolveAllIcons(data[i]);
        }
        return data;
    }

    const obj = data as Record<string, unknown>;

    // If this dict has __icon_query__ and needs resolution
    if (
        typeof obj.__icon_query__ === "string" &&
        obj.__icon_query__ &&
        (!obj.__icon_url__ ||
            obj.__icon_url__ === "/static/icons/placeholder.svg")
    ) {
        const url = resolveIconQuery(obj.__icon_query__ as string);
        if (url) {
            obj.__icon_url__ = url;
        }
    }

    // Recurse into child values
    for (const value of Object.values(obj)) {
        if (value && typeof value === "object") {
            resolveAllIcons(value);
        }
    }

    return data;
}
