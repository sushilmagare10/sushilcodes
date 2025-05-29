'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils'; // optional utility

interface MotionDivProps extends HTMLMotionProps<'div'> {
    className?: string;
}

const MotionDiv = ({ children, className, ...motionProps }: MotionDivProps) => {
    return (
        <motion.div className={cn(className)} {...motionProps}>
            {children}
        </motion.div>
    );
};

export default MotionDiv;
