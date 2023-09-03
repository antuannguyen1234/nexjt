'use client'

import { useRouter } from "next/navigation"
import { Button } from 'react-bootstrap'
export default function facebook() {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            <h1>This is facebook</h1>
            <Button onClick={() => handleBtn()}>Back to Homepage</Button>
        </div>
    )
}