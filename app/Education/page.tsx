import Link from "next/link";

const education = [
  {
    year: "2018 — 2020",
    type: "HIGH SCHOOL",
    title: "Non-Medical Science",
    institution: "Ashok Memorial Public School",
    location: "Faridabad, Haryana",
    score: "78%",
    description:
      "Completed higher secondary education with a focus on Non-Medical Science, building a strong foundation in Mathematics, Physics, Chemistry and analytical problem-solving.",
  },
  {
    year: "2021 — 2025",
    type: "BACHELOR'S DEGREE",
    title: "B.Tech — Computer Science & Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "Uttar Pradesh, India",
    score: "7.68 CGPA",
    description:
      "Completed a Bachelor's degree in Computer Science and Engineering with a focus on software development, web technologies, databases, programming and computer science fundamentals.",
  },
];

const certifications = [
  {
    number: "01",
    title: "Google Professional Certificate",
    provider: "Google",
    description:
      "Professional certification focused on developing practical, industry-relevant skills and applying them to real-world technology and data problems.",
    skills: ["Google", "Professional Skills", "Data", "Analytics"],
  },
  {
    number: "02",
    title: "SQL Certification",
    provider: "Simplilearn",
    description:
      "Certification demonstrating knowledge of SQL fundamentals, database concepts, querying data and working with relational databases.",
    skills: ["SQL", "Database", "Queries", "Data Analysis"],
  },
];

export default function Education() {
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
          EDUCATION / CERTIFICATIONS
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

          My Academic Journey
        </div>

        <h1
          style={{
            margin: 0,
            maxWidth: "850px",
            fontSize: "clamp(55px, 8vw, 100px)",
            lineHeight: 0.95,
            letterSpacing: "-5px",
            fontWeight: 700,
          }}
        >
          Education &
          <span
            style={{
              background:
                "linear-gradient(100deg, #6366f1, #8b5cf6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {" "}
            Growth.
          </span>
        </h1>

        <p
          style={{
            maxWidth: "650px",
            marginTop: "35px",
            color: "#94a3b8",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          My academic journey has helped me build a strong foundation in
          science and computer science while continuously developing practical
          skills in software development and technology.
        </p>
      </section>

      {/* EDUCATION */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "28px",
              letterSpacing: "-1px",
            }}
          >
            Education
          </h2>

          <div
            style={{
              height: "1px",
              flex: 1,
              background: "rgba(255,255,255,0.08)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {education.map((item, index) => (
            <article
              key={item.year}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "24px",
                background: "rgba(15,18,30,0.72)",
                backdropFilter: "blur(15px)",
                overflow: "hidden",
              }}
            >
              {/* YEAR */}

              <div
                style={{
                  padding: "35px 30px",
                  borderRight: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: "#818cf8",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                  }}
                >
                  {item.year}
                </span>

                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    color: "#a5b4fc",
                    fontSize: "16px",
                  }}
                >
                  {index + 1}
                </span>
              </div>

              {/* CONTENT */}

              <div
                style={{
                  padding: "35px 40px",
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
                  {item.type}
                </span>

                <h3
                  style={{
                    margin: "10px 0 8px",
                    fontSize: "30px",
                    letterSpacing: "-1px",
                  }}
                >
                  {item.title}
                </h3>

                <h4
                  style={{
                    margin: 0,
                    color: "#e2e8f0",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {item.institution}
                </h4>

                <p
                  style={{
                    margin: "7px 0 20px",
                    color: "#64748b",
                    fontSize: "13px",
                  }}
                >
                  {item.location}
                </p>

                <p
                  style={{
                    maxWidth: "800px",
                    color: "#94a3b8",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    marginBottom: "25px",
                  }}
                >
                  {item.description}
                </p>

                {/* SCORE */}

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  <span
                    style={{
                      color: "#64748b",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Result
                  </span>

                  <strong
                    style={{
                      color: "#a5b4fc",
                      fontSize: "14px",
                    }}
                  >
                    {item.score}
                  </strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "120px auto 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "28px",
              letterSpacing: "-1px",
            }}
          >
            Certifications
          </h2>

          <div
            style={{
              height: "1px",
              flex: 1,
              background: "rgba(255,255,255,0.08)",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "22px",
          }}
        >
          {certifications.map((certificate) => (
            <article
              key={certificate.number}
              style={{
                padding: "35px",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "24px",
                background: "rgba(15,18,30,0.72)",
                backdropFilter: "blur(15px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <span
                  style={{
                    color: "#6366f1",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                  }}
                >
                  {certificate.number}
                </span>

                <span
                  style={{
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    color: "#a5b4fc",
                    fontSize: "18px",
                  }}
                >
                  ✓
                </span>
              </div>

              <span
                style={{
                  color: "#818cf8",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                {certificate.provider}
              </span>

              <h3
                style={{
                  fontSize: "25px",
                  margin: "10px 0 15px",
                  letterSpacing: "-0.8px",
                }}
              >
                {certificate.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  marginBottom: "25px",
                }}
              >
                {certificate.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "7px 11px",
                      borderRadius: "7px",
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.16)",
                      color: "#c7d2fe",
                      fontSize: "11px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
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
          ALWAYS LEARNING
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
          Learning today.
          <br />
          Building for{" "}
          <span style={{ color: "#818cf8" }}>tomorrow.</span>
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
          View My Projects ↗
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