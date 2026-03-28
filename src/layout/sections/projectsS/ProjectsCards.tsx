import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/Icon';
import { Title } from '../../../components/Title';
import { TitleH2 } from '../../../components/TitleH2';
import { projects } from './projectsData';
import { ProjectItem } from './ProjectsItem';
import { theme } from '../../../styles/theme';


const categories = ['all', 'magazines', 'package', 'branding', 'web', 'logo'];

export const ProjectsCards = () => {
    const [active, setActive] = useState('all');

    const filtered =
        active === 'all'
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <CardsWrapper>
            <SmallTitle>
                <Icon name="wave" width={52} height={4} color="#111" />
                <Title
                    margin="0px 0px 0px 30px"
                    fontWeight={400}
                    fontSize="18px"
                    lineHeight="126%"
                    letterSpacing="0.2em"
                    color="#4C6FFF"
                    textTransform="uppercase"
                >
                    portfolio
                </Title>
            </SmallTitle>

            <TitleH2 fontSize="52px" lineHeight="150%">
                Latest Works
            </TitleH2>

            <Filters>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={active === cat ? 'active' : ''}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </Filters>

            <Grid>
                {filtered.map((item) => (
                    <ProjectItem key={item.id} image={item.image} />
                ))}
            </Grid>

            <LoadMoreButton>VIEW ALL WORKS</LoadMoreButton>
        </CardsWrapper>
    );
};

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1146px;
    margin: 0 auto;
`;

const SmallTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Filters = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 14px;
        color: #888;
        transition: 0.3s;
        text-transform: capitalize;
        padding: 5px 0;
    }

    button.active {
        color: #111;
        font-weight: 600;
    }

    button:hover {
        color: #111;
    }
`;

const Grid = styled.div`
    column-count: 3;
    column-gap: 24px;
    margin-top: 60px;
    width: 100%;

    & > div {
        margin-bottom: 24px;
        break-inside: avoid;
    }

    @media (max-width: 992px) {
        column-count: 2;
    }

    @media (max-width: 576px) {
        column-count: 1;
    }
`;

const LoadMoreButton = styled.button`
    width: 238px;
    height: 62px;
    margin-top: 92px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
    background: #0f172a;
    border: 2px solid #0f172a;
    cursor: pointer;
    transition: all 0.7s;
    position: relative;
    overflow: hidden;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;

        background: rgba(59, 130, 246, 0.1);
        transform: translate(-50%, -50%);
        transition:
            width 0.7s ease,
            height 0.7s ease;
    }

    &:hover {
        color: ${theme.colors.dark[900]};
        background: ${theme.colors.white};
        border-color: ${theme.colors.primary[500]};
        transform: translateY(-2px);
        box-shadow: 0 10px 20px -10px rgba(59, 130, 246, 0.3);

        &::before {
            width: 300px;
            height: 300px;
        }
    }

    &:active {
        transform: translateY(0);
        transition: transform 0.1s ease;
    }
`;
