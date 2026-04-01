// src/styles/mixins.ts
import { css, RuleSet } from 'styled-components';
import { theme } from './theme';

// Правильный тип для аргументов медиа-запросов
export const media = {
    mobile: (
        first: TemplateStringsArray,
        ...interpolations: RuleSet<object>
    ) => css`
        @media (max-width: ${theme.breakpoints.mobile}) {
            ${css(first, ...interpolations)}
        }
    `,
    tablet: (
        first: TemplateStringsArray,
        ...interpolations: RuleSet<object>
    ) => css`
        @media (max-width: ${theme.breakpoints.tablet}) {
            ${css(first, ...interpolations)}
        }
    `,
    desktop: (
        first: TemplateStringsArray,
        ...interpolations: RuleSet<object>
    ) => css`
        @media (max-width: ${theme.breakpoints.desktop}) {
            ${css(first, ...interpolations)}
        }
    `,
};

// Дополнительные миксины для адаптива
export const responsiveFont = (
    desktop: number,
    tablet: number,
    mobile: number
) => css`
    font-size: ${desktop}px;

    ${media.tablet`
        font-size: ${tablet}px;
    `}

    ${media.mobile`
        font-size: ${mobile}px;
    `}
`;

export const responsivePadding = (
    desktop: string,
    tablet: string,
    mobile: string
) => css`
    padding: ${desktop};

    ${media.tablet`
        padding: ${tablet};
    `}

    ${media.mobile`
        padding: ${mobile};
    `}
`;

export const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const absoluteCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const textGradient = css`
    background: linear-gradient(
        135deg,
        ${theme.colors.primary[500]},
        ${theme.colors.primary[700]}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;
