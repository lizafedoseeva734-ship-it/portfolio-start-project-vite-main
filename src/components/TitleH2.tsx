import styled from 'styled-components';

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
`;
