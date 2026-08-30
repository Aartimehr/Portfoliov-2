import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "CricFolio",
    category: "Sports Platform",
    description:
      "A dynamic cricket platform designed to provide users with an engaging experience for exploring cricket information, players, teams and match-related data.",
    skills: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/cricfolio",
    live: "https://cricfolio.vercel.app",
  },
  {
    number: "02",
    title: "Cube Telemetry",
    category: "Data & Analytics",
    description:
      "A telemetry dashboard that collects, processes and visualizes data through a clean and responsive interface for monitoring important metrics.",
    skills: ["Node.js", "Express", "MongoDB", "React", "REST API"],
    github: "https://github.com/yourusername/cube-telemetry",
    live: "https://cube-telemetry.vercel.app",
  },
  {
    number: "03",
    title: "Aarnamgati",
    category: "Vehicle Tracking",
    description:
      "A modern vehicle tracking platform focused on providing users with a simple interface to monitor vehicle information and movement.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/yourusername/aarnamgati",
    live: "https://aarnamgati.vercel.app",
  },
  {
    number: "04",
    title: "TechByus",
    category: "Business Website",
    description:
      "A professional digital presence for a technology business offering website development and digital solutions to businesses and startups.",
    skills: ["Next.js", "React", "CSS", "JavaScript", "SEO"],
    github: "https://github.com/yourusername/techbyus",
    live: "https://techhbyus.com",
  },
  {
    number: "05",
    title: "Smart Calculator",
    category: "Productivity Tool",
    description:
      "A clean calculator application featuring calculation history, responsive interactions and a polished user experience.",
    skills: ["React", "JavaScript", "CSS", "Local Storage"],
    github: "https://github.com/yourusername/smart-calculator",
    live: "https://smart-calculator.vercel.app",
  },
];

export default function Projects() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFFDF9",
        color: "#2D2424",
        padding: "0 7%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* NAVBAR */}

      <nav
        style={{
          maxWidth: "1250px",
          margin: "auto",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#2D2424",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Back to Home
        </Link>

        <span
          style={{
            color: "#2D2424",
            fontSize: "12px",
            letterSpacing: "2px",
          }}
        >
          PROJECTS / 05
        </span>
      </nav>

      {/* HERO

      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          padding: "110px 0 90px",
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
              background: "#6B1F2B",
              boxShadow: "0 0 15px #6366f1",
            }}
          />

          Selected Work
        </div> */}

        <h1
          style={{
            margin: 0,
            maxWidth: "700px",
            fontSize: "clamp(10px, 8vw, 50px)",
            lineHeight: 0.95,
            letterSpacing: "-5px",
            fontWeight: 100,
          }}
        >
          Things I&apos;ve{" "}Built.
          <span
            style={{
              // background:
              //   "linear-gradient(100deg, #6366f1, #8b5cf6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
          </span>
        </h1>

        <p
          style={{
            maxWidth: "650px",
            marginTop: "px",
            color: "#2D2424",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          A collection of projects where I combine thoughtful design,
          frontend engineering and backend development to create useful
          digital experiences.
        </p>
      {/* </section> */}

      {/* PROJECTS */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          display: "flex",
          background:"#6B1F2B",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        {projects.map((project) => (
          <article
            key={project.number}
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "24px",
              background: "rgba(15,18,30,0.72)",
              backdropFilter: "blur(15px)",
              overflow: "hidden",
            }}
          >
            {/* PROJECT NUMBER */}

            <div
              style={{
                padding: "35px 25px",
                background:"#F8F1E7",
                color: "#6366f1",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                borderRight: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {project.number}
            </div>
            {/* PROJECT CONTENT */}

            <div
              style={{
                padding: "35px 40px",
                background:"#F8F1E7",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      color: "#2D2424",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.category}
                  </span>

                  <h2
                    style={{
                      margin: "10px 0 0",
                      fontSize: "38px",
                      letterSpacing: "-1.5px",
                    }}
                  >
                    {project.title}
                  </h2>
                </div>

                <span
                  style={{
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    color: "#a5b4fc",
                    fontSize: "20px",
                  }}
                >
                  ↗
                </span>
              </div>

              {/* DESCRIPTION */}

              <p
                style={{
                  maxWidth: "760px",
                  color: "",
                  lineHeight: 1.75,
                  fontSize: "15px",
                  margin: "22px 0",
                }}
              >
                {project.description}
              </p>

              {/* SKILLS */}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "9px",
                  marginBottom: "28px",
                }}
              >
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "8px 13px",
                      borderRadius: "8px",
                      background: "#8B3A46",
                      border: "1px solid rgba(99,102,241,0.18)",
                      color: "#c7d2fe",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 18px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#756666",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  GitHub ↗
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 18px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#756666",
                    border: "1px solid #6366f1",
                  }}
                >
                  Live Project ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}

      {/* <section
        style={{
          maxWidth: "1250px",
          margin: "150px auto 100px",
          padding: "80px 50px",
          textAlign: "center",
          borderRadius: "30px",
          border: "1px solid rgba(99,102,241,0.25)",
          background:
            "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.18), transparent 60%), rgba(15,18,30,0.7)",
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
          HAVE A PROJECT IN MIND?
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
          Let&apos;s build something{" "}
          <span style={{ color: "#818cf8" }}>meaningful.</span>
        </h2> */}
{/* 
        <Link
          href="/contact"
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
          Let&apos;s Talk ↗
        </Link> */}
      {/* </section> */}

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