import Link from 'next/link';

const HoidanIT = () => {
    return (
        <div className="navigator">

            <ul>
                <li><Link href="/facebook"> Link to Facebook page</Link></li>
                <li><Link href="/tiktok"> Link to Tiktok page</Link></li>
                <li><Link href="/insta"> Link to Insta page</Link></li>
            </ul>
        </div>
    )
}

export default HoidanIT