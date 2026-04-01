import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const LogoTxt = styled.a`
    position: relative;
    font-family: 'Manrope', sans-serif;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #0f172a;
    z-index: 2;

    &::before {
        content: 'С';
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translateY(-50%);
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 1;
        color: #3b82f6;
        z-index: -1;
        opacity: 0.2;
        pointer-events: none;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 30px;

        &::before {
            font-size: 44px;
        }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 28px;

        &::before {
            font-size: 42px;
            left: -6px;
        }
    }
`;
