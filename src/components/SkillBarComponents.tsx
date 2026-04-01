// src/layout/sections/skills/SkillBarComponents.tsx

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../styles/theme';

type SkillBarProps = {
    title: string;
    value: number; // процент заполнения
    delay?: number;
};

export const SkillBar = ({ title, value, delay = 0 }: SkillBarProps) => {
    return (
        <BarWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <Label>
                <Title>{title}</Title>
            </Label>

            <BarBackground>
                <BarFill
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.2,
                        delay: delay + 0.2,
                        ease: 'easeOut',
                    }}
                />
            </BarBackground>
        </BarWrapper>
    );
};

// styles

const BarWrapper = styled(motion.div)`
    width: 100%;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    max-width: 533px;

    @media (max-width: ${theme.breakpoints.tablet}) {
        max-width: 100%;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        margin-bottom: 22px;
    }
`;

const Label = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Title = styled.span`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.dark[800]};
    letter-spacing: -0.01em;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 15px;
    }
`;

const BarBackground = styled.div`
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: ${theme.colors.gray[200]};
    overflow: hidden;
`;

const BarFill = styled(motion.div)`
    height: 100%;
    border-radius: 10px;
    background: ${theme.gradients.skillBar};
`;
