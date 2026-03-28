// AboutMe.tsx
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { Reveal } from '../../../components/Reveal';
import { SectionTitle } from '../../../components/SectionTitle';
import { Wrapper } from '../../../components/Wrapper';
import { Job } from './Job';

export const AboutMe = () => {
    return (
        <AboutMeSection>
            <Container>
                <Wrapper
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    alignItems="flex-start"
                    gap="40px"
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
`;
