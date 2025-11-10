import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPostBySlug } from '../api/wp'
import { useNavigate } from 'react-router-dom'
import { TiChevronLeft } from "react-icons/ti"

export default function ProjectDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState<any>(null)
   const [loading, setLoading] = useState(true)

  useEffect(() => {

   async function loadPost() {
      if (!slug) return
      try {
        const data = await fetchPostBySlug(slug)
        setPost(data)
      } catch (err) {
        console.error('Erro ao buscar post:', err)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (loading) return <p>Carregando...</p>
  if (!post) return <p>Post não encontrado.</p>


  return (
    <div className="project-details">
      <img
        src={
          post.acf?.image_post?.sizes?.large ||
          post.acf?.image_post?.url ||
          '/fallback.jpg'
        }
        alt={post.acf?.title_post}
      />
      <h1>{post.acf?.title_post}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.acf?.post_content }} />
      <ul>
        {post.acf?.list_of_technologies?.map((tag: any, i: number) => (
            <li key={tag.term_id}>
            #{tag.name || ''}
            </li>
        ))}
    </ul>
    <button  onClick={() => navigate('/')}><TiChevronLeft /> Voltar</button>
</div>
  )
}
