import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        console.log('Fetching all posts...')
        
        const posts = await prisma.posts.findMany({
            orderBy: { 
                id: "desc" 
            },
            include: { 
                likes: true 
            }
        })

        console.log(`Retrieved ${posts.length} posts`)
        
        if (!posts.length) {
            console.log('No posts found')
            return []
        }

        return posts
        
    } catch (error) {
        console.error('Error fetching posts:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Error fetching posts',
            message: error.message
        })
    } finally {
        await prisma.$disconnect()
    }
})