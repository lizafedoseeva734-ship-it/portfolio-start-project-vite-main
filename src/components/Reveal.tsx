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
    /** Отступ корня intersection (меньше |0| — чаще срабатывает у краёв экрана, напр. футер) */
    viewportMargin?: string;
}

const DEFAULT_VIEWPORT_MARGIN = '-32px';
const MOTION_OFFSET = 60;

const initialByDirection: Record<
    Direction,
    { opacity: number; x?: number; y?: number }
> = {
    up: { opacity: 0, y: MOTION_OFFSET },
    down: { opacity: 0, y: -MOTION_OFFSET },
    left: { opacity: 0, x: MOTION_OFFSET },
    right: { opacity: 0, x: -MOTION_OFFSET },
};

export const Reveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    once = false,
    className,
    viewportMargin = DEFAULT_VIEWPORT_MARGIN,
}: RevealProps) => {
    const initial = initialByDirection[direction];

    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: viewportMargin }}
            transition={{ duration, delay, ease: 'easeOut' }}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
};
