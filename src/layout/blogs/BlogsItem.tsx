import styled from 'styled-components';
import { TitleH3 } from '../../components';

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
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LinkReadMore = styled.a`
    font-family: Manrope;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #3d506e;
    transition: 0.4s ease;
    &:hover {
        color: #3b82f6;
    }
`;
