import { theme } from './theme';

/** Готовые строки для `useMediaQuery(...)` — один источник вместо дублирования */
export const mq = {
    tabletAndDown: `(max-width: ${theme.breakpoints.tablet})`,
    mobileAndDown: `(max-width: ${theme.breakpoints.mobile})`,
    /** Только планшет (без телефона) — две колонки в masonry */
    tabletOnly: `(min-width: 769px) and (max-width: ${theme.breakpoints.tablet})`,
} as const;
