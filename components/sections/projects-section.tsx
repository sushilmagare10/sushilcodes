"use client";

import React, { useState } from 'react';
import Container from '../container';
import Image from 'next/image';
import Link from 'next/link';
import MotionDiv from '../animation/motion-div';
import { AnimatePresence } from 'framer-motion';
import SubHeading from '../animation/sub-heading';

type StackItem = {
    icon: string;
    name: string;
}

type Project = {
    id: number;
    title: string;
    description: string;
    stack: StackItem[];
    liveLink: string;
    githubLink: string;
    projectLink: string;
    date: string;
    image: string;
    featured: boolean;
}

const ProjectsSection = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and customer insights.",
            stack: [
                { icon: "/lang-icons/react.svg", name: "React" },
                { icon: "/lang-icons/typescript.svg", name: "TypeScript" },
                { icon: "/lang-icons/nextjs-black.svg", name: "Next.js" },
                { icon: "/lang-icons/mongodb.svg", name: "MongoDB" },
                { icon: "/lang-icons/tailwind.svg", name: "Tailwind CSS" },
            ],
            liveLink: "https://example.com/ecommerce-dashboard",
            githubLink: "https://github.com/example/ecommerce-dashboard",
            projectLink: "/projects/ecommerce-dashboard",
            date: "2024",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative project management tool with drag-and-drop functionality, team collaboration features, and deadline tracking.",
            stack: [
                { icon: "/lang-icons/react.svg", name: "React" },
                { icon: "/lang-icons/typescript.svg", name: "TypeScript" },
                { icon: "/lang-icons/nextjs-black.svg", name: "Next.js" },
                { icon: "/lang-icons/mongodb.svg", name: "MongoDB" },
                { icon: "/lang-icons/tailwind.svg", name: "Tailwind CSS Long Name Example" },
            ],
            liveLink: "https://example.com/task-manager",
            githubLink: "https://github.com/example/task-manager",
            projectLink: "/projects/task-management",
            date: "2024",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            featured: true
        },
        {
            id: 3,
            title: "Weather Forecast App",
            description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts for multiple cities.",
            stack: [
                { icon: "/lang-icons/react.svg", name: "React" },
                { icon: "/lang-icons/typescript.svg", name: "TypeScript" },
                { icon: "/lang-icons/nextjs-black.svg", name: "Next.js" },
                { icon: "/lang-icons/mongodb.svg", name: "MongoDB" },
            ],
            liveLink: "https://example.com/weather-app",
            githubLink: "https://github.com/example/weather-app",
            projectLink: "/projects/weather-app",
            date: "2023",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
            featured: false
        },
        // ... other projects (first 3 are shown based on slice(0,3))
        {
            id: 4,
            title: "Social Media Analytics",
            description: "Advanced analytics platform for social media managers to track engagement, growth metrics, and content performance across platforms.",
            stack: [
                { icon: "/lang-icons/react.svg", name: "React" },
                { icon: "/lang-icons/typescript.svg", name: "TypeScript" },
                { icon: "/lang-icons/nextjs-black.svg", name: "Next.js" },
            ],
            liveLink: "https://example.com/social-analytics",
            githubLink: "https://github.com/example/social-analytics",
            projectLink: "/projects/social-analytics",
            date: "2023",
            image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
            featured: false
        },
        {
            id: 5,
            title: "Cryptocurrency Tracker",
            description: "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, and trading insights for digital assets.",
            stack: [
                { icon: "/lang-icons/react.svg", name: "React" },
                { icon: "/lang-icons/typescript.svg", name: "TypeScript" },
            ],
            liveLink: "https://example.com/crypto-tracker",
            githubLink: "https://github.com/example/crypto-tracker",
            projectLink: "/projects/crypto-tracker",
            date: "2023",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
            featured: false
        },
        {
            id: 6,
            title: "AI Content Generator",
            description: "An intelligent content creation platform powered by AI that helps writers generate blog posts, social media content, and marketing copy.",
            stack: [
                { icon: "/lang-icons/react.svg", name: "React" },
                { icon: "/lang-icons/typescript.svg", name: "TypeScript" },
                { icon: "/lang-icons/nextjs-black.svg", name: "Next.js" },
                { icon: "/lang-icons/mongodb.svg", name: "MongoDB" },
                { icon: "/lang-icons/tailwind.svg", name: "Tailwind CSS" },
            ],
            liveLink: "https://example.com/ai-content",
            githubLink: "https://github.com/example/ai-content",
            projectLink: "/projects/ai-content",
            date: "2024",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
            featured: true
        }
    ];

    const [hoveredStack, setHoveredStack] = useState<string | null>(null);

    return (
        <Container className="border-t relative w-full shadow-section-inset">
            <div className="w-full">
                <SubHeading delay={0.3} className="mb-8 lg:mb-12" text='I love building things.' />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projects.slice(0, 3).map((project, idx) => (
                        <MotionDiv
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.25, delay: idx * 0.3, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            key={project.id}
                            className="group"
                        >
                            <Link
                                href={project.projectLink}
                                className="block h-full"
                            >
                                <div className="rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50 h-full flex flex-col">
                                    <div className="relative h-[150px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="py-4 flex-1 flex flex-col">
                                        <div className="flex items-start justify-between mb-1">
                                            <h3 className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100  group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                                                {project.title}
                                            </h3>

                                        </div>

                                        <p className="text-xs text-paragraph leading-relaxed mb-4 flex-1 line-clamp-3">
                                            {project.description.length > 80 ? project.description.slice(0, 80) + "..." : project.description}
                                        </p>

                                        <div className="flex relative items-center mt-auto">
                                            {project.stack.map((stackItem, index) => {
                                                const stackKey = `${project.id}-${stackItem.name}-${index}`;
                                                const isHovered = hoveredStack === stackKey;

                                                return (
                                                    <MotionDiv
                                                        layout
                                                        key={stackKey}
                                                        className="relative flex h-8 cursor-pointer items-center justify-center rounded-full border border-black/[.2] bg-neutral-800 p-1 dark:border-white/[.2]"
                                                        style={{
                                                            transform: `translateX(-${10 * index}px)`,
                                                            zIndex: project.stack.length + index,
                                                        }}
                                                        whileHover={{
                                                            zIndex: project.stack.length + 100,
                                                        }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 400,
                                                            damping: 25,
                                                        }}
                                                        onMouseEnter={() => setHoveredStack(stackKey)}
                                                        onMouseLeave={() => setHoveredStack(null)}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                        }}
                                                    >
                                                        <Image
                                                            width={20}
                                                            height={20}
                                                            src={stackItem.icon}
                                                            alt={stackItem.name}
                                                            className="h-5 w-5 shrink-0 object-contain"
                                                        />
                                                        <AnimatePresence mode="wait">
                                                            {isHovered && (
                                                                <MotionDiv
                                                                    layout // Allow this to influence parent's layout animation
                                                                    key={`${stackKey}-name`}
                                                                    initial={{ opacity: 0, width: 0, x: -5 }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        width: "auto",
                                                                        x: 0,
                                                                        marginLeft: "0.25rem", // 4px
                                                                    }}
                                                                    exit={{
                                                                        opacity: 0,
                                                                        width: 0,
                                                                        x: -5,
                                                                        marginLeft: "0rem",
                                                                        transition: { duration: 0.15 }
                                                                    }}
                                                                    transition={{ // Smooth transition for the name appearance
                                                                        duration: 0.3,
                                                                        ease: [0.25, 0.1, 0.25, 1], // Quintic easeOut
                                                                    }}
                                                                    className="whitespace-nowrap text-xs font-medium text-white"
                                                                >
                                                                    {stackItem.name}
                                                                </MotionDiv>
                                                            )}
                                                        </AnimatePresence>
                                                    </MotionDiv>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default ProjectsSection;