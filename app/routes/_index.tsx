import { Link } from "react-router";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <div>
      <h1>Blog Feed</h1>

      <p>Click a post to read more.</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            style={{
              padding: "15px",
              backgroundColor: "white",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#222",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}