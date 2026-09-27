"use client";

import Link from "next/link";
import { useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  github: string;
  live: string;
};

type ProjectTab = "graduate" | "ongoing";

const projectsData: Record<ProjectTab, Project[]> = {
  graduate: [
    {
      number: "01",
      title: "CricFolio",
      category: "Sports Platform",
      description:
        "A dynamic cricket platform designed to provide users with an engaging experience for exploring cricket information, players, teams and match-related data.",
      skills: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
      github:
        "https://github.com/Aartimehr/CricFolio--Final-Year-Project-",
      live: "https://cricket-gules.vercel.app/",
    },

    {
      number: "02",
      title: "Task Management System",
      category: "Full Stack Development",
      description:
        "A full-stack task management application built with Node.js, React.js and MySQL. This application allows users to register, log in, and manage their daily tasks through a clean, responsive dashboard.",
      skills: ["Node.js", "Express", "React", "REST API"],
      github: "https://github.com/Aartimehr/TaskManagementSystem",
      live: "#",
    },

    // Add more graduate projects here when needed.
  ],

  ongoing: [
    {
      number: "01",
      title: "TechByus",
      category: "Business Website",
      description:
        "A professional digital presence for a technology business offering website development and digital solutions to businesses and startups.",
      skills: ["Next.js", "React", "CSS", "JavaScript", "SEO"],
      github: "https://github.com/yourusername/techbyus",
      live: "https://techhbyus.com",
    },

    {
      number: "02",
      title: "Invoice Tracker Micro-SaaS",
      category: "B2B Platform",
      description:
        "A B2B invoice tracking Micro-SaaS platform designed to streamline billing operations, monitor revenue, and simplify business financial workflows.",
      skills: ["React", "Node.js", "MySQL"],
      github: "#",
      live: "#",
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] =
    useState<ProjectTab>("graduate");

  const tabs: { id: ProjectTab; label: string }[] = [
    {
      id: "graduate",
      label: "Graduate Projects",
    },
    {
      id: "ongoing",
      label: "Ongoing Projects",
    },
  ];

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
      {/* BACKGROUND GLOW - RED */}

      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "#8B1E2D",
          filter: "blur(150px)",
          opacity: 0.08,
          top: "50px",
          right: "-200px",
          pointerEvents: "none",
        }}
      />

      {/* BACKGROUND GLOW - BLUE */}

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "#1E3A5F",
          filter: "blur(150px)",
          opacity: 0.08,
          bottom: "200px",
          left: "-200px",
          pointerEvents: "none",
        }}
      />

      {/* NAVBAR */}

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
            textTransform: "uppercase",
          }}
        >
          PROJECTS / {activeTab}
        </span>
      </nav>

      {/* HEADER */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "60px auto 40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            margin: 0,
            maxWidth: "700px",
            fontSize: "clamp(40px, 8vw, 50px)",
            lineHeight: 0.95,
            letterSpacing: "-2px",
            fontWeight: 800,
            color: "#14213D",
          }}
        >
          Things I&apos;ve Built.
        </h1>

        <p
          style={{
            maxWidth: "650px",
            marginTop: "20px",
            color: "#526B84",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          A collection of projects where I combine thoughtful design,
          frontend engineering, and backend development to create useful
          digital experiences.
        </p>
      </section>

      {/* TABS NAVIGATION */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "0 auto 40px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "12px 24px",
              borderRadius: "30px",
              border:
                activeTab === tab.id
                  ? "1px solid #8B1E2D"
                  : "1px solid #8B1E2D",
              background:
                activeTab === tab.id ? "#8B1E2D" : "transparent",
              color:
                activeTab === tab.id ? "#FFFFFF" : "#8B1E2D",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </section>

      {/* PROJECTS LIST */}

      <section
        style={{
          maxWidth: "1250px",
          margin: "auto",
          display: "flex",
          background: "#6B1F2B",
          padding: "22px",
          borderRadius: "30px",
          flexDirection: "column",
          gap: "22px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {projectsData[activeTab].length === 0 ? (
          <div
            style={{
              padding: "60px 20px",
              textAlign: "center",
              color: "#F8F1E7",
              fontSize: "16px",
            }}
          >
            Projects coming soon...
          </div>
        ) : (
          projectsData[activeTab].map((project) => (
            <article
              key={project.number}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr",
                border: "1px solid rgba(20,33,61,0.12)",
                borderRadius: "24px",
                background: "#F8F1E7",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(20,33,61,0.06)",
              }}
            >
              {/* PROJECT NUMBER */}

              <div
                style={{
                  padding: "35px 25px",
                  background: "#EDE2D3",
                  color: "#8B1E2D",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  borderRight: "1px solid rgba(20,33,61,0.10)",
                }}
              >
                {project.number}
              </div>

              {/* PROJECT CONTENT */}

              <div
                style={{
                  padding: "35px 40px",
                  background: "#F8F1E7",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        color: "#8B1E2D",
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
                        color: "#14213D",
                      }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  {/* ARROW */}

                  <span
                    style={{
                      width: "48px",
                      height: "48px",
                      minWidth: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(30,58,95,0.15)",
                      borderRadius: "50%",
                      color: "#1E3A5F",
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
                    color: "#526B84",
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
                        border:
                          "1px solid rgba(139,30,45,0.15)",
                        color: "#F8F1E7",
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
                    flexWrap: "wrap",
                  }}
                >
                  {/* GITHUB */}

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
                      color: "#1E3A5F",
                      border:
                        "1px solid rgba(30,58,95,0.20)",
                      background: "transparent",
                    }}
                  >
                    GitHub ↗
                  </a>

                  {/* LIVE PROJECT */}

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
                      color: "#8B1E2D",
                      border: "1px solid #8B1E2D",
                      background: "transparent",
                    }}
                  >
                    Live Project ↗
                  </a>
                </div>
              </div>
            </article>
          ))
        )}
      </section>

      {/* FOOTER */}

      <footer
        style={{
          maxWidth: "1250px",
          margin: "100px auto 0",
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