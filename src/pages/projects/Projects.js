import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { Fade } from "../../components/Fade";
import { projectsHeader } from "../../portfolio.js";
import ProjectsImg from "./ProjectsImg";
import "./Projects.css";
import projects from "../../shared/opensource/projects.json";
import { Helmet } from "react-helmet";
import FlagshipProject from "../../containers/FlagshipProjects/FlagshipProject";
import featureFlags from "../../featureFlags";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Helmet>
          <title>Projects Portfolio - Kaustav Sarkar | Java, Go, Python Projects</title>
          <meta name="description" content="Explore Kaustav Sarkar's technical projects including Video Chat applications, Movie Recommendation systems, Audio Classification, and more. Built with Java, Go, Python, and modern technologies." />
          <meta property="og:title" content="Technical Projects - Kaustav Sarkar" />
          <meta property="og:description" content="Portfolio of backend and full-stack projects showcasing expertise in distributed systems, machine learning, and scalable applications." />
          <link rel="canonical" href="https://kaustav-sarkar.com/projects" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kaustav-sarkar.com/"
              }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects"
              }]
            })}
          </script>
        </Helmet>
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={1000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["descriptionLine2"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        
        {featureFlags.sections.flagshipProjects && (
          <FlagshipProject theme={theme} />
        )}
        
        <div className="repo-cards-div-main">
          {projects.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={projectsHeader.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
