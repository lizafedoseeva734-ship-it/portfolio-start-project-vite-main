import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/theme';
import { Reveal } from '../../../components/Reveal';
import { Wrapper } from '../../../components/Wrapper';
import { ProjectsCards } from './ProjectsCards';

export const Projects = () => {
    return (
        <ProjectsSection id="portfolio">
            <Container>
                <Wrapper
                    display="flex"
                    direction="column"
                    align="center"
                    width="100%"
                >
                    <Reveal>
                        <ProjectsCards />
                    </Reveal>
                </Wrapper>
            </Container>
        </ProjectsSection>
    );
};

const ProjectsSection = styled.section`
    background: #fff;
    padding: 80px 0;

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 64px 0;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 48px 0;
    }
`;

