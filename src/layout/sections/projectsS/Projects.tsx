import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { Reveal } from '../../../components/Reveal';
import { Wrapper } from '../../../components/Wrapper';
import { ProjectsCards } from './ProjectsCards';

export const Projects = () => {
    return (
        <ProjectsSection>
            <Container>
                <Wrapper display='flex' direction='column' align='center' width='100%'>
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
`;

