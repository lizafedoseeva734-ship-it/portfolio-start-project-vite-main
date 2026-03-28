import { a } from 'framer-motion/client';
import styled from 'styled-components';
import { Container, Reveal, SectionTitle, Wrapper } from '../../components';
import { Icon } from '../../components/Icon';
import { BlogsItem } from './BlogsItem';

export const Blogs = () => {
    return (
        <BlogsSection>
            <Container>
                <Wrapper display="flex" justify="center">
                    <ContentWrapper>
                        <Reveal>
                            <SectionTitle
                                subtitle="blogs"
                                title="Latest News"
                            />
                        </Reveal>
                        <Reveal>
                            <BlogsGrid>
                                <BlogsItem title="Graphic Designing Useful Tips & Best Practices" />
                                <BlogsItem title="Basic Typography Rules For UI Designing" />
                                <BlogsItem title="Top 10 Graphic Designs Review In 2021" />

                                <ViewAll as={a} href="#">
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
`;


const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1232px;
    height: 100%;
`;

const BlogsGrid = styled.div`
    margin-top: 80px;
    display: flex;
    align-items: center;
    gap: 0;
    width: 100%;

    & > * {
        flex-shrink: 0;
    }

    & > *:not(:last-child) {
        position: relative;
        margin-right: 20px;

        &::after {
            content: '';
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 155px;
            background-color: #9fbfff72;
            margin-right: 18px;
        }
    }
`;

const ViewAll = styled.button`
    display: flex;
    gap: 12px;
    width: 178px;
    height: 38px;
    margin-left: 60px;
    font-weight: 600;
    font-size: 16px;
    line-height: 235%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    color: #3b82f6;
    background-color: transparent;
    cursor: pointer;
    border: none;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    position: relative;

    &::before,
    &::after {
        content: '';
        position: absolute;
        transition: all 0.6s ease;
    }

    &::before {
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #9fbfff72;
    }

    &::after {
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background-color: #9fbfff72;
    }

    &:hover {
        &::before {
            width: 100%;
        }

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
`;
