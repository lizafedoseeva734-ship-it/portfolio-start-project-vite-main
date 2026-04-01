import styled from 'styled-components';
import { theme } from '../styles/theme';

type TitlePropsType = {
    fontSize?: string;
    fontWeight?: number;
    color?: string;
    lineHeight?: string;
    letterSpacing?: string;
    textTransform?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
    fontFamily?: string;
    margin?: string;
    className?: string;
};

export const TitleH2 = ({
    children,
    ...props
}: TitlePropsType & { children: React.ReactNode }) => {
    return <StyledTitle {...props}>{children}</StyledTitle>;
};

const StyledTitle = styled.h2<TitlePropsType>`
    margin: ${(props) => props.margin || '0'};
    font-family: ${(props) => props.fontFamily || "'Manrope', sans-serif"};
    font-weight: ${(props) => props.fontWeight || 700};
    font-size: ${(props) => props.fontSize || '56px'};
    line-height: ${(props) => props.lineHeight || '120%'};
    letter-spacing: ${(props) => props.letterSpacing || '-0.02em'};
    text-transform: ${(props) => props.textTransform || ''};
    color: ${(props) => props.color || '#0F172A'};

    ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props) => props.minHeight && `min-height: ${props.minHeight};`}

    /* Широкие планшеты / малый десктоп: minWidth 733px ломает flex (email уезжает) */
    @media (max-width: ${theme.breakpoints.desktop}) and (min-width: 1025px) {
        ${(props) =>
            props.minWidth === '733px' &&
            `
            min-width: auto;
            min-height: auto;
        `}
    }

    /* Планшеты */
    @media (max-width: ${theme.breakpoints.tablet}) and (min-width: 769px) {
        ${(props) => {
            if (props.minWidth === '733px') {
                return `
                    min-width: auto;
                    min-height: auto;
                    font-size: 72px;
                `;
            }
            return '';
        }}
        text-align: left;
        max-width: 100%;
    }

    /* Мобильные устройства */
    @media (max-width: ${theme.breakpoints.mobile}) {
        ${(props) => {
            if (props.minWidth === '733px') {
                return `
                    min-width: auto;
                    min-height: auto;
                    font-size: 48px;
                `;
            }
            return '';
        }}

        max-width: 100%;
        width: 100%;
    }

    /* Очень маленькие экраны (до 480px) */
    @media (max-width: 480px) {
        ${(props) => {
            if (props.fontSize === '90px' || props.minWidth === '733px') {
                return `
                    font-size: 36px;
                `;
            }
            return '';
        }}
    }
`;
