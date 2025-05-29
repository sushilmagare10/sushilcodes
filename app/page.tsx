import BlogsSection from "@/components/sections/blogs-section";
import GetInTouch from "@/components/sections/get-in-touch";
import IntroSection from "@/components/sections/intro-section";
import ProjectsSection from "@/components/sections/projects-section";
import Skill from "@/components/sections/skill";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start pt-10">
      <IntroSection />
      <ProjectsSection />
      <BlogsSection />
      <Skill />
      <GetInTouch />
    </div>
  );
}
