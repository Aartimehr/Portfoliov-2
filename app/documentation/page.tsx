import Link from "next/link";

const workflowSteps = [
  {
    slug: "unified-checkout-engine",
    number: "01",
    category: "Storefront (Next.js)",
    title: "Modal-Based Checkout & Cart Engine",
    description:
      "Re-architected the customer checkout experience by replacing legacy funnels with a unified 4-step modal system. Built complete unauthenticated guest flows with mid-flow auth gates, COD-to-Prepaid conversion logic, and automated coupon validation (BuyX-GetY engine).",
    date: "AIPM Storefront",
    readTime: "Frontend & Payments",
    skills: ["Next.js", "State Management", "Payment Gateways", "Cart Logic"],
  },
  {
    slug: "admin-dashboard-analytics",
    number: "02",
    category: "Internal Tooling (React)",
    title: "Admin App: Data Dashboards & Analytics",
    description:
      "Designed and developed the v2/v3 Admin Dashboard single-handedly. Engineered a dynamic metric card system, aggregations charts, and complex data-table filters spanning Operations, Finance, and Analytics. Migrated frontend calculations to secure backend-computed APIs.",
    date: "AIPM Admin",
    readTime: "Data Visualization",
    skills: ["React", "RTK Query", "Analytics", "API Migration"],
  },
  {
    slug: "gokwik-abandoned-cart",
    number: "03",
    category: "Conversion Optimization",
    title: "Abandoned Cart & Lead Capture System",
    description:
      "Integrated the GoKwik SDK to capture abandoned cart leads across guest handoff points. Built automated payload extraction, deduplication logic for returning shoppers, and armed the capture process to silently attach logged-in profiles to lead records.",
    date: "AIPM Storefront",
    readTime: "SDK Integration",
    skills: ["GoKwik SDK", "Lead Tracking", "Event Listeners"],
  },
  {
    slug: "content-blocks-localization",
    number: "04",
    category: "CMS & Localization",
    title: "Dynamic Content Blocks & Multilingual SEO",
    description:
      "Built a flexible content management system featuring rich-text editors and dynamic page blocks. Delivered comprehensive localization (English/Hindi) across the platform, handling text-clipping constraints, and optimized pages with SSR content blocks and structured schema for SEO.",
    date: "AIPM Full Stack",
    readTime: "SEO & CMS",
    skills: ["SSR", "Localization", "Rich-Text Edit", "Schema Markup"],
  },
  {
    slug: "order-management-whatsapp",
    number: "05",
    category: "Operations App",
    title: "Order Trails & WhatsApp Carousel Builder",
    description:
      "Engineered the complete order management pipeline—from manual order creation and partial payments to detailed order trail tracking. Additionally built a multi-screen WhatsApp notification template authoring tool with dynamic media uploads and fill-in-the-blank placeholders.",
    date: "AIPM Admin",
    readTime: "Operations Tools",
    skills: ["Routing", "Template Builders", "Order Workflows"],
  },
];

export default function Documentation() {
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
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "#2D2424",
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
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          position: "relative",
          zIndex: 2,
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
          DOCUMENTATION / {workflowSteps.length < 10 ? `0${workflowSteps.length}` : workflowSteps.length}
        </span>
      </nav>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          padding: "80px 0 60px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#2D2424",
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
              boxShadow: "0 0 15px #6B1F2B",
            }}
          />
          Engineering Work & Experience
        </div>

        <h2
          style={{
            margin: 0,
            maxWidth: "900px",
            fontSize: "clamp(45px, 8vw, 85px)",
            lineHeight: 0.95,
            letterSpacing: "-3px",
            fontWeight: 800,
          }}
        >
          Building Systems at <br /> AIPM.
        </h2>

        <p
          style={{
            maxWidth: "680px",
            marginTop: "25px",
            color: "#2D2424",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
        >
          A documented overview of my core engineering tasks, feature developments, and architectural contributions across the AIPM Storefront (Next.js) and Internal Admin App (React).
        </p>
      </section>

      {/* WORKFLOW LIST */}
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
        {workflowSteps.map((step) => (
          <article
            key={step.slug}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: "30px",
              alignItems: "center",
              padding: "32px",
              borderRadius: "22px",
              border: "1px solid rgba(0,0,0,0.08)",
              background: "#F8F1E7",
              backdropFilter: "blur(15px)",
            }}
          >
            {/* NUMBER */}
            <div
              style={{
                color: "#2D2424",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              {step.number}
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
                    color: "#2D2424",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {step.category}
                </span>

                <span style={{ color: "#2D2424" }}>•</span>

                <span
                  style={{
                    color: "#2D2424",
                    fontSize: "12px",
                  }}
                >
                  {step.readTime}
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
                {step.title}
              </h2>

              <p
                style={{
                  margin: 0,
                  maxWidth: "750px",
                  color: "#2D2424",
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                {step.description}
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
                {step.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "7px",
                      background: "rgba(139, 58, 70, 0.08)",
                      border: "1px solid rgba(139, 58, 70, 0.15)",
                      color: "#2D2424",
                      fontSize: "10px",
                      fontWeight: 600,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: "18px",
                  color: "#2D2424",
                  fontSize: "11px",
                }}
              >
                {step.date}
              </div>
            </div>

            {/* VIEW DETAILS BUTTON */}
            {/* <Link
              href={`/documentation/${step.slug}`}
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "#2D2424",
                border: "1px solid rgba(0,0,0,0.1)",
                fontSize: "18px",
                transition: "all 0.2s ease",
              }}
            >
              ↗
            </Link> */}
          </article>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          maxWidth: "1250px",
          margin: "80px auto 0",
          padding: "30px 0 40px",
          display: "flex",
          justifyContent: "space-between",
          color: "#2D2424",
          fontSize: "12px",
          borderTop: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <span>© 2026 Aarti Mehra</span>
        <span>Designed & Built with Next.js</span>
      </footer>
    </main>
  );
}