"use client";

import { Blog } from "@/types/project";
import HomeRouteBlogCards from "./HomeRouteBlogCards";
import { useEffect, useState } from "react";
import { memo } from 'react';
import Title from "./ui/Title";

function HomeRouteBlogs() {
    const [blogs, setBogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`/api/blogs`);
                const data = await response.json()

                if (data.success) {
                    setBogs(data.message);
                } else {
                    setBogs([]);
                }
            } catch (error) {
                console.error(`Error while fetching the blogs: ${error}`);
                setBogs([]);
            }
        };

        fetchBlogs();
    }, [])

    return (
        <section className='w-1/2 max-lg:w-full px-9 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <Title title='Recent Blogs' />
            {blogs.slice(0, 3).map((blog: Blog, idx: number) => (
                <HomeRouteBlogCards
                    key={idx}
                    title={blog.title}
                    id={blog.id}
                    createdAt={blog.createdAt}
                />
            ))}
        </section>
    )
}

export default memo(HomeRouteBlogs);