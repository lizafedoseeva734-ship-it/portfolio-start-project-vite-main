import styled from 'styled-components';
import {
    Container,
    Icon,
    Reveal,
    SectionTitle,
    Wrapper,
} from '../../../components';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mq } from '../../../styles/mediaQueries';
import { theme } from '../../../styles/theme';
import { BlogsItem } from './BlogsItem';

export const Blogs = () => {
    const compactLayout = useMediaQuery(mq.tabletAndDown);

    return (
        <BlogsSection id="blogs">
            <Container>
                <Wrapper display="flex" justify="center">
                    <ContentWrapper $compact={compactLayout}>
                        <Reveal>
                            <SectionTitle
                                subtitle="blogs"
                                title="Latest News"
                                align="left"
                            />
                        </Reveal>
                        <Reveal>
                            <BlogsGrid>
                                <BlogsItem title="Graphic Designing Useful Tips & Best Practices" />
                                <BlogsItem title="Basic Typography Rules For UI Designing" />
                                <BlogsItem title="Top 10 Graphic Designs Review In 2021" />

                                <ViewAll as="a" href="#">
                                    view all works
                                    <Icon
                                        name="arrowBlogs"
                                        width={16}
                                        height={36}
                                    />
                                </ViewAll>
                            </BlogsGrid>
                        </Reveal>
                    </ContentWrapper>
                </Wrapper>
            </Container>
        </BlogsSection>
    );
};

const BlogsSection = styled.section`
    padding: 120px 0;
    background: #fafafa;

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 80px 0;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 60px 0;
    }
`;

const ContentWrapper = styled.div<{ $compact: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${(p) => (p.$compact ? 'flex-start' : 'center')};
    width: 100%;
    max-width: 1232px;
    margin: 0 auto;
    overflow-x: auto;
    overflow-y: visible;
    text-align: ${(p) => (p.$compact ? 'left' : 'center')};

    &::-webkit-scrollbar {
        height: 0;
        background: transparent;
    }

    scrollbar-width: none;

    -ms-overflow-style: none;
`;

const BlogsGrid = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: flex-start;
    gap: 0;
    width: 100%;

    & > * {
        flex-shrink: 0;
    }

    & > *:not(:last-child) {
        position: relative;
        margin-right: 30px;
        padding-right: 30px;

        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 120px;
            background-color: rgba(59, 130, 246, 0.2);
        }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        margin-top: 60px;
        gap: 0;

        align-items: flex-start;

        & > *:not(:last-child) {
            margin-right: 25px;
            padding-right: 25px;
        }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        margin-top: 40px;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        justify-content: flex-start;

        & > *:not(:last-child) {
            margin-right: 0;
            padding-right: 0;

            &::after {
                display: none;
            }
        }

        overflow-x: visible;
    }
`;

const ViewAll = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 12px;
    width: auto;
    min-width: 178px;

    margin-left: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 235%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    color: #3b82f6;
    border: none;
    white-space: nowrap;
    position: relative;
    transition: all 0.9s ease;

    &::before,
    &::after {
        content: '';
        position: absolute;
        transition: all 0.9s ease;
    }

    &::before {
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #3b82f6;
    }

    &::after {
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background-color: #3b82f6;
    }

    &:hover {
        color: #1e40af;

        &::before,
        &::after {
            width: 100%;
        }

        svg {
            transform: translateX(4px);
        }
    }

    svg {
        transition: transform 0.3s ease;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        margin-top: 3%;
        margin-left: 0; /* Убираем margin-left на планшетах для центрирования */
        align-items: center;
        font-size: 14px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        margin-left: 0;
        margin-top: 20px;
        min-width: auto;
        align-items: center;
    }
`;
