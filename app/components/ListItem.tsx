import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
type Props = {
    post: Meta
}

export default function ListItem({post}: Props) {
    const {id,title,date} = post
    const formattedDate = getFormattedDate(date)
  return (
    <div>
        <li className="mt-4 text-2xl text-white/90">
            <Link className="no-underline hover:text-black/70 hover:text-blue-300 text-rose-950 " href={`/post/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1 text-white">{formattedDate}</p>
        </li>
    </div>
  )
}