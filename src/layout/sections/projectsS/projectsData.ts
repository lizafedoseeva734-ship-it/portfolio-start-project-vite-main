// projectsData.ts
export type Project = {
    id: number;
    /** Порядок на макете: строка 1 слева→направо, затем строка 2, затем строка 3 */
    layoutOrder: number;
    category: string;
    image: string;
    /** Явный путь к 2×; если нет — подставляется `*@2x` от `image` */
    image2x?: string;
};

/**
 * Порядок как на макете 3×3 (сначала верхний ряд, затем средний, затем нижний).
 * id и файлы сохранены; при смене ассетов правьте image и category, layoutOrder — позицию в сетке.
 */
export const projects: Project[] = [
    {
        id: 1,
        layoutOrder: 1,
        category: 'magazines',
        image: '/src/assets/images/1.png',
    },
    {
        id: 2,
        layoutOrder: 2,
        category: 'package',
        image: '/src/assets/images/2.png',
    },
    {
        id: 3,
        layoutOrder: 3,
        category: 'branding',
        image: '/src/assets/images/3.png',
    },
    {
        id: 4,
        layoutOrder: 4,
        category: 'web',
        image: '/src/assets/images/4.png',
    },
    {
        id: 5,
        layoutOrder: 5,
        category: 'logo',
        image: '/src/assets/images/5.png',
    },
    {
        id: 6,
        layoutOrder: 6,
        category: 'magazines',
        image: '/src/assets/images/6.png',
    },
    {
        id: 7,
        layoutOrder: 7,
        category: 'package',
        image: '/src/assets/images/7.png',
    },
    {
        id: 8,
        layoutOrder: 8,
        category: 'magazines',
        image: '/src/assets/images/8.png',
    },
    {
        id: 9,
        layoutOrder: 9,
        category: 'branding',
        image: '/src/assets/images/9.png',
    },
];
