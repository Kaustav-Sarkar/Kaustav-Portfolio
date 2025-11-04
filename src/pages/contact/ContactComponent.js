import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import ContactForm from "../../components/contactForm/ContactForm";
import BlogsImg from "./BlogsImg";
import Testimonials from "../../containers/testimonials/Testimonials";
import { Fade } from "../../components/Fade";
import "./ContactComponent.css";
import { greeting, contactPageData, testimonials } from "../../portfolio.js";
import featureFlags from "../../featureFlags";
import { Helmet } from "react-helmet";
import EarthCanvas from "../../components/canvas/EarthCanvas";
import { preloadPageSvgs, clearRegistry } from "../../utils/svgCache";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

class Contact extends Component {
  componentDidMount() {
    preloadPageSvgs();
  }

  componentWillUnmount() {
    clearRegistry();
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Helmet>
          <title>Contact - Kaustav Sarkar | Get in Touch</title>
          <meta name="description" content="Contact Kaustav Sarkar for backend engineering opportunities, collaborations, or technical discussions. Connect via LinkedIn, GitHub, email, or the contact form." />
          <meta property="og:title" content="Contact - Kaustav Sarkar" />
          <meta property="og:description" content="Get in touch with Kaustav Sarkar for backend engineering opportunities and collaborations." />
          <link rel="canonical" href="https://kaustavsarkar.dev/contact" />
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
                "name": "Contact"
              }]
            })}
          </script>
        </Helmet>
        <Header theme={theme} />
        <div className="basic-contact">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <picture>
                <source
                  srcSet="/images/kaustav300.webp 300w,
                          /images/kaustav600.webp 600w,
                          /images/kaustav900.webp 900w"
                  sizes="(max-width: 768px) 200px, 300px"
                  type="image/webp"
                />
                <img
                  src="/images/kaustav.jpeg"
                  alt="Kaustav Sarkar - Senior Backend Engineer"
                  loading="eager"
                  fetchpriority="high"
                  width="300"
                  height="300"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
          <Fade bottom distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>
          {featureFlags.sections.testimonials && (
            <Testimonials testimonials={testimonials} theme={theme} />
          )}
          <Fade bottom distance="40px">
            <div className="contact-form-section">
              <div className="contact-form-with-earth">
                <ContactForm theme={theme} />
                <div className="earth-animation-container">
                  <EarthCanvas />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
