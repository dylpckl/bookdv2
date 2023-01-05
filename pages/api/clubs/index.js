import { createClub, getClubs, getClubById } from '../../../lib/prisma/clubs'
import prisma from '../../../lib/prisma'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { clubs, error } = await getClubs()
      if (error) throw new Error(error)
      return res.status(200).json({ clubs })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  if (req.method === 'POST') {
    console.log(req.body.description)
    const { name, description, ownerIdToPass } = req.body
    const result = await prisma.club.create({
      data: {
        name: name,
        description: description,
        owner: {
          connect: { id: 'clcjc37n000000wasft7knk9x' }
        },
      }
    })
    res.json(result)
  }
  // if (req.method === 'POST') {
  //   try {
  //     const { data } = req.body
  //     const { club, error } = await createClub(data)
  //     if (error) throw new Error(error)
  //     return res.status(200).json({ club })
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message })
  //   }
  // }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed`)
}

export default handler