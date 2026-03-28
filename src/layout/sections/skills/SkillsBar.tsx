import styled from 'styled-components';
import { Description } from '../../../components';
import { SkillBar } from '../../../components/SkillBarComponents';

export const SkillsBar = () => {
    return (
        <SkillsContainer>
            <Description
                maxWidth="531px"
                minHeight="123px"
                fontWeight={300}
                fontSize="19px"
                lineHeight="225%"
                letterSpacing="0.02em;"
                margin="0 0 45px 0"
            >
                Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae.
            </Description>
            <SkillBar title="Design" percent={90} />
            <SkillBar title="Art Direction" percent={95} />
            <SkillBar title="Branding" percent={93} />
            <SkillBar title="Website Design" percent={80} />
        </SkillsContainer>
    );
};

const SkillsContainer = styled.div`
    max-width: 533px;
    margin-left: clamp(20px, 2vw, 164px);
`;
