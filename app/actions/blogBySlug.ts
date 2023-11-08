import prisma from "@/lib/prismadb";

export default async function getBlogBySlug(slug: string) {
    try {
        
        const blog = await prisma.blog.findUnique({
            where: {
                slug: slug,
            },
        });

        return blog;
    } catch (error) {
        console.error(error);
        throw error;
    }
}