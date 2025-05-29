import React from 'react'

const Scales = () => {
    return (
        <>
            <div className="absolute -right-0 bg-white dark:bg-neutral-900 z-50 h-full w-4 md:w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
            <div className="absolute -left-0 bg-white dark:bg-neutral-900 z-50 h-full w-4 md:w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        </>
    )
}

export default Scales