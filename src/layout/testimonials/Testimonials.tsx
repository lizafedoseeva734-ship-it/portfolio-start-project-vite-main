import styled from 'styled-components';
import { Container } from '../../components/Container';
import {
    buildDensitySrcSet,
    SIZES_TESTIMONIALS_PHOTO,
} from '../../lib/retinaImage';
import { theme } from '../../styles/theme';
import { Reveal } from '../../components/Reveal';
import { TestimonialsText } from './TestimonialsText';

const TESTIMONIALS_PHOTO_SRC = '/src/assets/images/Rectangle79.png';

export const Testimonials = () => {
    return (
        <TestimonialsSection id="testimonials">
            <Container>
                <TestimonialsGrid>
                    <Reveal>
                        <PhotoWrapper>
                            <TestimonialPhoto
                                src={TESTIMONIALS_PHOTO_SRC}
                                srcSet={buildDensitySrcSet(TESTIMONIALS_PHOTO_SRC)}
                                sizes={SIZES_TESTIMONIALS_PHOTO}
                                alt="Simon John"
                                decoding="async"
                                loading="lazy"
                            />
                        </PhotoWrapper>
                    </Reveal>
                    <TestimonialsText />
                </TestimonialsGrid>
            </Container>
        </TestimonialsSection>
    );
};

const TestimonialsSection = styled.section`
    padding: 120px 0;
    background-color: #fafbfc;

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 80px 0;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 60px 0;
    }
`;

const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 80px;

    @media (max-width: ${theme.breakpoints.tablet}) {
        gap: 50px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 40px;
        justify-items: center;
    }
`;

const TestimonialPhoto = styled.img`
    width: 100%;
    max-width: 480px;
    height: auto;
    display: block;
    border-radius: 24px;
    margin: 0 auto;

    @media (min-width: 768px) and (max-width: ${theme.breakpoints.tablet}) {
        max-width: min(100%, 560px);
    }

    @media (max-width: 767px) {
        max-width: min(100%, 300px);
    }
`;

const PhotoWrapper = styled.div`
    width: 100%;
`;
