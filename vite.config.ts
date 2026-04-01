import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
    base: '/portfolio-start-project-vite-main/', // имя репозитория GitHub
    plugins: [
        react({
            plugins: [
                [
                    '@swc/plugin-styled-components',
                    { displayName: true, fileName: true, pure: true },
                ],
            ],
        }),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[name]',
        }),
    ],
});
