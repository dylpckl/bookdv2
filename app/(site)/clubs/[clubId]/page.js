// 'use client'
// import { usePathname } from 'next/navigation'

// export default function page({ params }) {
//     const pathname = usePathname();
//     const contestId = pathname.charAt(pathname.length - 1)
//     return (
//         <div>
//             <h1>dynamic club page</h1>
//             <p>{pathname}</p>
//             <p>{contestId}</p>

//             <a href={`${pathname}/contest/${contestId}`}>test</a>

//         </div>
//     )
// }

import { getClubById } from '../../../../lib/prisma/clubs'
import Club from './club'

const Page = async ({ params }) => {
    // console.log(typeof (parseInt(params.clubId)))
    // const clubId = parseInt(params.clubId)
    const clubId = (params.clubId)
    const { club } = await getClubById(clubId)
    return <Club club={club} />
}

export default Page