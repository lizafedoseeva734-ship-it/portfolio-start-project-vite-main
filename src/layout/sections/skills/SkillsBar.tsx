// src/layout/sections/skills/SkillsBar.tsx

import styled from 'styled-components';
import { SkillBar } from '../../../components';
import { theme } from '../../../styles/theme';

export const SkillsBar = () => {
    const skills = [
        { title: 'Design', value: 90 },
        { title: 'Art Direction', value: 95 },
        { title: 'Branding', value: 92 },
        { title: 'Website Design', value: 80 },
    ];

    return (
        <SkillsContainer>
            {skills.map((skill, index) => (
                <SkillBar
                    key={skill.title}
                    title={skill.title}
                    value={skill.value}
                    delay={index * 0.1}
                />
            ))}
        </SkillsContainer>
    );
};

const SkillsContainer = styled.div`
    width: 100%;
    max-width: 533px;
    margin-left: auto;

    @media (max-width: ${theme.breakpoints.tablet}) {
        margin-left: 0;
        max-width: 100%;
    }
`;
