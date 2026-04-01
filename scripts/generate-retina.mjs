/**
 * Генерирует рядом с каждым растровым файлом версию @2x (удвоенные пиксели).
 * Запуск: pnpm retina
 * Требует devDependency: sharp
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const imagesDir = path.join(root, 'src', 'assets', 'images');

async function main() {
    const { default: sharp } = await import('sharp');

    if (!fs.existsSync(imagesDir)) {
        console.log('Папка src/assets/images не найдена — пропуск.');
        process.exit(0);
    }

    const files = fs
        .readdirSync(imagesDir)
        .filter(
            (f) =>
                /\.(png|jpg|jpeg|webp)$/i.test(f) && !/@2x\./i.test(f)
        );

    if (files.length === 0) {
        console.log('Нет подходящих изображений в src/assets/images — пропуск.');
        process.exit(0);
    }

    for (const file of files) {
        const srcPath = path.join(imagesDir, file);
        const ext = file.match(/\.(png|jpg|jpeg|webp)$/i)?.[1] ?? 'png';
        const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, '');
        const destPath = path.join(imagesDir, `${base}@2x.${ext}`);

        const meta = await sharp(srcPath).metadata();
        if (!meta.width || !meta.height) {
            console.warn('Пропуск (нет размеров):', file);
            continue;
        }

        await sharp(srcPath)
            .resize({
                width: meta.width * 2,
                height: meta.height * 2,
                fit: 'fill',
            })
            .toFile(destPath);

        console.log('OK:', destPath);
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
