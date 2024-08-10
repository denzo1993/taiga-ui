import fs from 'node:fs';
import path from 'node:path';

(function main(): void {
    const src = path.join(process.cwd(), 'node_modules', 'lucide-static', 'icons');
    const dest = process.argv[2] || path.join(process.cwd(), 'projects', 'icons', 'src');

    fs.readdirSync(src).forEach((filename: string) => {
        const content = fs
            .readFileSync(path.join(src, filename), 'utf-8')
            .replace(/class="[a-zA-Z0-9:;.\s()\-,]*"/, '')
            .replaceAll(
                /<(circle|ellipse|line|polygon|polyline|path|rect)/g,
                '<$1 vector-effect="non-scaling-stroke"',
            );

        const filled = content.replaceAll('fill="none"', 'fill="currentColor"');

        fs.writeFileSync(path.join(dest, filename), content);
        fs.writeFileSync(path.join(dest, renameToFilled(filename)), filled);
    });
})();

function renameToFilled(filename: string): string {
    const [name, extension] = filename.split('.');

    return `${name}-filled.${extension}`;
}
