import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "../Fade";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function GithubRepoCard({ repo, theme }) {
  const [isHovered, setIsHovered] = React.useState(false);

  function openRepoinNewTab(url) {
    if (url) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  // Check if project has any valid URLs
  const hasUrls = repo.url || repo.deploymentUrl;

  return (
    <div
      className="repo-card-div"
      style={{ backgroundColor: theme.highlight }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Fade bottom duration={1000} distance="40px">
        <div key={repo.id}>
          <div
            className={`repo-name-div ${!hasUrls ? "no-links" : ""}`}
            onClick={() =>
              hasUrls && openRepoinNewTab(repo.deploymentUrl || repo.url)
            }
          >
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
              style={{ fill: theme.text }}
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p
              className={`repo-name ${hasUrls ? "" : "no-hover-underline"}`}
              style={{ color: theme.text }}
            >
              {repo.name}
            </p>
          </div>
          <p
            className={`repo-description ${isHovered ? "expanded" : ""}`}
            style={{ color: theme.secondaryText }}
          >
            {repo.description}
          </p>
          <div className="repo-details">
            <div>
              <ProjectLanguages logos={repo.languages} />
            </div>
            <div className="repo-links">
              {repo.url && (
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link-icon"
                  style={{ backgroundColor: theme.dark }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                </a>
              )}
              {repo.deploymentUrl && (
                <a
                  href={repo.deploymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link-icon"
                  style={{ backgroundColor: theme.primary }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGlobe />
                </a>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
