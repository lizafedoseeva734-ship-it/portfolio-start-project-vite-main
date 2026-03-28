import styled from 'styled-components';
import { Container } from '../../components/Container';
import { Wrapper } from '../../components/Wrapper';
import { TestimonialsText } from './TestimonialsText';
import { Reveal } from '../../components/Reveal';

export const Testimonials = () => {
    return (
        <TestimonialsSection>
            <Container>
                <Wrapper>
                    <Reveal>
                        <PhotoWrapper>
                            <img
                                src="/src/assets/images/Rectangle79.png"
                                alt="Simon John"
                            />
                        </PhotoWrapper>
                    </Reveal>
                    <TestimonialsText />
                </Wrapper>
            </Container>
        </TestimonialsSection>
    );
};

const TestimonialsSection = styled.section`
    padding: 160px 0;
    background-color: #fafbfc;

`;

const PhotoWrapper = styled.div`
    img {
        margin-right: 80px;
        width: 580px;
        height: 590px;
        display: block;
    }
`;


