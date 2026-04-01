/** Путь к 2×-версии: `photo.png` → `photo@2x.png` */
export function withRetinaPath(src: string): string {
    return src.replace(/\.(png|jpg|jpeg|webp)$/i, '@2x.$1');
}

/** Плотностной srcset для Retina (1× + 2×) */
export function buildDensitySrcSet(src: string, src2x?: string): string {
    const two = src2x ?? withRetinaPath(src);
    return `${src} 1x, ${two} 2x`;
}

/** Подсказка браузеру для выбора файла по ширине в макете */
/** Учёт max-width контейнера ~1200px и отступов между колонками */
export const SIZES_PORTFOLIO_GRID =
    '(max-width: 768px) 100vw, (max-width: 1024px) min(50vw, 580px), min(33vw, 400px)';

export const SIZES_HERO_IMAGE =
    '(max-width: 1024px) 100vw, min(50vw, 708px)';

export const SIZES_TESTIMONIALS_PHOTO =
    '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, min(45vw, 480px)';
