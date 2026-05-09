import { Outlet, Link } from "react-router";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <nav
        style={{
          backgroundColor: "#222",
          padding: "15px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          About
        </Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}