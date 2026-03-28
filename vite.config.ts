import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
    plugins: [
        react({
            // Добавляем настройки для SWC
            plugins: [
                [
                    '@swc/plugin-styled-components',
                    {
                        displayName: true, // Добавляет имя компонента к классу
                        fileName: true, // Добавляет имя файла
                        pure: true, // Помечает шаблоны как чистые для tree-shaking
                    },
                ],
            ],
        }),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[name]',
        }),
    ],
});
