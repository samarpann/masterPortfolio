import React, { useState } from "react";
import "./FeaturedProjects.css";
import { Fade } from "react-reveal";
import { featuredProjects } from "../../portfolio";

export default function FeaturedProjects({ theme }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (!featuredProjects || !featuredProjects.projects) {
    return null;
  }

  const allProjects = featuredProjects.projects;

  // Filter categories
  const categories = [
    "All",
    "E-Commerce & Retail",
    "CRM & ERP",
    "Corporate & Industrial",
    "Fintech",
    "Healthcare & Hospitality",
  ];

  const filteredProjects = allProjects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "E-Commerce & Retail") {
      return (
        project.category.includes("E-Commerce") ||
        project.category.includes("Fashion") ||
        project.category.includes("Retail")
      );
    }
    if (selectedCategory === "CRM & ERP") {
      return (
        project.category.includes("CRM") || project.category.includes("ERP")
      );
    }
    if (selectedCategory === "Corporate & Industrial") {
      return (
        project.category.includes("Corporate") ||
        project.category.includes("Industrial") ||
        project.category.includes("Agency") ||
        project.category.includes("Marketing")
      );
    }
    if (selectedCategory === "Fintech") {
      return project.category.includes("Fintech");
    }
    if (selectedCategory === "Healthcare & Hospitality") {
      return (
        project.category.includes("Healthcare") ||
        project.category.includes("Clinic") ||
        project.category.includes("Hospitality") ||
        project.category.includes("Resort") ||
        project.category.includes("Dining") ||
        project.category.includes("Culinary")
      );
    }
    return true;
  });

  return (
    <div className="featured-projects-section" id="featured-projects">
      <Fade bottom duration={1200} distance="30px">
        <div className="featured-projects-header">
          <h2 className="featured-projects-title" style={{ color: theme.text }}>
            {featuredProjects.title || "Featured Projects"}
          </h2>
          <p
            className="featured-projects-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {featuredProjects.subtitle ||
              "Production web applications, business platforms, and enterprise internal software I have engineered and deployed."}
          </p>
        </div>

        <div className="featured-projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
              style={{
                backgroundColor:
                  selectedCategory === cat
                    ? theme.imageHighlight || "#0284c7"
                    : theme.highlight,
                color: selectedCategory === cat ? "#ffffff" : theme.text,
                borderColor:
                  selectedCategory === cat
                    ? theme.imageHighlight || "#0284c7"
                    : "transparent",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </Fade>

      <div className="featured-projects-grid">
        {filteredProjects.map((project, index) => (
          <Fade
            bottom
            duration={1000 + index * 100}
            distance="40px"
            key={project.id || index}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-project-card"
              style={{
                backgroundColor: theme.body,
                borderColor: theme.headerColor,
              }}
            >
              <div className="project-card-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-img"
                  loading="lazy"
                />
                <div className="project-card-overlay" />
                <span className="project-number-badge">{project.id}</span>
                <span className="project-category-badge">
                  {project.category}
                </span>
              </div>

              <div className="project-card-content">
                <div className="project-card-title-row">
                  <h3
                    className="project-card-title"
                    style={{ color: theme.text }}
                  >
                    {project.title}
                  </h3>
                  <div
                    className="project-card-arrow"
                    style={{
                      backgroundColor: theme.highlight,
                      color: theme.text,
                    }}
                  >
                    ↗
                  </div>
                </div>

                <p
                  className="project-card-desc"
                  style={{ color: theme.secondaryText }}
                >
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <div className="project-card-tags">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="project-card-tag"
                        style={{
                          backgroundColor: theme.highlight,
                          color: theme.text,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-card-footer">
                  <span className="project-card-link-btn">
                    View Live Platform <span>→</span>
                  </span>
                </div>
              </div>
            </a>
          </Fade>
        ))}
      </div>
    </div>
  );
}
