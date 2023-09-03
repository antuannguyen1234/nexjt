'use client'

import { useRouter } from "next/navigation"
import { Button } from 'react-bootstrap'
export default function insta() {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            <h1>This is insta</h1>
            <Button onClick={() => handleBtn()}>Back to Homepage</Button>
        </div>
    )
}