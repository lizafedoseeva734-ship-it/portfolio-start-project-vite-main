import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Icon, Wrapper } from '../../components';
import { media } from '../../styles/mixins';
import { theme } from '../../styles/theme';
import { LogoTxt } from './LogoTxt';
import { MenuOpen } from './MenuOpen';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <StyledHeader $isScrolled={isScrolled}>
                <Container>
                    <Wrapper
                        justify="space-between"
                        align="center"
                        height="72px"
                    >
                        <LogoTxt href="#">Creatify.</LogoTxt>
                        <StyledButton
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Menu"
                        >
                            <Icon name="burger-menu" width={28} height={20} />
                        </StyledButton>
                    </Wrapper>
                </Container>
            </StyledHeader>
            {isMenuOpen && <MenuOpen onClose={() => setIsMenuOpen(false)} />}
        </>
    );
};

const StyledHeader = styled.header<{ $isScrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 30px 200px 0;
    z-index: 100;

    transition: all ${theme.transitions.base};

    background: ${({ $isScrolled }) =>
        $isScrolled ? 'rgba(255, 255, 255, 0.005)' : 'transparent'};

    backdrop-filter: ${({ $isScrolled }) =>
        $isScrolled ? 'blur(12px)' : 'blur(0px)'};
    -webkit-backdrop-filter: ${({ $isScrolled }) =>
        $isScrolled ? 'blur(12px)' : 'blur(0px)'};

    @supports not (backdrop-filter: blur(12px)) {
        background: ${({ $isScrolled }) =>
            $isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
    }

    @media (max-width: 1280px) {
        padding: 0 100px;
    }

    @media (max-width: 1024px) {
        padding: 0 50px;
    }

    ${media.mobile`
        padding: 0 20px;
    `}
`;

const StyledButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    border-radius: 8px;
    transition: ${theme.transitions.base};
    color: ${theme.colors.dark[900]};

    &:hover {
        background-color: rgba(59, 130, 246, 0.08);
    }

    &:active {
        transform: scale(0.95);
    }
`;
