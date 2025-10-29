import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchPostBySlug } from "../api/wp"

export default function ProjectDetails() {
  const { slug } = useParams()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    if (!slug) return
    fetchPostBySlug(slug).then(setPost)
  }, [slug])

  if (!post) {
    return <div className="container">Carregando...</div>
  }

  const cover =
    post.acf?.image_square_400?.sizes?.large ||
    post.acf?.image_square?.url ||
    ""

  return (
    <main className="container project-details">
      {cover && <img className="cover" src={cover} alt={post.acf?.title_post} />}

      <h1 className="title">{post.acf?.title_post}</h1>

      <section
        className="content"
        dangerouslySetInnerHTML={{ __html: post.acf?.post_content }}
      />

      {post.acf?.list_of_technologies?.length > 0 && (
        <div className="tags">
          {post.acf.list_of_technologies.map((tag: any) => (
            <a key={tag.term_id} href={`/tag/${tag.slug}`} className="tag">
              #{tag.name}
            </a>
          ))}
        </div>
      )}
    </main>
  )
}
