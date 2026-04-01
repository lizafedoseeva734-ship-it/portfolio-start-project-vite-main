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
    className?: string;
    children?: React.ReactNode;
};

export const Description = ({ children, ...props }: DescriptionPropsType) => {
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

    /* Планшеты (769px - 1024px) */
    @media (max-width: ${theme.breakpoints.tablet}) and (min-width: 769px) {
        ${(props) => {
            if (props.minWidth === '549px') {
                return `
                    min-width: auto;
                    max-width: 100%;
                `;
            }
            return '';
        }}
        ${(props) => {
            if (props.fontSize === '22px') {
                return `
                    font-size: 20px;
                `;
            }
            return '';
        }}
        text-align: left;
        margin-left: 0;
        margin-right: 0;
    }

    /* Мобильные устройства */
    @media (max-width: ${theme.breakpoints.mobile}) {
        ${(props) => {
            if (props.minWidth === '549px') {
                return `
                    min-width: auto;
                    max-width: 100%;
                `;
            }
            return '';
        }}
        ${(props) => {
            if (props.fontSize === '22px') {
                return `
                    font-size: 18px;
                `;
            }
            return '';
        }}
        ${(props) => {
            if (props.maxHeight === '92px') {
                return `
                    max-height: none;
                `;
            }
            return '';
        }}
        text-align: left;
        width: 100%;
    }
    
`;
