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
    noWrap?: boolean;
    ellipsis?: boolean;
    lineClamp?: number;
};

export const Title = ({
    children,
    ...props
}: TitlePropsType & { children: React.ReactNode }) => {
    return <StyledTitle {...props}>{children}</StyledTitle>;
};

const StyledTitle = styled.h1<TitlePropsType>`
    margin: ${(props) => props.margin || '0'};
    font-family: ${(props) => props.fontFamily || "'Inconsolata', sans-serif"};
    font-weight: ${(props) => props.fontWeight || 700};
    font-size: ${(props) => props.fontSize || '72px'};
    line-height: ${(props) => props.lineHeight || '115%'};
    letter-spacing: ${(props) => props.letterSpacing || '-0.02em'};
    text-transform: ${(props) => props.textTransform || 'capitalize'};
    color: ${(props) => props.color || theme.colors.dark[900]};

    ${(props) =>
        props.maxWidth &&
        `
        max-width: ${props.maxWidth};
        overflow: hidden;
        text-overflow: ${props.ellipsis ? 'ellipsis' : 'clip'};
        white-space: ${props.noWrap ? 'nowrap' : 'normal'};
    `}

    ${(props) =>
        props.maxHeight &&
        `
        max-height: ${props.maxHeight};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: ${props.lineClamp || 1};
        -webkit-box-orient: vertical;
    `}

    ${(props) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props) => props.minHeight && `min-height: ${props.minHeight};`}
`;
