import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { certifications, degrees } from "../../portfolio";
import { Fade } from "../../components/Fade";
import featureFlags from "../../featureFlags";
import { Helmet } from "react-helmet";
import { preloadPageSvgs, clearRegistry } from "../../utils/svgCache";

class EducationComponent extends Component {
  componentDidMount() {
    preloadPageSvgs();
  }

  componentWillUnmount() {
    clearRegistry();
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Helmet>
          <title>Education & Certifications - Kaustav Sarkar | B.Tech Computer Science</title>
          <meta name="description" content="Kaustav Sarkar's educational background from Manipal Institute of Technology and professional certifications in cloud computing, distributed systems, and software engineering." />
          <meta property="og:title" content="Education & Certifications - Kaustav Sarkar" />
          <meta property="og:description" content="B.Tech in Computer Science from Manipal Institute of Technology with certifications in modern backend technologies." />
          <link rel="canonical" href="https://kaustavsarkar.dev/education" />
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
                "name": "Education"
              }]
            })}
          </script>
        </Helmet>
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={1000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  {degrees.title}
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  {degrees.subtitle}
                </h3>
                <p
                  className="heading-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {degrees.description}
                </p>
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 && featureFlags.sections.certifications ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default EducationComponent;
