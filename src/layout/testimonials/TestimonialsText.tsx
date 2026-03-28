import styled from 'styled-components';
import { Reveal, SectionTitle } from '../../components';
import { theme } from '../../styles/theme';

export const TestimonialsText = () => {
    return (
        <TestimonialsWrapper>
            <Reveal>
                <SectionTitle subtitle="testimonials" />
            </Reveal>
            <Reveal>
            <Quote>
                “Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio
                tincidunt et, massa, turpis nec dolor posuere tempus. Nulla
                congue et dolor sit amet, elit consectetur adipiscing.”
                <Author color="#1e293b">
                    <cite>Lucas Wolfer</cite>
                </Author>
                <AuothorPost>ceo - raisins</AuothorPost>
            </Quote>
            </Reveal>
        </TestimonialsWrapper>
    );
};

const TestimonialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; /* прижато к левому краю */
    gap: 55px; /* расстояние между заголовком и цитатой */
`;

const Quote = styled.blockquote`
    font-family: Manrope;
    font-weight: 400;
    font-size: 29px;
    line-height: 183%;
    letter-spacing: 0.01em;
    color: #1e293b;
`;

const Author = styled.footer`
    font-family: Manrope;
    font-weight: 500;
    font-size: 21px;
    line-height: 225%;
    letter-spacing: 0.02em;
    text-transform: capitalize;

    cite {
        font-style: normal;
    }
`;

const AuothorPost = styled.p`
    font-family: Manrope;
    font-weight: 500;
    font-size: 14px;
    line-height: 179%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${theme.colors.primary[500]};
`;
