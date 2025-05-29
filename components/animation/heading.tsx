"use client"

import { cn } from '@/lib/utils';
import React from 'react'
import { motion } from 'motion/react';

const Heading = ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => {

    return (
        <motion.h1
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={cn('text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200', className)}>
            {children}
        </motion.h1>
    )
}

export default Heading