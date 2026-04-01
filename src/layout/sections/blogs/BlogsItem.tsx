import styled from 'styled-components';
import { TitleH3 } from '../../../components';
import { theme } from '../../../styles/theme';

type BlogsItemProps = {
    title: string;
};

export const BlogsItem = ({ title }: BlogsItemProps) => {
    return (
        <BlogsItemWrap>
            <TitleH3
                fontWeight={500}
                fontSize="18px"
                lineHeight="176%"
                letterSpacing="0.03em"
                textTransform="capitalize"
            >
                {title}
            </TitleH3>

            <LinkReadMore>Read More →</LinkReadMore>
        </BlogsItemWrap>
    );
};

const BlogsItemWrap = styled.div`
    cursor: pointer;
    width: 265px;
    min-height: 100px;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    text-align: center;

    @media (max-width: ${theme.breakpoints.tablet}) {
        width: 240px;
        min-height: 90px;
        align-items: flex-start;
        text-align: left;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 100%;
        max-width: none;
        min-height: auto;
        gap: 12px;
        align-items: flex-start;
        text-align: left;
    }
`;

const LinkReadMore = styled.a`
    font-family: Manrope;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #3d506e;
    transition: 0.3s ease;
    display: inline-block;

    &:hover {
        color: #3b82f6;
        transform: translateX(4px);
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        &:hover {
            transform: translateX(0);
        }
    }
`;
