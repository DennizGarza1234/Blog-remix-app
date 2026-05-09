import { useParams, useNavigate } from "react-router";
import { posts } from "../data/posts";

export default function PostView() {
  const { postId } = useParams();

  const navigate = useNavigate();

  const post = posts.find(
    (p) => p.id === Number(postId)
  );

  if (!post) {
    return <h1>Post not found.</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>

      <p
        style={{
          marginTop: "20px",
          lineHeight: "1.6",
        }}
      >
        {post.content}
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "30px",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#222",
          color: "white",
          cursor: "pointer",
        }}
      >
        Return to Feed
      </button>
    </div>
  );
}