import styled from 'styled-components';
import { Container, Reveal, SectionTitle, Wrapper } from '../../../components';
import { theme } from '../../../styles/theme';
import { AwardItem } from './AwardItem';

export const Awards = () => {
    return (
        <AwardsSection id="awards">
            <Container>
                <Wrapper display="flex" justify="center" width="100%">
                    <ContentWrapper>
                        <Reveal>
                            <SectionTitle
                                subtitle="awards"
                                title="Awards & Recognition"
                            />
                        </Reveal>
                        <Reveal>
                            <AwardsGrid>
                                <AwardItem />
                                <AwardItem />
                                <AwardItem />
                                <AwardItem />
                                <AwardItem />
                                <AwardItem />
                            </AwardsGrid>
                        </Reveal>
                    </ContentWrapper>
                </Wrapper>
            </Container>
        </AwardsSection>
    );
};

const AwardsSection = styled.section`
    padding: 120px 0;
    background: #ffffff;

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 80px 0;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 60px 0;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1232px;
`;

const AwardsGrid = styled.div`
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
    row-gap: 60px;
    width: 100%;

    @media (max-width: ${theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 30px;
        row-gap: 40px;
        margin-top: 60px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        row-gap: 30px;
        margin-top: 40px;
    }
`;
