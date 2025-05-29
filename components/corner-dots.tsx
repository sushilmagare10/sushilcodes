import React from 'react'

const CornerDots = () => {
    return (
        <>
            <span className='absolute -top-[3.2px] -left-[3.2px] w-[5px] h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600  animate-pulse' />
            <span className='absolute -top-[3.2px] -right-[3.2px] w-[5px] h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
            <span className='absolute -bottom-[3.2px] -left-[3.2px] w-[5px] h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
            <span className='absolute -bottom-[3.2px] -right-[3.2px] w-[5px] h-[5px] rounded-full bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
        </>
    )
}

export default CornerDots