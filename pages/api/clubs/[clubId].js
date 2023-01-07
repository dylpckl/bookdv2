import { prisma } from "@prisma/client";
import { getClubById, deleteClub } from "../../../lib/prisma/clubs";

export default async function handle(req, res) {
    const { clubId } = req.query
    console.log(req.query)
    if (req.method === 'GET') {
        try {
            const { club, error } = await getClubById(clubId)
            if (error) throw new Error(error)
            return res.status(200).json({ club })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    if (req.method === 'DELETE') {
        try {
            const { club, error } = await deleteClub(clubId)
            if (error) throw new Error(error)
            return res.status(200).end(`Club ${clubId} deleted.`)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    res.setHeader('Allow', ['GET', 'DELETE'])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

