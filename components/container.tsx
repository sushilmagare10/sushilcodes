import React from 'react'
import { cn } from '@/lib/utils'

const Container = ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}
) => {
    return <div className={cn(' bg-white dark:bg-neutral-900 w-full h-full py-6 !px-8 md:!px-12 md:py-10  ', className)}>{children}</div>

}

export default Container