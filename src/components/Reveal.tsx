// src/components/Reveal.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface RevealProps {
    children: ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    once?: boolean; 
    className?: string;
}

export const Reveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    once = true,
    className,
}: RevealProps) => {
    const offset = 60;

   
    const getInitial = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: offset };
            case 'down':
                return { opacity: 0, y: -offset };
            case 'left':
                return { opacity: 0, x: offset };
            case 'right':
                return { opacity: 0, x: -offset };
            default:
                return { opacity: 0 };
        }
    };

    return (
        <motion.div
            className={className}
            initial={getInitial()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: '-100px' }}
            transition={{ duration, delay, ease: 'easeOut' }}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
};
