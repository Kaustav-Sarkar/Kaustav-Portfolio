import React from "react";
import "./FlagshipProjects.css";
import { flagshipProjects } from "../../portfolio";

export default function FlagshipProject({ theme }) {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="flagship-projects-section" id="flagship-projects">
      <div>
        <h1 className="flagship-heading" style={{ color: theme.text }}>
          {flagshipProjects.title}
        </h1>
        <p className="subTitle flagship-subtitle" style={{ color: theme.secondaryText }}>
          {flagshipProjects.subtitle}
        </p>
        <div className="flagship-projects-main">
          <div className="flagship-project-grid">
            {flagshipProjects.projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="flagship-project-card"
                  onClick={() => openProjectInNewWindow(project.link)}
                >
                  <div className="flagship-image-container">
                    <img alt={project.projectName} src={require(`../../assets/images/${project.image}`)} />
                  </div>
                  <div className="flagship-content">
                    <h3 style={{ color: theme.text }}>{project.projectName}</h3>
                    <p style={{ color: theme.secondaryText }}>{project.projectDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
