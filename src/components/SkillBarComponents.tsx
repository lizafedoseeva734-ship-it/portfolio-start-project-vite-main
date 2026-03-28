// src/layout/sections/skills/SkillsBar.tsx
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../styles/theme';

type SkillBarProps = {
    title: string;
    percent: number;
    delay?: number;
};

export const SkillBar = ({ title, percent, delay = 0 }: SkillBarProps) => {
    return (
        <BarWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <Label>
                <span>{title}</span>
                <Percent>{percent}%</Percent>
            </Label>
            <BarBackground>
                <BarFill
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
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

const BarWrapper = styled(motion.div)`
    width: 100%;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;

    max-width: 533px;
`;

const Label = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
        font-weight: 600;
        font-size: 16px;
        color: ${theme.colors.dark[800]};
        letter-spacing: -0.01em;
    }
`;

const Percent = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: ${theme.colors.primary[500]};
    min-width: 40px;
    text-align: right;
`;

const BarBackground = styled.div`
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: ${theme.colors.gray[200]};
    position: relative;
    overflow: hidden;
`;

const BarFill = styled(motion.div)`
    height: 100%;
    border-radius: 10px;
    background: ${theme.gradients.skillBar};
    position: relative;
`;
