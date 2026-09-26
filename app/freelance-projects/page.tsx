export default function FreelanceProjects() {
  return (
    <section
      style={{
        padding: "100px 60px",
        backgroundColor: "#FFFDF9",
      }}
    >
      {/* Section Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <p
          style={{
            color: "#2D2424",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          MY WORK
        </p>

        <h2
          style={{
            fontSize: "42px",
            margin: "0 0 15px",
            color: "#0f172a",
          }}
        >
          Freelance Projects
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#64748b",
            fontSize: "17px",
            lineHeight: "1.7",
          }}
        >
          A collection of websites and digital experiences I have
          built for clients and businesses.
        </p>
      </div>

      {/* Project Cards */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {/* Project 1: GlobalWorkforce */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div style={{ padding: "25px" }}>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                color: "#0f172a",
              }}
            >
              GlobalWorkforce
            </h3>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              A comprehensive digital web platform developed for an international recruitment business. Built with a robust backend and hosted database to streamline workforce placement and manage client data securely.
            </p>

            <p
              style={{
                color: "#8B3A46",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              React • Node.js • Express • MySQL
            </p>

            <a
              href="https://GlobalWorkforce.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#8B3A46",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Project 2: CurlyCuts */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div style={{ padding: "25px" }}>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                color: "#0f172a",
              }}
            >
              CurvyCuts
            </h3>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              A modern, responsive business website designed for a salon to showcase its specialized haircare services, attract new customers, and provide a polished digital experience.
            </p>

            <p
              style={{
                color: "#8B3A46",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Next.js • React • CSS
            </p>

            <a
              href="https://curlycuts.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#8B3A46",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Project 3: Prime Care */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            border: "1px solid rgba(139, 58, 70, 0.2)",
            position: "relative",
          }}
        >
          {/* Optional Ongoing Badge */}
          <div style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            backgroundColor: "#F8F1E7",
            color: "#8B3A46",
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold"
          }}>
            Ongoing
          </div>
          <div style={{ padding: "25px" }}>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                color: "#0f172a",
              }}
            >
              Prime Care
            </h3>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              An ongoing digital presence developed for a healthcare and physiotherapy clinic, focused on highlighting specialized care services, patient engagement, and practice information.
            </p>

            <p
              style={{
                color: "#8B3A46",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              React • Next.js • Tailwind
            </p>

            <a
              href="https://prime-care-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#8B3A46",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              View Project →
            </a>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <a
          href="/freelance-projects"
          style={{
            display: "inline-block",
            color: "#8B3A46",
            padding: "14px 30px",
            border: "2px solid #4A1420",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          View All Freelance Projects
        </a>
      </div>
    </section>
  );
}