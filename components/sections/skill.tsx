import React from "react";
import { Marquee } from "../magicui/marquee";
import { skills } from "@/constants/info";
import Container from "../container";
import SubHeading from "../animation/sub-heading";
import Image from "next/image";
import MotionDiv from "../animation/motion-div";

const Skill = () => {
  return (
    <Container className="shadow-section-inset">
      <SubHeading delay={0.6} className="mb-6" text=" Tech Stack" />
      <div className="overflow-hidden">
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
            delay: 0.9,
            ease: "easeInOut",
          }}
        >
          <Marquee pauseOnHover className="[--duration:20s]">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="shadow-background flex w-fit items-center gap-2 rounded-md bg-neutral-100 px-2 py-1 text-sm font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
              >
                <Image
                  width={24}
                  height={24}
                  src={skill.icon}
                  alt={skill.name}
                  className="h-6 w-6 rounded-full object-center dark:bg-white"
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </Marquee>
        </MotionDiv>
      </div>
    </Container>
  );
};

export default Skill;
