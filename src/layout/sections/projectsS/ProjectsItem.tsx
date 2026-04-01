// ProjectsItem.tsx
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
    buildDensitySrcSet,
    SIZES_PORTFOLIO_GRID,
} from '../../../lib/retinaImage';
import { theme } from '../../../styles/theme';

type ProjectItemProps = {
    image: string;
    image2x?: string;
    delay?: number;
};

export const ProjectItem = ({
    image,
    image2x,
    delay = 0,
}: ProjectItemProps) => {
    return (
        <ItemWrapper
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
            <ImageContainer>
                <Image
                    src={image}
                    srcSet={buildDensitySrcSet(image, image2x)}
                    sizes={SIZES_PORTFOLIO_GRID}
                    alt="Project"
                    decoding="async"
                    loading="lazy"
                />
                <Overlay>
                    <ViewButton as="a" href="#">
                        View Project →
                    </ViewButton>
                </Overlay>
            </ImageContainer>
        </ItemWrapper>
    );
};

const ItemWrapper = styled(motion.div)`
    width: 100%;
    cursor: pointer;
    max-width: 100%;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    background: #f9f1f1;
    display: inline-block;

    @media (max-width: ${theme.breakpoints.mobile}) {
        border-radius: 10px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;

    ${ItemWrapper}:hover & {
        transform: scale(1.03);
    }
`;

const Overlay = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 42, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease;
    backdrop-filter: blur(4px);

    ${ItemWrapper}:hover & {
        opacity: 1;
    }

    @media (max-width: ${theme.breakpoints.mobile}) and (hover: none) {
        opacity: 1;
        align-items: flex-end;
        padding: 16px;
        background: linear-gradient(180deg, transparent 35%, #0f172ae0 100%);
        backdrop-filter: none;
    }
`;

const ViewButton = styled.button`
    background: transparent;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.6s ease;
    letter-spacing: 0.5px;
    border: 1px solid white;

    ${ItemWrapper}:hover & {
        transform: translateY(0);
        opacity: 1;
    }

    @media (max-width: ${theme.breakpoints.mobile}) and (hover: none) {
        background-color: transparent;
        transform: translateY(0);
        border: 1px solid white;
        color: white;
        opacity: 1;
        padding: 10px 18px;
        font-size: 13px;
    }

    &:hover {
        box-shadow: 0 0px 25px #9bafdddf;
        transform: scale(1.05);
    }
`;
