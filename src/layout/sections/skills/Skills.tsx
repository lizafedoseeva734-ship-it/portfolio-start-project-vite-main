import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/theme';
import { Reveal } from '../../../components/Reveal';
import { SectionTitle } from '../../../components/SectionTitle';
import { Wrapper } from '../../../components/Wrapper';
import { SkillsBar } from './SkillsBar';

export const Skills = () => {
    return (
        <SkillsSection id="skills">
            <Container>
                <Wrapper
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    alignItems="flex-start"
                    gap="40px"
                >
                    <Reveal>
                        <SectionTitle
                            subtitle="my skills"
                            title="Skills that I have so far, to provide my clients best products."
                        />
                    </Reveal>
                    <Reveal>
                        <SkillsBar />
                    </Reveal>
                </Wrapper>
            </Container>
        </SkillsSection>
    );
};

const SkillsSection = styled.section`
    padding: 190px 0;
    background-color: #fafbfc;

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 120px 0;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 80px 0;
    }
`;
