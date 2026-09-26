"use client";
import Link from "next/link";
import { useState } from "react";

const projectsData = {
  graduate: [
    {
      number: "01",
      title: "CricFolio",
      category: "Sports Platform",
      description:
        "A dynamic cricket platform designed to provide users with an engaging experience for exploring cricket information, players, teams and match-related data.",
      skills: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
      github: "https://github.com/Aartimehr/CricFolio--Final-Year-Project-",
      live: "https://cricket-gules.vercel.app/",
    },
    {
      number: "02",
      title: "Task Management System",
      category: "Full Stack Development",
      description:
        "*Task Management System A full-stack task management application built with the node.js,react.js and using MySQL. This application allows users to register, log in, and manage their daily tasks through a clean, responsive dashboard",
      skills: ["Node.js", "Express", "React", "REST API"],
      github: "https://github.com/Aartimehr/TaskManagementSystem",
      // live: "https://cube-telemetry.vercel.app",
    },

    // {
    //   number: "03",
    //   title: "Aarnamgati",
    //   category: "Vehicle Tracking",
    //   description:
    //     "A modern vehicle tracking platform focused on providing users with a simple interface to monitor vehicle information and movement.",
    //   skills: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    //   github: "https://github.com/yourusername/aarnamgati",
    //   live: "https://aarnamgati.vercel.app",
    // },
    // {
    //   number: "04",
    //   title: "Smart Calculator",
    //   category: "Productivity Tool",
    //   description:
    //     "A clean calculator application featuring calculation history, responsive interactions and a polished user experience.",
    //   skills: ["React", "JavaScript", "CSS", "Local Storage"],
    //   github: "https://github.com/yourusername/smart-calculator",
    //   live: "https://smart-calculator.vercel.app",
    // },
  ],
  // afterGraduation: [
  //   {
  //     number: "01",
  //     title: "Techhbyus",
  //     category: "Sports Platform",
  //     description:
  //       "A dynamic cricket platform designed to provide users with an engaging experience for exploring cricket information, players, teams and match-related data.",
  //     skills: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
  //     github: "https://github.com/Aartimehr/CricFolio--Final-Year-Project-",
  //     live: "https://cricket-gules.vercel.app/",
  //   },
  //   {
  //     number: "01",
  //     title: "CricFolio",
  //     category: "Sports Platform",
  //     description:
  //       "A dynamic cricket platform designed to provide users with an engaging experience for exploring cricket information, players, teams and match-related data.",
  //     skills: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
  //     github: "https://github.com/Aartimehr/CricFolio--Final-Year-Project-",
  //     live: "https://cricket-gules.vercel.app/",
  //   },
  // ],
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
      github: "#", // Update with actual link when available
      live: "#", // Update with actual link when available
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("graduate");

  const tabs = [
    { id: "graduate", label: "Graduate Projects" },
    // { id: "afterGraduation", label: "After Graduation Projects" },
    { id: "ongoing", label: "Ongoing Projects" },
  ];

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
          borderBottom: "1px solid rgba(0,0,0,0.08)",
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
          }}
        >
          Things I&apos;ve Built.
        </h1>

        <p
          style={{
            maxWidth: "650px",
            marginTop: "20px",
            color: "#2D2424",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          A collection of projects where I combine thoughtful design, frontend
          engineering, and backend development to create useful digital
          experiences.
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
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "12px 24px",
              borderRadius: "30px",
              border: activeTab === tab.id ? "none" : "1px solid #6B1F2B",
              background: activeTab === tab.id ? "#6B1F2B" : "transparent",
              color: activeTab === tab.id ? "#FFFDF9" : "#6B1F2B",
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
                  background: "#F8F1E7",
                  color: "#6366f1",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  borderRight: "1px solid rgba(0,0,0,0.07)",
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
                      border: "1px solid rgba(0,0,0,0.1)",
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
                    color: "#2D2424",
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
                        border: "1px solid rgba(255,255,255,0.18)",
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
                      border: "1px solid rgba(0,0,0,0.12)",
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
          color: "#475569",
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