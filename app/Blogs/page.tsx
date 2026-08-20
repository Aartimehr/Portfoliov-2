import Link from "next/link";

const blogs = [
  {
    slug: "understanding-react-components",
    number: "01",
    category: "React",
    title: "Understanding React Components: The Foundation of Modern UI",
    description:
      "Learn how React components work, why component-based architecture matters, and how breaking a UI into reusable pieces makes applications easier to maintain.",
    date: "August 20, 2026",
    readTime: "5 min read",
    skills: ["React", "JavaScript", "Frontend"],
  },
  {
    slug: "how-nextjs-app-router-works",
    number: "02",
    category: "Next.js",
    title: "How Next.js App Router Actually Works",
    description:
      "A beginner-friendly explanation of the Next.js App Router, file-based routing, layouts, pages and dynamic routes.",
    date: "August 18, 2026",
    readTime: "7 min read",
    skills: ["Next.js", "React", "Routing"],
  },
  {
    slug: "understanding-rest-apis",
    number: "03",
    category: "Backend",
    title: "REST APIs Explained: How Frontend and Backend Communicate",
    description:
      "Understand what REST APIs are, how HTTP methods work, and how a frontend application communicates with a backend server.",
    date: "August 15, 2026",
    readTime: "6 min read",
    skills: ["Node.js", "Express", "API"],
  },
  {
    slug: "sql-joins-explained",
    number: "04",
    category: "Database",
    title: "SQL Joins Explained with Practical Examples",
    description:
      "Understand INNER JOIN, LEFT JOIN, RIGHT JOIN and how relational databases combine information from multiple tables.",
    date: "August 12, 2026",
    readTime: "8 min read",
    skills: ["SQL", "MySQL", "Database"],
  },
  {
    slug: "git-github-beginners-guide",
    number: "05",
    category: "Developer Tools",
    title: "Git & GitHub: A Practical Guide for Beginners",
    description:
      "A simple explanation of repositories, commits, branches, pushing code and why Git is essential for modern software development.",
    date: "August 10, 2026",
    readTime: "6 min read",
    skills: ["Git", "GitHub", "Development"],
  },
];

export default function Blogs() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080a12",
        color: "#f8fafc",
        padding: "0 7%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "#6366f1",
          filter: "blur(140px)",
          opacity: 0.12,
          top: "100px",
          right: "-200px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "#8b5cf6",
          filter: "blur(140px)",
          opacity: 0.1,
          top: "900px",
          left: "-200px",
          pointerEvents: "none",
        }}
      />

      {/* NAVIGATION */}

      <nav
        style={{
          maxWidth: "1250px",
          margin: "auto",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Link
          href="/"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Back to Home
        </Link>

        <span
          style={{
            color: "#64748b",
            fontSize: "12px",
            letterSpacing: "2px",
          }}
        >
          BLOGS / 05
        </span>
      </nav>

      {/* HERO */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          padding: "110px 0 80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#a5b4fc",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "25px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#6366f1",
              boxShadow: "0 0 15px #6366f1",
            }}
          />

          Developer Journal
        </div>

        <h1
          style={{
            margin: 0,
            maxWidth: "900px",
            fontSize: "clamp(55px, 8vw, 100px)",
            lineHeight: 0.95,
            letterSpacing: "-5px",
            fontWeight: 700,
          }}
        >
          Thoughts,
          <br />
          <span
            style={{
              background:
                "linear-gradient(100deg, #6366f1, #8b5cf6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Code & Knowledge.
          </span>
        </h1>

        <p
          style={{
            maxWidth: "680px",
            marginTop: "35px",
            color: "#94a3b8",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          I write about things I learn while building software — from
          frontend development and React to APIs, databases, Git and
          everything in between.
        </p>
      </section>

      {/* BLOG LIST */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: "30px",
              alignItems: "center",
              padding: "32px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(15,18,30,0.72)",
              backdropFilter: "blur(15px)",
            }}
          >
            {/* NUMBER */}

            <div
              style={{
                color: "#6366f1",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              {blog.number}
            </div>

            {/* CONTENT */}

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "#818cf8",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {blog.category}
                </span>

                <span
                  style={{
                    color: "#475569",
                  }}
                >
                  •
                </span>

                <span
                  style={{
                    color: "#64748b",
                    fontSize: "12px",
                  }}
                >
                  {blog.readTime}
                </span>
              </div>

              <h2
                style={{
                  margin: "0 0 12px",
                  fontSize: "27px",
                  letterSpacing: "-0.8px",
                  lineHeight: 1.2,
                }}
              >
                {blog.title}
              </h2>

              <p
                style={{
                  margin: 0,
                  maxWidth: "750px",
                  color: "#94a3b8",
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                {blog.description}
              </p>

              {/* SKILLS */}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "7px",
                  marginTop: "18px",
                }}
              >
                {blog.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "7px",
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.15)",
                      color: "#c7d2fe",
                      fontSize: "10px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: "18px",
                  color: "#475569",
                  fontSize: "11px",
                }}
              >
                {blog.date}
              </div>
            </div>

            {/* READ BUTTON */}

            <Link
              href={`/blogs/${blog.slug}`}
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "#a5b4fc",
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: "18px",
              }}
            >
              ↗
            </Link>
          </article>
        ))}
      </section>

      {/* CTA */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "150px auto 100px",
          padding: "80px 50px",
          textAlign: "center",
          borderRadius: "30px",
          border: "1px solid rgba(99,102,241,0.25)",
          background:
            "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.18), transparent 60%), rgba(15,18,30,0.7)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span
          style={{
            color: "#818cf8",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
          }}
        >
          KEEP EXPLORING
        </span>

        <h2
          style={{
            maxWidth: "750px",
            margin: "20px auto 35px",
            fontSize: "clamp(35px,5vw,65px)",
            lineHeight: 1.05,
            letterSpacing: "-3px",
          }}
        >
          Learn.
          <br />
          Build.
          <br />
          <span style={{ color: "#818cf8" }}>Repeat.</span>
        </h2>

        <Link
          href="/projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "15px",
            padding: "15px 25px",
            borderRadius: "12px",
            background: "#6366f1",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "0 10px 35px rgba(99,102,241,0.25)",
          }}
        >
          Explore My Projects ↗
        </Link>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          maxWidth: "1250px",
          margin: "auto",
          padding: "30px 0 40px",
          display: "flex",
          justifyContent: "space-between",
          color: "#475569",
          fontSize: "12px",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <span>© 2026 Aarti Mehra</span>
        <span>Designed & Built with Next.js</span>
      </footer>
    </main>
  );
}