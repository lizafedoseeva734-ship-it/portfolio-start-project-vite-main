
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Icon } from './Icon';

type SectionTitleProps = {
    subtitle?: string;
    title?: string;
    align?: 'left' | 'center' | 'right';
    titleAs?: 'h2' | 'h3' | 'h4';
    className?: string;
    subtitleColor?: string;
    titleColor?: string;
};

export const SectionTitle = (props: SectionTitleProps) => {
    const {
        subtitle,
        title,
        align = 'left',
        titleAs = 'h2',
        className,
        subtitleColor = theme.colors.primary[500],
        titleColor = theme.colors.dark[900],
    } = props;

    return (
        <StyledSectionTitle align={align} className={className}>
            {subtitle && (
                <SubtitleWrapper $align={align}>
                    <WaveIcon
                        name="wave"
                        width={52}
                        height={4}
                        color={subtitleColor}
                    />
                    <Subtitle $color={subtitleColor}>{subtitle}</Subtitle>
                </SubtitleWrapper>
            )}
            {title && (
                <Title as={titleAs} $color={titleColor}>
                    {title}
                </Title>
            )}
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.div<{ align: string }>`
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: ${(p) => p.align};
    width: 100%;

    ${(p) =>
        p.align === 'center' &&
        `
        align-items: center;
    `}

    ${(p) =>
        p.align === 'right' &&
        `
        align-items: flex-end;
    `}
`;

const SubtitleWrapper = styled.div<{ $align: string }>`
    display: flex;
    align-items: center;
    gap: 20px;


    justify-content: ${(p) =>
        p.$align === 'center'
            ? 'center'
            : p.$align === 'right'
              ? 'flex-end'
              : 'flex-start'};
`;

const WaveIcon = styled(Icon)`
    flex-shrink: 0;
`;

const Subtitle = styled.span<{ $color: string }>`
    font-family: 'Inconsolata', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 126%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${(p) => p.$color};
`;

const Title = styled.h2<{ $color: string }>`
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 52px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${(p) => p.$color};
    max-width: 570px;
    width: auto;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: clamp(32px, 8vw, 52px);
        line-height: 130%;
        max-width: 100%;
        width: 100%;
    }
`;
