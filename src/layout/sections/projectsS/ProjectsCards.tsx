// ProjectsCards.tsx
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mq } from '../../../styles/mediaQueries';
import { theme } from '../../../styles/theme';
import { projects } from './projectsData';
import { ProjectItem } from './ProjectsItem';
import { splitIntoColumns } from './splitIntoColumns';

const categories = ['all', 'magazines', 'package', 'branding', 'web', 'logo'];

export const ProjectsCards = () => {
    const [active, setActive] = useState('all');
    const isMobile = useMediaQuery(mq.mobileAndDown);
    const isTablet = useMediaQuery(mq.tabletOnly);

    // Создаем массив с учетом видимости карточек, но сохраняем исходный порядок
    const orderedWithVisibility = useMemo(() => {
        return projects.map((project) => ({
            ...project,
            isVisible: active === 'all' || project.category === active,
        }));
    }, [active]);

    // Для расчета колонок используем исходный порядок, но фильтруем видимые элементы
    const visibleProjects = useMemo(() => {
        return orderedWithVisibility.filter((p) => p.isVisible);
    }, [orderedWithVisibility]);

    const columnCount = isMobile ? 1 : isTablet ? 2 : 3;
    const effectiveColumnCount = Math.min(columnCount, projects.length);

    // Разбиваем на колонки ТОЛЬКО видимые проекты, но в том же порядке, как они идут в projects
    const columns = useMemo(() => {
        const visibleOnly = visibleProjects.map((p) => p);
        return splitIntoColumns(visibleOnly, effectiveColumnCount);
    }, [visibleProjects, effectiveColumnCount]);

    return (
        <CardsWrapper>
            <SectionTitle
                subtitle="Portfolio"
                title="Lastet Works"
                align="center"
            />

            <Filters>
                {categories.map((cat) => (
                    <FilterButton
                        key={cat}
                        className={active === cat ? 'active' : ''}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </FilterButton>
                ))}
            </Filters>

            <MasonryRoot $tracks={columns.length}>
                {columns.map((columnItems, colIndex) => (
                    <MasonryColumn key={colIndex}>
                        {columnItems.map((item) => {
                            // Находим индекс в оригинальном массиве projects для задержки анимации
                            const originalIndex = projects.findIndex(
                                (p) => p.id === item.id
                            );
                            return (
                                <ProjectItem
                                    key={item.id}
                                    image={item.image}
                                    image2x={item.image2x}
                                    delay={originalIndex * 0.08}
                                />
                            );
                        })}
                    </MasonryColumn>
                ))}
            </MasonryRoot>

            <LoadMoreButton>VIEW ALL WORKS</LoadMoreButton>
        </CardsWrapper>
    );
};

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 0 16px;
    }
`;

const Filters = styled.div`
    margin: 50px 0 40px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.tablet}) {
        margin: 40px 0 32px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: 12px;
        margin: 30px 0;
    }
`;

const FilterButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.6s ease;
    text-transform: capitalize;
    padding: 8px 20px;
    border-radius: 30px;
    color: #64748b;
    font-weight: 500;
    letter-spacing: 0.3px;

    &.active {
        color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
    }

    &:hover {
        color: #3b82f6;
        background: rgba(59, 130, 246, 0.05);
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 6px 16px;
        font-size: 13px;
    }
`;

const MasonryRoot = styled.div<{ $tracks: number }>`
    display: grid;
    grid-template-columns: repeat(
        ${(p) => Math.max(1, p.$tracks)},
        minmax(0, 1fr)
    );
    align-items: start;
    gap: 24px;
    width: 100%;
    max-width: 100%;
    margin-bottom: 60px;
    box-sizing: border-box;

    @media (max-width: ${theme.breakpoints.tablet}) {
        gap: 20px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: 22px;
        margin-bottom: 40px;
    }
`;

const MasonryColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-width: 0;
    width: 100%;

    @media (max-width: ${theme.breakpoints.tablet}) {
        gap: 20px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: 22px;
    }
`;

const LoadMoreButton = styled.button`
    width: 238px;
    height: 56px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #ffffff;
    background: #0f172a;
    border: 2px solid #0f172a;
    cursor: pointer;
    transition: all 0.6s ease;

    &:hover {
        color: ${theme.colors.dark[900]};
        background: ${theme.colors.white};
        border-color: ${theme.colors.primary[500]};
        transform: translateY(-2px);
        box-shadow: 0 10px 20px -10px rgba(59, 130, 246, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 200px;
        height: 48px;
        font-size: 12px;
    }
`;
