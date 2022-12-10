'use client'
import { usePathname } from 'next/navigation'

export default function page({ params }) {
    const pathname = usePathname();
    return (
        <div>
            <h1>dynamic club page</h1>
            <p>{pathname}</p>

        </div>
    )
}