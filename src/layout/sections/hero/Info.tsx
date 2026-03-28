// src/layout/sections/hero/Info.tsx
import styled from 'styled-components';
import { Description, Icon, Reveal, Title, TitleH2 } from '../../../components';
import { theme } from '../../../styles/theme';

export const Info = () => {
    return (
        <InfoDiv>
            <Reveal direction="up" delay={0.1}>
                <SmallTitle>
                    <Icon
                        name="hand"
                        width={24}
                        height={24}
                        color={theme.colors.primary[500]}
                    />
                    <TitleH2
                        fontFamily="Inconsolata"
                        fontSize="18px"
                        fontWeight={400}
                        letterSpacing="0.24em"
                        color={theme.colors.primary[500]}
                        textTransform="uppercase"
                        lineHeight="126%"
                    >
                        Hi! Everyone
                    </TitleH2>
                </SmallTitle>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
                <Title
                    margin="32px 0px 24px 0px"
                    maxWidth="533px"
                    fontFamily="Manrope"
                >
                    Simon John Brand Designer
                </Title>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
                <Description margin="0px 0px 48px 0px" maxWidth="533px">
                    Make designs mainly logos, visual identities, apps &
                    websites, social media and magazines.
                </Description>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
                <ContactButton href="#">
                    <span className="text">GET IN TOUCH</span>
                    <span className="circle">
                        <Icon
                            name="arrow"
                            width={18}
                            height={18}
                            color="#fff"
                        />
                    </span>
                </ContactButton>
            </Reveal>
        </InfoDiv>
    );
};

const InfoDiv = styled.div`
    padding-top: 130px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding-top: 80px;
        align-items: center;
        text-align: center;
    }
`;

const SmallTitle = styled.div`
    width: 100%;
    max-width: 533px;
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: ${theme.breakpoints.mobile}) {
        justify-content: center;
    }
`;

const ContactButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    width: 260px;
    height: 60px;
    padding: 0 0 0 28px;
    border-radius: 60px;
    border: 1px solid rgba(59, 130, 246, 0.2);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    font-family: Manrope;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.08em;
    color: ${theme.colors.dark[900]};
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    .text {
        transition: all 0.4s ease;
    }

    .circle {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.dark[900]};
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
        border-color: ${theme.colors.primary[500]};
        background: #fff;
        box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3);
        transform: translateY(-2px);

        .text {
            transform: translateX(4px);
            letter-spacing: 0.1em;
            color: ${theme.colors.primary[500]};
        }

        .circle {
            transform: scale(1.05);
            background: ${theme.colors.primary[500]};
        }
    }

    &:active {
        transform: translateY(0);
    }
`;
