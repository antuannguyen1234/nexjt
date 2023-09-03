'use client'

import { useRouter } from "next/navigation"
import { Button } from 'react-bootstrap'
export default function tiktok() {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            <h1>This is tiktok</h1>
            <Button onClick={() => handleBtn()}>Back to Homepage</Button>
        </div>
    )
}