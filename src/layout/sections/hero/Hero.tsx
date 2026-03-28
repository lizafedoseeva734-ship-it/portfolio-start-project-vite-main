// В компоненте Hero
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { Reveal } from '../../../components/Reveal';
import { Wrapper } from '../../../components/Wrapper';
import { Info } from './Info';

export const Hero = () => {
    return (
        <HeroSection>
            <div className="small-circle" />
            <Container>
                <Wrapper
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    alignItems="center"
                    gridGap="40px"
                >
                    <Reveal>
                        <Info />
                    </Reveal>
                    <Reveal>
                        <StyledImage
                            src="/src/assets/images/man.png"
                            alt="Simon John"
                        />
                    </Reveal>
                </Wrapper>
            </Container>
        </HeroSection>
    );
};

const HeroSection = styled.section`
    position: relative;
    background-color: #ffffff;
    overflow: hidden;

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
    }

    /* Самый маленький круг - самый мягкий бордер */
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
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    max-width: 708px;
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 4;
`;
