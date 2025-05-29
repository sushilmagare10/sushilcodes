import React from 'react'
import Container from '../container'
import fs from "fs/promises";
import matter from "gray-matter";
import MotionDiv from '../animation/motion-div';
import Link from 'next/link';
import SubHeading from '../animation/sub-heading';



type BlogType = {
    slug: string;
    title: string;
    description: string;
    imageUrl?: string;
}

// Async function to get blogs with better error handling
const getBlogs = async (): Promise<BlogType[]> => {
    try {
        const dirContent = await fs.readdir("content", "utf-8");

        const blogs: BlogType[] = await Promise.all(
            dirContent.map(async (file) => {
                const fileContent = await fs.readFile(`content/${file}`, "utf-8");
                const { data } = matter(fileContent);
                return {
                    slug: data.slug,
                    title: data.title,
                    description: data.description,
                    imageUrl: data?.imageUrl,
                };
            })
        );

        return blogs;
    } catch (error) {
        console.error("Error reading blog files:", error);
        return [];
    }
};


const BlogsSection = async () => {
    const blogs = await getBlogs();

    return (
        <Container className=" border-y md:pt-12">
            {/* Header */}
            <div className=" mb-4 ">
                <SubHeading delay={0.5} text='Sharing knowledge as I learn' className="" />
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1  gap-6 ">
                {blogs.slice(0, 3).map((blog, idx) => (
                    <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.3, delay: idx * 0.1, }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href={`/blogpost/${blog.slug}`}
                            key={blog.title}
                            className="flex justify-between flex-col cursor-pointer group"
                        >
                            {/* Title */}
                            <div className="flex items-start gap-4 text-sm text-neutral-500">
                                <div className='flex flex-col items-start justify-between text-sm text-neutral-500'>
                                    <h2 className=" text-base font-semibold text-foreground mb-1 tracking-wide transition-colors duration-200">
                                        {blog.title}
                                    </h2>
                                    {/* <span>{blog.date}</span> */}
                                    <p className='text-paragraph text-sm md:text-sm pt2 max-w-lg'>
                                        {blog.description.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </MotionDiv >
                ))}
            </div >
        </Container >
    )
}

export default BlogsSection