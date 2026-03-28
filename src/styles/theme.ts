// src/styles/theme.ts
export const theme = {
    colors: {
        primary: {
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
        },
        dark: {
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
        },
        gray: {
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
        },
        white: '#FFFFFF',
        black: '#000000',
    },
    gradients: {
        primary: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
        skillBar: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
    },
    breakpoints: {
        mobile: '768px',
        tablet: '1024px',
        desktop: '1280px',
    },
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    },
    transitions: {
        fast: '0.2s ease',
        base: '0.3s ease',
        slow: '0.6s ease',
    },
    borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
    },
} as const;

export type Theme = typeof theme;
