import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        console.log('Received request body:', body)
        
        // Vérification des champs requis
        if (!body.userId || !body.name || !body.text) {
            console.error('Missing required fields:', { body })
            throw new Error('Missing required fields')
        }

        const res = await prisma.posts.create({
            data: {
                userId: body.userId,
                name: body.name,
                image: body.image || '',
                text: body.text,
                picture: body.picture || '',
            }
        })
        
        console.log('Created post successfully:', res)
        return res
    } catch (error) {
        console.error('Error in create-post:', error)
        throw error
    }
})