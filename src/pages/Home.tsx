import { useEffect, useMemo, useState } from "react";
import { fetchPosts, WPPost } from "../api/wp";
import ProjectCard from "../components/ProjectCard";
import Spinner from "../components/Spinner";

export default function Home(){
  const [posts, setPosts] = useState<WPPost[] | null>(null);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetchPosts({}, true)
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  const filtered = useMemo(() => {
    if(!posts) return [];
    if(!q) return posts;
    const qq = q.toLowerCase();
    return posts.filter(p => (p.title?.rendered || "").toLowerCase().includes(qq));
  }, [posts, q]);

  return (
    <div>
      {!posts ? <Spinner /> :
        <div className="grid">
          {filtered.map(p => <ProjectCard key={p.id} post={p} />)}
        </div>
      }
    </div>
  );
}