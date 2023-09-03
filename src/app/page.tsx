'use client'
import Apptable from "./components/table/table"
import useSWR from 'swr'


export default function App() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/blogs", fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )
    if (!data) {
        return <div>....loading</div>
    }

    return (
        <div>
            <Apptable blogs={data} />
        </div>
    )
} 