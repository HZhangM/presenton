/**
 * Extract all layout schemas from Presenton templates to a single JSON file.
 * Run with: npx tsx extract-schemas.ts
 */
import { templates, allLayouts } from './app/presentation-templates/index.js';

interface LayoutEntry {
    layout_id: string;
    layout_name: string;
    layout_description: string;
    template_group: string;
    file_name: string;
    schema_json: any;
    sample_data: Record<string, unknown>;
}

const registry: LayoutEntry[] = [];

for (const layout of allLayouts) {
    registry.push({
        layout_id: layout.layoutId,
        layout_name: layout.layoutName,
        layout_description: layout.layoutDescription,
        template_group: layout.templateName,
        file_name: layout.fileName,
        schema_json: layout.schemaJSON,
        sample_data: layout.sampleData,
    });
}

// Group summary
const groups: Record<string, number> = {};
for (const entry of registry) {
    groups[entry.template_group] = (groups[entry.template_group] || 0) + 1;
}

const output = {
    version: 1,
    total_layouts: registry.length,
    groups_summary: groups,
    layouts: registry,
};

const fs = await import('fs');
const path = await import('path');
const outPath = 'd:/Lovefile/apps/api/app/data/layout_registry.json';
console.log('Writing to:', outPath);
fs.mkdirSync('d:/Lovefile/apps/api/app/data', { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8');
console.log(`Extracted ${registry.length} layouts to ${outPath}`);
console.log('Groups:', JSON.stringify(groups, null, 2));
