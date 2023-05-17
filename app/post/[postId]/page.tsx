import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import 'highlight.js/styles/github-dark.css'

export const revalidate = 86400

/**
 * The type defines a Props object with a parameter called "postId" that is a string.
 * @property params - The `params` property is an object that contains a single property `postId` which
 * is a string. This is likely used to pass a specific post ID as a parameter to a component or
 * function.
 */
type Props={
  params:{
    postId: string
  }
}

//SSG Static-Side-Generate (Nếu ko có dòng này nó sẽ chuyển sang SSR)
//deduped loại bỏ trùng lặp trong quá trình xây dựng 
export async function generateStaticParams(){
  const posts = await getPostsMeta(); //deduped!

  if(!posts) return []

  return posts.map((post) => ({
    postId: post.id
  }))
}

export async function generateMetadata({params :{postId}}:Props ) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!
//deduped loại bỏ trùng lặp trong quá trình xây dựng 
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }
  return {
    title: post.meta.title,
  };
}

export default async function Post({params :{postId}}:Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!
  
  if(!post) notFound()

  const {meta ,content} = post

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
))

  return (
    <>
    <h2 className="text-3xl mt-4 mb-0 text-indigo-900" >{meta.title}</h2>
    <p className="mt-0 text-sm text-indigo-900">
        {pubDate}
    </p>
    <article className="text-rose-950 ">
        {content}
    </article>
    <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">
            {tags}
        </div>
    </section>
    <p className="mb-10">
        <Link href="/">← Back to home</Link>
    </p>
</>
  );
}
