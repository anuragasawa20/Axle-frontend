import prisma from "@/lib/prismadb";

export default async function getBlogs(pageNumber: number, pageSize: number, searchQuery: string) {
    try {
        const skip = (pageNumber - 1) * pageSize;

        const totalBlogs = await prisma.blog.count({
            where: {
                status: 'DRAFT',
                title: {
                    contains: searchQuery,
                    mode: 'insensitive'
                }
            }
        });

        const totalPages = Math.ceil(totalBlogs / pageSize);

        const getBlogs = await prisma.blog.findMany({
            where: {
                status: 'DRAFT',
                title: {
                    contains: searchQuery,
                    mode: 'insensitive'
                }
            },
            select: {
                id: true,
                title: true,
                image: true,
                slug: true,
                summary:true,
            },
            skip: skip,
            take: pageSize,
        });

        return {
            blogs: getBlogs,
            totalPages: totalPages
        };
    } catch (error) {
        console.error(error);
        return {
            blogs: [],
            totalPages: 0
        };
    }
}
