import Link from "next/link";

const contact = [
  {
    label: "EMAIL",
    value: "mehra11aarti@gmail.com",
    href: "mailto:mehra11aarti@gmail.com",
    icon: "✉",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/aarti-mehra-2b6331263",
    href: "https://www.linkedin.com/in/aarti-mehra-2b6331263",
    icon: "in",
  },
  {
    label: "GITHUB",
    value: "github.com/Aartimehr",
    href: "https://github.com/Aartimehr",
    icon: "⌘",
  },
  {
    label: "PHONE",
    value: "7827351031",
    href: "tel:7827351031",
    icon: "☎",
  },
];

export default function Contact() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F8F1E7",
        color: "#14213D",
        padding: "0 7%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND GLOW */}

      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "#8B1E2D",
          filter: "blur(150px)",
          opacity: 0.12,
          top: "50px",
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
          background: "#1E3A5F",
          filter: "blur(140px)",
          opacity: 0.12,
          bottom: "100px",
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
          borderBottom: "1px solid rgba(20,33,61,0.12)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Link
          href="/"
          style={{
            color: "#1E3A5F",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          ← Back to Home
        </Link>

        <span
          style={{
            color: "#526B84",
            fontSize: "12px",
            letterSpacing: "2px",
          }}
        >
          CONTACT / LET&apos;S CONNECT
        </span>
      </nav>

      {/* HERO */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          padding: "110px 0 70px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#8B1E2D",
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
              background: "#8B1E2D",
              boxShadow: "0 0 15px rgba(139,30,45,0.5)",
            }}
          />

          Get In Touch
        </div>

        <h1
          style={{
            margin: 0,
            maxWidth: "900px",
            fontSize: "clamp(55px, 8vw, 105px)",
            lineHeight: 0.95,
            letterSpacing: "-5px",
            fontWeight: 700,
            color: "#14213D",
          }}
        >
          Let&apos;s build
          <br />
          something{" "}
          <span
            style={{
              background:
                "linear-gradient(100deg, #8B1E2D, #A83246, #1E3A5F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            great.
          </span>
        </h1>

        <p
          style={{
            maxWidth: "650px",
            marginTop: "35px",
            color: "#526B84",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          Whether you have a project idea, a job opportunity, a freelance
          requirement, or simply want to connect, feel free to reach out.
        </p>
      </section>

      {/* CONTACT GRID */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "22px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {contact.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={
              contact.label === "EMAIL" || contact.label === "PHONE"
                ? undefined
                : "_blank"
            }
            rel={
              contact.label === "EMAIL" || contact.label === "PHONE"
                ? undefined
                : "noopener noreferrer"
            }
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "30px",
              borderRadius: "22px",
              border: "1px solid rgba(30,58,95,0.14)",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(15px)",
              textDecoration: "none",
              color: "#14213D",
              boxShadow: "0 10px 30px rgba(20,33,61,0.05)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* ICON */}

              <div
                style={{
                  width: "52px",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  background: "rgba(139,30,45,0.08)",
                  border: "1px solid rgba(139,30,45,0.18)",
                  color: "#8B1E2D",
                  fontSize:
                    contact.label === "LINKEDIN" ? "16px" : "20px",
                  fontWeight:
                    contact.label === "LINKEDIN" ? 700 : 400,
                }}
              >
                {contact.icon}
              </div>

              <div>
                <div
                  style={{
                    color: "#8B1E2D",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    marginBottom: "8px",
                  }}
                >
                  {contact.label}
                </div>

                <div
                  style={{
                    color: "#1E3A5F",
                    fontSize: "14px",
                    wordBreak: "break-word",
                  }}
                >
                  {contact.value}
                </div>
              </div>
            </div>

            {/* ARROW */}

            <span
              style={{
                color: "#1E3A5F",
                fontSize: "20px",
              }}
            >
              ↗
            </span>
          </a>
        ))}
      </section>

      {/* MESSAGE CTA */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "100px auto 120px",
          padding: "70px 50px",
          textAlign: "center",
          borderRadius: "30px",
          border: "1px solid rgba(139,30,45,0.18)",
          background:
            "radial-gradient(circle at 50% 0%, rgba(139,30,45,0.12), transparent 60%), rgba(255,255,255,0.45)",
          position: "relative",
          zIndex: 2,
          boxShadow: "0 15px 45px rgba(20,33,61,0.06)",
        }}
      >
        <span
          style={{
            color: "#8B1E2D",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
          }}
        >
          OPEN TO OPPORTUNITIES
        </span>

        <h2
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            fontSize: "clamp(35px, 5vw, 62px)",
            lineHeight: 1.05,
            letterSpacing: "-3px",
            color: "#14213D",
          }}
        >
          Have an idea?
          <br />
          <span style={{ color: "#8B1E2D" }}>
            Let&apos;s talk about it.
          </span>
        </h2>

        <p
          style={{
            maxWidth: "550px",
            margin: "0 auto 30px",
            color: "#526B84",
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        >
          I&apos;m always interested in discussing new projects, interesting
          ideas and opportunities to build something useful.
        </p>

        <a
          href="mailto:mehra11aarti@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "15px 25px",
            borderRadius: "12px",
            background: "#8B1E2D",
            color: "#FFFFFF",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "0 10px 35px rgba(139,30,45,0.25)",
          }}
        >
          Send Me an Email ↗
        </a>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          maxWidth: "1250px",
          margin: "auto",
          padding: "30px 0 40px",
          display: "flex",
          justifyContent: "space-between",
          color: "#526B84",
          fontSize: "12px",
          borderTop: "1px solid rgba(20,33,61,0.12)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span>© 2026 Aarti Mehra</span>

        <span>Designed & Built with Next.js</span>
      </footer>
    </main>
  );
}