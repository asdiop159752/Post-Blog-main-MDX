import Post from "./components/Posts"
import Myprofile from './components/Myprofile'

export const revalidate = 86400
export default function Home() {
  return (
    <div className="mx-auto">
      <Myprofile />
      <p className="mt-12 mb-12 text-3xl text-center color text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Truong</span>.
        </span>
      </p>
       {/* @ts-expect-error Server Component */}
      <Post />
    </div>
  )
}
