import styled from 'styled-components';
import { Wrapper } from '../../../components';
import { Container } from '../../../components/Container';
import { Reveal } from '../../../components/Reveal';
import { SectionTitle } from '../../../components/SectionTitle';
import { theme } from '../../../styles/theme';
import { Job } from './Job';

export const AboutMe = () => {
    return (
        <AboutMeSection id="about">
            <Container>
                <Wrapper
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    gap="60px"
                    alignItems="start"
                >
                    <Reveal>
                        <SectionTitle
                            subtitle="who am i"
                            title="I'm Art Director & Brand Designer based in Los Angeles, USA."
                        />
                    </Reveal>
                    <Reveal>
                        <Job />
                    </Reveal>
                </Wrapper>
            </Container>
        </AboutMeSection>
    );
};

const AboutMeSection = styled.section`
    padding: 100px 0 160px;
    background-color: #fff;

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 80px 0 100px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 60px 0 80px;
    }
`;
