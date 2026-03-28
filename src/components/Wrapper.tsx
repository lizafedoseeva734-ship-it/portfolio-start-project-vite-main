import styled from 'styled-components';

type WrapperPropsType = {

    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;


    display?: 'flex' | 'grid';
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridGap?: string;
    alignItems?: string;
    justifyItems?: string;


    width?: string;
    height?: string;
    children?: React.ReactNode;
};

export const Wrapper = (props: WrapperPropsType) => {
    return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
};

const StyledWrapper = styled.div<WrapperPropsType>`
    display: ${(p) => p.display || 'flex'};


    ${(p) =>
        p.display !== 'grid' &&
        `
        flex-direction: ${p.direction || 'row'};
        justify-content: ${p.justify || 'flex-start'};
        align-items: ${p.align || 'stretch'};
        flex-wrap: ${p.wrap || 'nowrap'};
        gap: ${p.gap || '0'};
    `}

    ${(p) =>
        p.display === 'grid' &&
        `
        grid-template-columns: ${p.gridTemplateColumns || '1fr'};
        grid-template-rows: ${p.gridTemplateRows || 'auto'};
        gap: ${p.gridGap || p.gap || '0'};
        align-items: ${p.alignItems || p.align || 'stretch'};
        justify-items: ${p.justifyItems || p.justify || 'stretch'};
    `}

    width: ${(p) => p.width || '100%'};
    height: ${(p) => p.height || 'auto'};
`;
