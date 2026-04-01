import styled from 'styled-components';
import { Reveal, SectionTitle } from '../../components';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { mq } from '../../styles/mediaQueries';
import { theme } from '../../styles/theme';

export const TestimonialsText = () => {
    const narrowLayout = useMediaQuery(mq.tabletAndDown);

    return (
        <TestimonialsWrapper>
            <Reveal>
                <HeadingBlock>
                    <SectionTitle
                        subtitle="testimonials"
                        align={narrowLayout ? 'center' : 'left'}
                    />
                </HeadingBlock>
            </Reveal>
            <Reveal>
                <QuoteBlock>
                    <Quote>
                        “Lorem ipsum dolor sit amet, elit consectetur adipiscing.
                        Odio tincidunt et, massa, turpis nec dolor posuere tempus.
                        Nulla congue et dolor sit amet, elit consectetur
                        adipiscing.”
                        <Author color="#1e293b">
                            <cite>Lucas Wolfer</cite>
                        </Author>
                        <AuothorPost>ceo - raisins</AuothorPost>
                    </Quote>
                </QuoteBlock>
            </Reveal>
        </TestimonialsWrapper>
    );
};

const TestimonialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 55px;
    width: 100%;

    @media (max-width: ${theme.breakpoints.tablet}) {
        gap: 40px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: 30px;
    }
`;

const HeadingBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;

    @media (max-width: ${theme.breakpoints.tablet}) {
        justify-content: center;
    }
`;

const QuoteBlock = styled.div`
    width: 100%;
    text-align: left;
`;

const Quote = styled.blockquote`
    font-family: Manrope;
    font-weight: 400;
    font-size: 29px;
    line-height: 183%;
    letter-spacing: 0.01em;
    color: #1e293b;
    text-align: left;

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 24px;
        line-height: 160%;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 20px;
        line-height: 150%;
    }
`;

const Author = styled.footer`
    font-family: Manrope;
    font-weight: 500;
    font-size: 21px;
    line-height: 225%;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    margin-top: 24px;
    text-align: left;

    cite {
        font-style: normal;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 18px;
        margin-top: 16px;
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
    text-align: left;
`;
