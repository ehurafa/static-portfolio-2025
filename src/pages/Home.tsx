import { useEffect, useMemo, useState } from "react"
import { fetchPosts, WPPost } from "../api/wp"
import ProjectCard from "../components/ProjectCard"
import Spinner from "../components/Spinner"

export default function Home(){
  const [posts, setPosts] = useState<WPPost[] | null>(null)

  useEffect(() => {
    fetchPosts({}, true)
      .then(setPosts)
      .catch(() => setPosts([]))
  }, [])

  const filtered = useMemo(() => {
    if(!posts) return []
    return posts.filter((post) => {
      console.log('acfx', post.acf.title_post)
      return (post.acf.title_post || "").toLowerCase()
    })
  }, [posts]);

  return (
    <div>
      {!posts ? <Spinner /> :
        <div className="grid">
          {filtered.map(p => <ProjectCard key={p.id} post={p} />)}
        </div>
      }
    </div>
  )
}
