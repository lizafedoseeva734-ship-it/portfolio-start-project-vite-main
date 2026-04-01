// splitIntoColumns.ts
/** Раскладка masonry: i-й элемент → колонка (i % n), визуально строки сверху вниз */
export function splitIntoColumns<T>(items: T[], columnCount: number): T[][] {
    if (columnCount <= 1) {
        return [items];
    }
    return Array.from({ length: columnCount }, (_, col) =>
        items.filter((_, i) => i % columnCount === col)
    );
}
