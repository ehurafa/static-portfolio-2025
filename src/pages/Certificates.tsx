import { useEffect, useState } from "react"
import { fetchPosts, WPPost } from "../api/wp"
import Spinner from "../components/Spinner"

// Example: fetch posts filtered by a category named 'certificados' if present.
export default function Certificates(){
  const [items, setItems] = useState<WPPost[] | null>(null)
  useEffect(() => {
    // Try category name 'certificados' via search as a simple approach.
    fetchPosts({ search: "certificado" }, false).then(setItems).catch(() => setItems([]))
  }, [])
  if(!items) return <Spinner />
  return (
    <div>
      <h2 style={{marginTop:0}}>Certificados</h2>
      <ul>
        {items.map(i => <li key={i.id} dangerouslySetInnerHTML={{__html: i.title.rendered}} />)}
      </ul>
    </div>
  )
}