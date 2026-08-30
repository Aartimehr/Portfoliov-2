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
          padding: "80px 60px",
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
                color:"#8B3A46",
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
                  // backgroundColor: "#6366f1",
                  border: "1px solid #4A1420",
                  color: "linear-gradient(100deg, #6366f1, #8b5cf6, #a78bfa",
                  padding: "20px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                View My Projects
              </Link>

              <Link
                href="/contact"
                style={{
                  border: "1px solid #4A1420",
                  color: "linear-gradient(100deg, #6366f1, #8b5cf6, #a78bfa",
                  padding: "20px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
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
          padding: "100px 60px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
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
          padding: "100px 60px",
          backgroundColor: "#f8fafc",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "50px",
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
                padding: "12px 22px",
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

      {/* PROJECTS */}
      <section
        style={{
          padding: "100px 60px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          My Projects
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          Explore some of the projects I have built.
        </p>
      </section>

      {/* EDUCATION */}
      <section
        style={{
          padding: "100px 60px",
          backgroundColor: "#f8fafc",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          My Education
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          B.Tech in Computer Science and Engineering
        </p>
      </section>

      {/* BLOGS */}
      <section
        style={{
          padding: "100px 60px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          My Blogs
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          I will be sharing my development journey and technical learnings
          here.
        </p>
      </section>

      {/* CONTACT
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
            backgroundColor: "#F8F1E7",
            color: "#6B1F2B",
            padding: "14px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Contact Me
        </Link>
      </section> */}
    </main>
  );
}