"use client"

import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils';
import CornerDots from '../corner-dots';

const SubHeading = ({
    children,
    className,
    delay = 0,
    text,
    staggerDelay = 0.03
}: {
    children?: React.ReactNode;
    className?: string;
    delay?: number;
    text?: string;
    staggerDelay?: number;
}) => {
    // If text prop is provided, use it for stagger effect
    // Otherwise, fall back to children
    const content = text || children;

    // Convert content to string if it's not already
    const textContent = typeof content === 'string' ? content : String(content || '');

    // Split text into words
    const words = textContent.split(' ');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                staggerChildren: staggerDelay,
                delayChildren: delay
            }
        }
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 10,
            filter: 'blur(4px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={cn('text-sm tracking-wide text-neutral-800 dark:text-neutral-200 relative w-fit py-0.5 px-2 bg-neutral-100 dark:bg-neutral-800', className)}
        >
            <CornerDots />
            {text ? (
                // Render with stagger effect if text prop is provided
                <>
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={wordVariants}
                            className="inline-block"
                            style={{ marginRight: index < words.length - 1 ? '0.25em' : '0' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </>
            ) : (
                // Fallback to children without stagger effect
                <motion.span
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: delay }}
                >
                    {children}
                </motion.span>
            )}
        </motion.h2>
    )
}

export default SubHeading