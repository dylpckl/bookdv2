import { useRouter } from 'next/navigation'
import { getClubById } from '../../../../lib/prisma/clubs'
import DeleteClubButton from '../DeleteClubButton'
import Club from './club'

// const router = useRouter();

const Page = async ({ params }) => {
    const clubId = (params.clubId)
    const { club } = await getClubById(clubId)
    return (
        <div>
            <Club club={club} />
            <DeleteClubButton clubId={clubId} />
        </div>
    )
}

export default Page


// here's an alternative way using generateStaticParams(), which defines the list of route segment parameters statically at build time. https://beta.nextjs.org/docs/data-fetching/generating-static-params

// import { getClubById, getClubs } from '@/lib/prisma/users'
// import Club from './club'

// utilizes generateStaticParams()
// export async function generateStaticParams() {
//   const { users } = await getUsers()

//   return users.map(user => ({
//     userId: user.id
//   }))
// }

// async function getUser(userId) {
//   const { user } = await getUserById(userId)
//   if (!user) {
//     throw new Error('Failed to fetch data')
//   }

//   return user
// }