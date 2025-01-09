'use client'

import React from 'react'
import { bricolage_grotesque } from '@/utils/fonts';
import { formatDate } from '@/utils/formatdate';
import { Link } from '@radix-ui/themes';
import { calculateReadingTime } from '@/utils/blogReadingTime';

type Blog = {
    id?: string,
    title: string,
    content?: unknown,
    image_public_id?: string,
    author?: string
    createdAt: string
}

const BlogCard = ({ title, createdAt, content, id }: Blog) => {
    const readingTime = calculateReadingTime(content as string);

    return (
        <Link href={`/blogs/${id}`} underline='none'>
            <div className={`flex gap-5 py-1 px-5 rounded-lg w-[50vw] overflow-hidden max-sm:w-full ${bricolage_grotesque}`}>
                <div className="py-3 space-y-2 w-full">
                    <h2 className='text-[26px] max-sm:text-base font-extrabold dark:text-white text-black break-words'>{title}</h2>
                    <div className="line-clamp-2 max-sm:w-[85vw] dark:text-[#dcdcdc] text-[#6B6B6B] max-sm:mt-2 text-[15px] !mt-[2px]" dangerouslySetInnerHTML={{ __html: content as TrustedHTML }} />
                    <div className="text-xs space-x-4 !mt-4">
                        <span className='dark:text-[#dcdcdc] text-[#6B6B6B] font-semibold'>{formatDate(createdAt)}</span>
                        <span className='dark:text-[#dcdcdc] text-[#6B6B6B] font-semibold'>{readingTime}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;