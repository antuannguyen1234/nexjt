
'use client'
import { useRouter } from 'next/navigation'


export default function About() {

    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }

    return (
        <div>
            <h1>Facebook Page </h1>
            <button onClick={() => handleBtn()}>Back to Homepage </button>
        </div>
    )
}