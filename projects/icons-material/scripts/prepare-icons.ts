import fs from 'node:fs';
import path from 'node:path';

(function main(): void {
    const dest =
        process.argv[2] || path.join(process.cwd(), 'projects', 'icons-material', 'src');
    const types = ['filled', 'outlined', 'round', 'sharp', 'two-tone'];

    types.forEach((type) => {
        const src = path.join(
            process.cwd(),
            'node_modules',
            '@material-design-icons',
            'svg',
            type,
        );

        fs.readdirSync(src).forEach((filename: string) => {
            const content = fs
                .readFileSync(path.join(src, filename), 'utf-8')
                .replace(/class="[a-zA-Z0-9:;.\s()\-,]*"/, '')
                .replaceAll(
                    /<(circle|ellipse|line|polygon|polyline|path|rect)/g,
                    '<$1 vector-effect="non-scaling-stroke"',
                );

            const filePath = path.join(dest, type, filename);

            fs.mkdirSync(path.dirname(filePath), {recursive: true});
            fs.writeFileSync(filePath, content);
        });
    });
})();
