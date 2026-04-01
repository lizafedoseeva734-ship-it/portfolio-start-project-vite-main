// src/components/sections/Hero/Hero.tsx
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { Reveal } from '../../../components/Reveal';
import { Wrapper } from '../../../components/Wrapper';
import { buildDensitySrcSet, SIZES_HERO_IMAGE } from '../../../lib/retinaImage';
import { media } from '../../../styles/mixins';
import { Info } from './Info';

const HERO_PHOTO_SRC = '/src/assets/images/man.png';

export const Hero = () => {
    return (
        <HeroSection>
            <div className="small-circle" />
            <Container>
                <StyledWrapper
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    alignItems="center"
                    gridGap="40px"
                >
                    <Reveal>
                        <Info />
                    </Reveal>
                    <Reveal>
                        <ImageContainer>
                            <StyledImage
                                src={HERO_PHOTO_SRC}
                                srcSet={buildDensitySrcSet(HERO_PHOTO_SRC)}
                                sizes={SIZES_HERO_IMAGE}
                                alt="Simon John"
                                decoding="async"
                                loading="eager"
                            />
                        </ImageContainer>
                    </Reveal>
                </StyledWrapper>
            </Container>
        </HeroSection>
    );
};

const HeroSection = styled.section`
    position: relative;
    background-color: #ffffff;
    overflow: hidden;
    padding-bottom: 40px;

    ${media.mobile`
        padding-bottom: 24px;
    `}

    &::before {
        content: '';
        position: absolute;
        width: 620px;
        height: 620px;
        left: -200px;
        top: -200px;
        border-radius: 100%;
        background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.08) 0%,
            rgba(96, 165, 250, 0.03) 100%
        );
        border: 1px solid rgba(59, 130, 246, 0.08);
        box-shadow: 4px 6px 25px -2px rgba(59, 130, 246, 0.08);
        pointer-events: none;
        z-index: 1;

        ${media.tablet`
            width: 450px;
            height: 450px;
            left: -150px;
            top: -150px;
        `}

        ${media.mobile`
            width: 280px;
            height: 280px;
            left: -100px;
            top: -100px;
        `}
    }

    &::after {
        content: '';
        position: absolute;
        width: 420px;
        height: 420px;
        left: -120px;
        top: -120px;
        border-radius: 100%;
        background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.12) 0%,
            rgba(96, 165, 250, 0.05) 100%
        );
        border: 1px solid rgba(59, 130, 246, 0.1);
        box-shadow: 4px 6px 25px -2px rgba(59, 130, 246, 0.1);
        pointer-events: none;
        z-index: 2;

        ${media.tablet`
            width: 300px;
            height: 300px;
            left: -90px;
            top: -90px;
        `}

        ${media.mobile`
            width: 200px;
            height: 200px;
            left: -60px;
            top: -60px;
        `}
    }


    .small-circle {
        position: absolute;
        width: 220px;
        height: 220px;
        left: -60px;
        top: -60px;
        border-radius: 100%;
        background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.15) 0%,
            rgba(96, 165, 250, 0.08) 100%
        );
        border: 1px solid rgba(59, 130, 246, 0.12);
        box-shadow: 4px 6px 25px -2px rgba(59, 130, 246, 0.12);
        pointer-events: none;
        z-index: 3;

        ${media.tablet`
            width: 160px;
            height: 160px;
            left: -40px;
            top: -40px;
        `}

        ${media.mobile`
            width: 120px;
            height: 120px;
            left: -30px;
            top: -30px;
        `}
    }
`;

const StyledWrapper = styled(Wrapper)`
    ${media.tablet`
        grid-template-columns: 1fr;
        gap: 48px;

        & > *:nth-child(1) {
            order: 2;
        }
        & > *:nth-child(2) {
            order: 1;
        }
    `}

    ${media.mobile`
        grid-template-columns: 1fr;
        gap: 28px;

        & > *:nth-child(1) {
            order: 2;
        }
        & > *:nth-child(2) {
            order: 1;
        }
    `}
`;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.tablet`
        width: 100%;
        max-width: none;
        margin: 0;
    `}

    ${media.mobile`
        width: 100%;
        max-width: none;
        margin: 0;
    `}
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 708px;
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 4;
    object-fit: contain;

    ${media.tablet`
        max-width: none;
        width: 100%;
    `}

    ${media.mobile`
        max-width: none;
        width: 100%;
    `}
`;
