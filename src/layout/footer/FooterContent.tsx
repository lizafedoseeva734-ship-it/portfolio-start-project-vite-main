import styled, { keyframes } from 'styled-components';
import { Description, Reveal, TitleH2 } from '../../components';
import { theme } from '../../styles/theme';

export const FooterContent = () => {
    return (
        <Content>
            <Reveal>
                <LeftSection>
                    <FooterHeadline
                        fontWeight={600}
                        fontSize="90px"
                        lineHeight="115%"
                        letterSpacing="0.04em"
                        margin="0 0 26px 0"
                    >
                        Wanna <br /> be starting something ?
                    </FooterHeadline>
                    <FooterDescription
                        fontWeight={300}
                        fontSize="22px"
                        lineHeight="225%"
                        letterSpacing="0.02em"
                        margin="0 0 20px 0"
                    >
                        Just feel free to contact if you wanna collaborate with
                        me, or simply have a conversation.
                    </FooterDescription>

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

const FooterHeadline = styled(TitleH2)`
    width: 733px;
    @media (max-width: ${theme.breakpoints.desktop}) {
        font-size: clamp(36px, 6vw, 72px) !important;
        line-height: 115% !important;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 36px !important;
        width: 100%;
    }
`;

const FooterDescription = styled(Description)`
    width: 549px;

    @media (max-width: ${theme.breakpoints.tablet}) {
        max-width: 100%;
    }
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    @media (max-width: ${theme.breakpoints.tablet}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: 28px;
    }
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-width: min(0, 100%);
    max-width: 500px;
    width: fit-content;
    align-items: flex-start;
    text-align: left;

    @media (max-width: ${theme.breakpoints.tablet}) {
        max-width: 100%;
        width: auto;
    }
`;

const RightSection = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-shrink: 0;
    align-items: flex-end;
    padding-bottom: 24px;
    min-width: 0;
    max-width: 100%;

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding-bottom: 0;
        align-items: flex-start;
        align-self: flex-start;
    }
`;

const Email = styled.a`
    font-weight: 500;
    font-size: clamp(28px, 4vw, 60px);
    line-height: 1.25;
    letter-spacing: 0.01em;
    color: #0f172a;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
    text-decoration-color: #0f172a;
    border-bottom: none;
    transition:
        color 0.6s ease,
        text-decoration-color 0.6s ease;
    display: inline-block;
    max-width: 100%;
    word-break: break-word;
    overflow-wrap: anywhere;
    position: relative;
    z-index: 1;

    &:hover {
        color: #98bffe;
        text-decoration-color: #98bffe;
        animation: ${pulse} 1.5 ease-out;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: clamp(22px, 6.5vw, 32px);
        text-underline-offset: 4px;
    }
`;

const Socials = styled.div`
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    margin-top: 60px;
    width: fit-content;
    max-width: 100%;

    @media (max-width: ${theme.breakpoints.tablet}) {
        gap: 32px;
        margin-top: 30px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: 28px;
        margin-top: 15px;
    }

    @media (max-width: 480px) {
        gap: 24px;
    }
`;

const SocialLink = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #0f172a;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.6s ease;

    &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: #98bffe;
        transition: all 0.6s ease;
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

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 13px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;
