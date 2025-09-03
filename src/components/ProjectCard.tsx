import { getPostImage, WPPost } from "../api/wp";

export default function ProjectCard({ post }: { post: WPPost }){
  const img = getPostImage(post);
  const title = post.title?.rendered || "Sem título";
  const link = post.link || "#";
  return (
    <a className="card" href={link} target="_blank" rel="noreferrer">
      <div className="thumb">
        {img ? <img src={img} alt={title} loading="lazy" /> : null}
      </div>
      <div className="body">
        <h3 className="title" dangerouslySetInnerHTML={{__html: title}} />
      </div>
    </a>
  );
}