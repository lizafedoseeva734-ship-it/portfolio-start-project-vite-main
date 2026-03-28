import styled from 'styled-components';
import { Container, Wrapper } from '../../components';
import { FooterContent } from './FooterContent';

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <div className="small-circle" />
                <Wrapper display="flex" justify="center">
                    <ContentWrapper>
                        <FooterContent />
                    </ContentWrapper>
                </Wrapper>
            </Container>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
    position: relative;
    padding: 120px 0;
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

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1250px;
    height: 100%;
    position: relative;
    z-index: 4;
`;
