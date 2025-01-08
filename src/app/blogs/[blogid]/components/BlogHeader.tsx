'use client'
import { Avatar, Link } from '@radix-ui/themes'
import { formatDate } from '@/utils/formatdate'

interface BlogHeaderProps {
    author: string
    createdAt: string
    readingTime: string
}

export default function BlogHeader({ author, createdAt, readingTime }: BlogHeaderProps) {
    return (
        <div className="mt-4 flex items-center gap-2">
            <Avatar
                src="/space.jpeg"
                fallback="A"
                radius='full'
                size='2'
            />
            <Link
                href='https://x.com/intent/follow?screen_name=fardeen14693425'
                underline='none'
                className='text-sm text-black dark:text-white'
            >
                {author}
            </Link>
            <p className='text-sm max-sm:text-xs'>{formatDate(createdAt)}</p>
            <p className='text-sm max-sm:text-xs'>{readingTime}</p>
        </div>
    )
}