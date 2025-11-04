import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import ExperienceImg from "./ExperienceImg";
import featureFlags from "../../featureFlags";
import { Helmet } from "react-helmet";
import { preloadPageSvgs, clearRegistry } from "../../utils/svgCache";

class Experience extends Component {
  componentDidMount() {
    preloadPageSvgs();
  }

  componentWillUnmount() {
    clearRegistry();
  }

  render() {
    const theme = this.props.theme;

    // Filter sections based on feature flags
    const sectionTypeMap = {
      Work: "work",
      Internships: "internships",
      Volunteerships: "volunteerships",
      Clubs: "clubs",
    };

    const filteredSections = experience.sections.filter((section) => {
      const flagKey = sectionTypeMap[section.title];
      return flagKey ? featureFlags.experienceSections[flagKey] : true;
    });

    return (
      <div className="experience-main">
        <Helmet>
          <title>Professional Experience - Kaustav Sarkar | Backend Engineer</title>
          <meta name="description" content="Explore Kaustav Sarkar's professional experience as a Senior Backend Engineer at Cloudera and previous roles. Specializing in Java, Go, Kubernetes, and distributed systems." />
          <meta property="og:title" content="Professional Experience - Kaustav Sarkar" />
          <meta property="og:description" content="Senior Backend Engineer at Cloudera with expertise in cloud infrastructure and distributed systems." />
          <link rel="canonical" href="https://kaustavsarkar.dev/experience" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kaustavsarkar.dev/"
              }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Experience"
              }]
            })}
          </script>
        </Helmet>
        <Header theme={theme} />
        <div className="basic-experience">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </div>
        <ExperienceAccordion sections={filteredSections} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
