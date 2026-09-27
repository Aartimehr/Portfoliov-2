import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#FFFDF9",
        color: "#2D2424",
      }}
    >
      {/* HERO / INTRODUCTION */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 60px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          {/* Left side */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "20px",
                color: "#8B3A46",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              Hello, I'm
            </p>

            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1.1",
                color: "#8B3A46",
                margin: "0 0 15px",
                fontWeight: "800",
              }}
            >
              Aarti Mehra
            </h1>

            <h2
              style={{
                fontSize: "32px",
                margin: "0 0 25px",
                color: "#8B3A46",
                fontWeight: "600",
              }}
            >
              Full Stack Developer
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#8B3A46",
                maxWidth: "650px",
                marginBottom: "35px",
              }}
            >
              I am a frontend-focused Full Stack Developer who enjoys
              building modern, responsive and user-friendly web
              applications. I love turning ideas into meaningful digital
              experiences.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Link
                href="/projects"
                style={{
                  border: "2px solid #8B3A46",
                  color: "#FFFDF9",
                  backgroundColor: "#8B3A46",
                  padding: "16px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
              >
                View My Projects
              </Link>

              <Link
                href="/contact"
                style={{
                  border: "2px solid #8B3A46",
                  color: "#8B3A46",
                  padding: "16px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "4px solid #8B3A46",
            }}
          >
            <Image
              src="/profileimage.jpeg"
              alt="Aarti Mehra"
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "20px 10px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "10px",
            color: "#0f172a",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#64748b",
          }}
        >
          I'm a Full Stack Developer with a strong interest in frontend
          development. I enjoy creating clean interfaces, solving
          development problems and continuously learning new technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section
        style={{
          padding: "20px 10px",
          backgroundColor: "#f8fafc",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "10px",
            color: "#0f172a",
          }}
        >
          My Skills
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MySQL",
            "Git",
            "GitHub",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              style={{
                backgroundColor: "#ffffff",
                padding: "12px 12px",
                borderRadius: "30px",
                border: "1px solid #e2e8f0",
                fontWeight: "500",
                color: "#334155",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS & FREELANCE */}
      <section
        style={{
          padding: "20px 10px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px", color: "#0f172a" }}>
          My Work
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          Explore my personal graduate projects alongside the professional web platforms I have built for freelance clients.
        </p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link
            href="/projects"
            style={{
              padding: "14px 30px",
              backgroundColor: "#8B3A46",
              color: "#FFFDF9",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Personal Projects
          </Link>
          <Link
            href="/freelance-projects"
            style={{
              padding: "14px 30px",
              border: "2px solid #8B3A46",
              color: "#8B3A46",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Freelance Work
          </Link>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        style={{
          padding: "20px 10px",
          backgroundColor: "#f8fafc",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px", color: "#0f172a" }}>
          My Education
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
            fontWeight: "500",
            marginBottom: "35px",
          }}
        >
          B.Tech in Computer Science and Engineering
        </p>
        
        <Link
          href="/education"
          style={{
            padding: "14px 30px",
            backgroundColor: "#8B3A46",
            color: "#FFFDF9",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "inline-block",
          }}
        >
          View Education Details
        </Link>
      </section>

      {/* DOCUMENTATION */}
      <section
        style={{
          padding: "20px 10px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px", color: "#0f172a" }}>
          Engineering Documentation
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          A comprehensive deep-dive into my core engineering tasks, feature developments, and architectural contributions.
        </p>

        <Link
          href="/documentation"
          style={{
            padding: "14px 30px",
            backgroundColor: "#8B3A46",
            color: "#FFFDF9",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "inline-block",
          }}
        >
          Read Documentation
        </Link>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "100px 60px",
          backgroundColor: "#F8F1E7",
          color: "#6B1F2B",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          Let's Work Together
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#6B1F2B",
            marginBottom: "30px",
          }}
        >
          Have a project or opportunity in mind? I'd love to hear from you.
        </p>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            backgroundColor: "#6B1F2B",
            color: "#FFFDF9",
            padding: "14px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
}