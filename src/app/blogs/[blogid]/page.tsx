import { getBlog } from '@/lib/getBlog'
import { bricolage_grotesque } from '@/utils/fonts'
import BlogPage from './components/BlogPage'
import BlogHeader from './components/BlogHeader'
import { calculateReadingTime } from '@/utils/blogReadingTime'
import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'

interface PageProps {
    params: {
        blogid: string
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const blog = await getBlog(params.blogid)

    return {
        title: blog.title,
        description: blog.content.slice(0, 160),
        openGraph: {
            title: blog.title,
            description: blog.content.slice(0, 160),
            type: 'article',
            authors: [blog.author]
        },
    }
}

export default async function BlogDetailPage({ params }: PageProps) {
    const blog = await getBlog(params.blogid)
    const readingTime = calculateReadingTime(blog.content)

    return (
        <article className='w-full mt-40 max-sm:overflow-hidden max-sm:mt-28 max-[1025px]:px-4 max-[1285px]:px-4 max-lg:px-0 max-sm:px-0 flex flex-col gap-10 items-center pb-8'>
            <div className={`${bricolage_grotesque} px-80 max-[1285px]:px-60 max-sm:px-4 max-lg:px-20`}>
                <h1 className='text-4xl max-sm:text-3xl font-bold'>
                    {blog.title}
                </h1>

                <BlogHeader
                    author={blog.author}
                    createdAt={blog.createdAt.toString()}
                    readingTime={readingTime}
                />

                <div className="mt-8">
                    <BlogPage public_id={blog.image_public_id} />
                </div>

                <div className='prose lg:prose-xl dark:prose-dark mt-7'>
                    <div className='w-[57vw] max-lg:w-[80vw] max-sm:w-[87vw] !text-base' dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </div>
        </article>
    )
}

export async function generateStaticParams() {
    const blogs = await prisma.blog.findMany({
        select: { id: true },
        take: 20
    })

    return blogs.map((blog) => ({
        blogid: blog.id
    }))
}