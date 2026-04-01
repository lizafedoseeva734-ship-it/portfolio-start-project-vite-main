import styled from 'styled-components';
import { theme } from '../styles/theme';

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 0 30px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 0 16px;
    }
`;
