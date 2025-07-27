import React, { Component } from "react";
import "./Testimonials.css";
import { Fade } from "../../components/Fade";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      isMobile: this.checkIfMobile(),
    };
  }

  checkIfMobile = () => {
    // Check multiple ways to ensure mobile detection works
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768 || window.screen.width <= 768;
    }
    return false;
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    // Check again after mount in case of SSR
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const isMobile = this.checkIfMobile();
    if (this.state.isMobile !== isMobile) {
      this.setState({ isMobile });
    }
  };

  handleTabClick = (index) => {
    this.setState({ activeTab: index });
  };

  render() {
    const { testimonials, theme } = this.props;
    const { activeTab } = this.state;
    const testimonialCount = testimonials.testimonials.length;
    const manyTestimonials = testimonialCount > 6;

    return (
      <div className="testimonials-main">
        <Fade bottom duration={1000} distance="40px">
          <div className="testimonials-header-div">
            <h1 className="testimonials-header" style={{ color: theme.text }}>
              {testimonials.title}
            </h1>
            <p
              className="testimonials-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {testimonials.subtitle}
            </p>
          </div>

          <div
            className={`testimonials-container ${manyTestimonials ? "always-show" : ""
              }`}
          >
            <div className="testimonials-tabs">
              {testimonials.testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`tab-button ${activeTab === index ? "active" : ""
                    }`}
                  onClick={() => this.handleTabClick(index)}
                  style={{
                    backgroundColor:
                      activeTab === index ? theme.highlight : theme.body,
                    color: activeTab === index ? theme.body : theme.text,
                    borderColor: theme.highlight,
                  }}
                >
                  {testimonial.name.split(" ")[0]}
                </button>
              ))}
            </div>

            <div className="testimonials-content">
              {testimonials.testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-tab-content ${activeTab === index ? "active" : ""
                    }`}
                >
                  <TestimonialCard testimonial={testimonial} theme={theme} />
                </div>
              ))}
            </div>
          </div>

          <div
            className={`testimonials-grid ${manyTestimonials ? "never-show" : ""
              }`}
          >
            {testimonials.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-grid-item">
                <TestimonialCard testimonial={testimonial} theme={theme} />
              </div>
            ))}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Testimonials;
