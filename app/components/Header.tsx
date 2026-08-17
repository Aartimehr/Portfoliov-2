import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "20px 60px",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Aarti.
        </Link>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Home
          </Link>

          <Link
            href="/projects"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            My Projects
          </Link>

          <Link
            href="/education"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            My Education
          </Link>

          <Link
            href="/blogs"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            My Blogs
          </Link>

          <Link
            href="/contact"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}