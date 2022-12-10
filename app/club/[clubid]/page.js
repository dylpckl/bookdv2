'use client'
import { usePathname } from 'next/navigation'

export default function page({ params }) {
    const pathname = usePathname();
    const contestId = pathname.charAt(pathname.length - 1)
    return (
        <div>
            <h1>dynamic club page</h1>
            <p>{pathname}</p>
            <p>{contestId}</p>

            <a href={`${pathname}/contest/${contestId}`}>test</a>

        </div>
    )
}