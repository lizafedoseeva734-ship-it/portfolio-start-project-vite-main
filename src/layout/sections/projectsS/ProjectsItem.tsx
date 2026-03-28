// ProjectsItem.tsx
import styled from 'styled-components';

type Props = {
    image: string;
};

export const ProjectItem = ({ image }: Props) => {
    return (
        <Card>
            <img src={image} alt="" />
        </Card>
    );
};

const Card = styled.div`
    border-radius: 16px;
    overflow: hidden;
    background: #eee;
    width: 100%;

    img {
        width: 100%;
        height: auto;
        display: block;
        transition: 0.4s;
    }

    &:hover img {
        transform: scale(1.05);
    }
`;
