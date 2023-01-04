import prisma from '.'

export async function getClubs() {
    try {
        const clubs = await prisma.club.findMany()
        return { clubs }
    } catch (error) {
        return { error }
    }
}

export async function createClub(club) {
    try {
        const clubToCreate = await prisma.club.create({
            data: club
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
        return { user }
    } catch (error) {
        console.error(error)
        return { error }
    }
}