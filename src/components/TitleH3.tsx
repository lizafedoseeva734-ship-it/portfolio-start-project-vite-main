import styled from 'styled-components';
import { theme } from '../styles/theme';

type TitleH3PropsType = {
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
};

export const TitleH3 = ({
    children,
    ...props
}: TitleH3PropsType & { children: React.ReactNode }) => {
    return <StyledTitle {...props}>{children}</StyledTitle>;
};

const StyledTitle = styled.h3<TitleH3PropsType>`
    margin: ${(props) => props.margin || '0'};
    font-family: ${(props) => props.fontFamily || "'Manrope', sans-serif"};
    font-weight: ${(props) => props.fontWeight || 600};
    font-size: ${(props) => props.fontSize || '28px'};
    line-height: ${(props) => props.lineHeight || '135%'};
    letter-spacing: ${(props) => props.letterSpacing || '-0.01em'};
    text-transform: ${(props) => props.textTransform || 'none'};
    color: ${(props) => props.color || '#1E293B'};

    ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props) => props.minHeight && `min-height: ${props.minHeight};`}

    @media (max-width: ${theme.breakpoints.tablet}) {
        ${(props) =>
            !props.fontSize &&
            `
            font-size: 24px;
        `}
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        ${(props) =>
            !props.fontSize &&
            `
            font-size: 20px;
            line-height: 140%;
        `}
    }
`;
