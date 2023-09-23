
import {allBlogs} from "contentlayer/generated";

export default function Home() {
  return (
    console.log(allBlogs),
  <main className="flex flex-col items-center justify-center">
    <HomeCoverSection blogs={allBlogs}/>
    <FeaturedPosts blogs={allBlogs}/>
    <RecentPosts blogs={allBlogs}/>

    
  </main>
  )
}
