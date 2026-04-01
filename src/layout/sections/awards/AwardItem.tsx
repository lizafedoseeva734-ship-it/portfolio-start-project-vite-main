import styled from 'styled-components';
import { Description, TitleH3 } from '../../../components';
import { theme } from '../../../styles/theme';

export const AwardItem = () => {
    return (
        <ItemWrap as="a" href="#">
            <TitleH3 fontWeight={500} fontSize="22px">
                Interior Design
            </TitleH3>
            <Description
                fontWeight={300}
                fontSize="19px"
                lineHeight="188%"
                letterSpacing="0.02em"
                color="#3d506e"
            >
                Breakthrough designer of the year 2020
            </Description>
        </ItemWrap>
    );
};

const ItemWrap = styled.div`
    width: 100%;
    max-width: 384px;
    position: relative;
    padding-bottom: 40px;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        max-width: 355px;
        height: 2px;
        background: #9fbfff72;
        transition: width 0.3s ease;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        max-width: 100%;
        padding-bottom: 30px;

        &::after {
            max-width: 100%;
        }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding-bottom: 25px;
    }
`;
