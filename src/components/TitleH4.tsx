import styled from 'styled-components';

type TitleH4PropsType = {
    fontSize?: string;
    fontWeight?: number;
    color?: string;
    letterSpacing?: string;
    textTransform?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
    fontFamily?: string;
    margin?: string;
};

export const TitleH4 = ({
    children,
    ...props
}: TitleH4PropsType & { children: React.ReactNode }) => {
    return <StyledTitle {...props}>{children}</StyledTitle>;
};

const StyledTitle = styled.h4<TitleH4PropsType>`
    margin: ${(props) => props.margin || '0'};
    font-family: ${(props) => props.fontFamily || "'Manrope', sans-serif"};
    font-weight: ${(props) => props.fontWeight || 500};
    font-size: ${(props) => props.fontSize || '18px'};
    letter-spacing: ${(props) => props.letterSpacing || '-0.01em'};
    text-transform: ${(props) => props.textTransform || 'none'};
    color: ${(props) => props.color || '#334155'};

    ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props) => props.minHeight && `min-height: ${props.minHeight};`}
`;
