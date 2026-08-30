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
        {/* Project 1 */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* <img
            src="/project1.jpg"
            alt="Project 1"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
            }}
          /> */}

          <div style={{ padding: "25px" }}>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                color: "#0f172a",
              }}
            >
              Business Website
            </h3>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              A modern responsive website designed for a growing
              business to showcase its services and attract customers.
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
              href="#"
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

        {/* Project 2 */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* <img
            src="/project2.jpg"
            alt="Project 2"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
            }}
          /> */}

          <div style={{ padding: "25px" }}>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                color: "#0f172a",
              }}
            >
              E-Commerce Website
            </h3>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              An e-commerce platform with product listings,
              categories and a clean shopping experience.
            </p>

            <p
              style={{
                color: "#8B3A46",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              React • Node.js • MongoDB
            </p>

            <a
              href="#"
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

        {/* Project 3 */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* <img
            src="/project3.jpg"
            alt="Project 3"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
            }}
          /> */}

          <div style={{ padding: "25px" }}>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                color: "#0f172a",
              }}
            >
              Professional Portfolio
            </h3>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              A professional portfolio website created to showcase
              a client's skills, work and professional journey.
            </p>

            <p
              style={{
                color: "#8B3A46",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Next.js • TypeScript • Tailwind
            </p>

            <a
              href="#"
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
            // backgroundColor: "#6366f1",
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