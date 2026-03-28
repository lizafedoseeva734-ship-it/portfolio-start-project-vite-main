import styled, { keyframes } from 'styled-components';
import { Description, Reveal, TitleH2 } from '../../components';

export const FooterContent = () => {
    return (
        <Content>
            <Reveal>
                <LeftSection>
                    <TitleH2
                        fontWeight={600}
                        fontSize="90px"
                        lineHeight="115%"
                        letterSpacing="0.04em"
                        minWidth="733px"
                        minHeight="335px"
                        margin="0 0 26px 0"
                    >
                        Wanna <br /> be starting something ?
                    </TitleH2>

                    <Description
                        fontWeight={300}
                        fontSize="22px"
                        lineHeight="225%"
                        letterSpacing="0.02em"
                        minWidth="549px"
                        maxHeight="92px"
                        margin="0 0 90px 0"
                    >
                        Just feel free to contact if you wanna collaborate with
                        me, or simply have a conversation.
                    </Description>

                    <Socials>
                        <SocialLink href="#">Facebook</SocialLink>
                        <SocialLink href="#">Twitter</SocialLink>
                        <SocialLink href="#">LinkedIn</SocialLink>
                        <SocialLink href="#">Youtube</SocialLink>
                    </Socials>
                </LeftSection>
            </Reveal>

            <RightSection>
                <Email href="mailto:Creatify@gmail.com">
                    Creatify@gmail.com
                </Email>
            </RightSection>
        </Content>
    );
};


const pulse = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    }
`;

const wave = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
`;

const Content = styled.div`
    display: flex;
    gap: 62px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 60px;
    }
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
`;

const RightSection = styled.div`
    display: flex;
    align-items: flex-end;
    padding-bottom: 24px;
`;

const Email = styled.a`
    font-weight: 500;
    font-size: 60px;
    line-height: 183%;
    letter-spacing: 0.01em;
    color: #0f172a;
    border-bottom: 2px solid #0f172a;
    transition: all 0.9s ease;
    display: inline-flex;
    align-items: center;
    gap: 12px;

    &:hover {
        color: #98bffe;
        border-bottom-color: #98bffe;
        animation: ${pulse} 1s ease-out;
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const Socials = styled.div`
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    margin-top: 8px;
`;

const SocialLink = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #0f172a;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        width: 0;
        height: 2px;
        background: #98bffe;
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }

    &:hover {
        color: #98bffe;

        &::before {
            width: 100%;
        }
    }

    &:active {
        transform: scale(0.95);
    }
`;
