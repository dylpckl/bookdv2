import prisma from '.'

export async function getClubs() {
    try {
        const clubs = await prisma.club.findMany()
        return { clubs }
    } catch (error) {
        return { error }
    }
}

export async function createClub({ data }) {
    try {
        await prisma.club.create({
            data: {
                name: data.name,
                description: data.description,
            }
        })
    } catch (error) {
        console.error(error)
        return { error }
    }
}

export async function getClubById(id) {
    try {
        const club = await prisma.club.findUnique({
            where: { id }
        })
        return { club }
    } catch (error) {
        console.error(error)
        return { error }
    }
}