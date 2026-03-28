import styled from 'styled-components';
import { theme } from '../styles/theme';

type DescriptionPropsType = {
    fontSize?: string;
    fontWeight?: number;
    color?: string;
    lineHeight?: string;
    letterSpacing?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
    fontFamily?: string;
    margin?: string;
};

export const Description = ({
    children,
    ...props
}: DescriptionPropsType & { children: React.ReactNode }) => {
    return <StyledDescription {...props}>{children}</StyledDescription>;
};

const StyledDescription = styled.p<DescriptionPropsType>`
    margin: ${(props) => props.margin || '0'};
    font-family: ${(props) => props.fontFamily || "'Manrope', sans-serif"};
    font-weight: ${(props) => props.fontWeight || 400};
    font-size: ${(props) => props.fontSize || '18px'};
    line-height: ${(props) => props.lineHeight || '170%'};
    letter-spacing: ${(props) => props.letterSpacing || '-0.01em'};
    color: ${(props) => props.color || theme.colors.gray[500]};

    ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props) => props.minHeight && `min-height: ${props.minHeight};`}
`;
