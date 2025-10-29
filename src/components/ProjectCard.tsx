import { getPostImage, WPPost } from "../api/wp"
import { Link } from "react-router-dom"

export default function ProjectCard({ post }: { post: WPPost }){
  const img = getPostImage(post);
  const title = post.acf.title_post || "Sem título";

  return (
    <Link to={`/project/${post.acf.link}`} className="card">
      <div className="thumb">
        {img ? <img src={img} alt={title} loading="lazy" /> : null}
      </div>
      <div className="body">
        <h3 className="title" dangerouslySetInnerHTML={{__html: title}} />
      </div>
    </Link>
  );
}