// src/layout/Header.tsx
import { useState } from 'react';
import styled from 'styled-components';
import { Container, Icon, Wrapper } from '../../components';
import { media } from '../../styles/mixins';
import { theme } from '../../styles/theme';
import { LogoTxt } from './LogoTxt';
import { MenuOpen } from './MenuOpen';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <StyledHeader>
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

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 200px;
    z-index: 100;

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
