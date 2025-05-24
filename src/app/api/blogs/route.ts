import { prisma } from '@/lib/prisma'
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true
            }
        });

        return NextResponse.json(
            { success: true, message: blogs },
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
                }
            }
        );

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, message: 'Error while fetching blogs' },
            { status: 500 }
        )
    }
}