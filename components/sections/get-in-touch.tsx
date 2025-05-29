import React from "react";
import Container from "../container";
import Link from "next/link";
import SubHeading from "../animation/sub-heading";
import Paragraph from "../animation/paragraph";
import MotionDiv from "../animation/motion-div";

const GetInTouch = () => {
    return (
        <Container>
            <SubHeading delay={0.8} text="Get in Touch" />
            <Paragraph delay={0.9} className="text-paragraph text mt-2 max-w-xl">
                I&apos;m currently looking for new opportunities. Whether you have a
                question or want to say hi, hit that button.
            </Paragraph>
            <MotionDiv
                initial={{
                    y: 10,
                    opacity: 0,
                    filter: "blur(10px)",
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                }}
                transition={{
                    delay: 1,
                    ease: "easeInOut",
                }}
            >
                <div className="relative mt-4 flex max-w-lg justify-between gap-2 rounded-md bg-white dark:bg-neutral-800">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full rounded-lg border-[1px] p-3 text-sm font-medium text-neutral-900 shadow-[0px_4px_8px_0px_var(--color-neutral-200)] transition-colors placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-200 focus:outline-none dark:text-neutral-100 dark:shadow-[0px_2px_5px_0px_var(--color-neutral-700)] dark:focus:ring-neutral-700"
                    />
                    <button className="absolute top-[5px] right-1 h-[80%] rounded-md bg-neutral-100 px-4 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]">
                        <Link href="mailto:sushilmagare10@gmail.com">Send Enquiry</Link>
                    </button>
                </div>
            </MotionDiv>
        </Container>
    );
};

export default GetInTouch;
