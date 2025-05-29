import React from "react";
import Heading from "../animation/heading";
import Container from "../container";
import { WordRotate } from "../magicui/word-rotate";
import Paragraph from "../animation/paragraph";
import MotionDiv from "../animation/motion-div";

const IntroSection = () => {
  return (
    <Container className="flex flex-col items-start gap-1 md:!pt-0">
      <div className="flex flex-col-reverse items-start justify-start gap-3 sm:items-center md:flex-row">
        <Heading className="text-foreground text-2xl font-bold tracking-tight md:text-4xl">
          Sushil Magare
        </Heading>

        <MotionDiv
          initial={{ opacity: 0, filter: "blur(10px)", y: 4 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            delay: 0.05,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center"
        >
          <WordRotate
            className="text-paragraph text-sm"
            words={["Web Developer", "Vibe Coding", "boored"]}
          />
        </MotionDiv>
      </div>
      <div className="flex max-w-2xl flex-col gap-4">
        <Paragraph delay={0.1} className="text-paragraph leading-relaxed">
          I&apos;m a passionate{" "}
          <span className="text-foreground text-lg font-semibold">
            software engineer
          </span>{" "}
          specializing in building exceptional web applications that solve
          real-world problems.
        </Paragraph>
      </div>
    </Container>
  );
};

export default IntroSection;
