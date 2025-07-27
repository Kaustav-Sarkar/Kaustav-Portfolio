import React, { Component } from "react";
import "./TestimonialCard.css";

class TestimonialCard extends Component {
  render() {
    const { testimonial, theme } = this.props;

    return (
      <div
        className="testimonial-card"
        style={{ backgroundColor: theme.highlight }}
      >
        <div className="testimonial-quote-icon" style={{ color: theme.text }}>
          "
        </div>
        <div className="testimonial-content">
          <p className="testimonial-text" style={{ color: theme.text }}>
            {testimonial.text}
          </p>
        </div>
        <div className="testimonial-author">
          <div className="testimonial-avatar">
            <div
              className="avatar-placeholder"
              style={{ backgroundColor: theme.body, color: theme.text }}
            >
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div className="testimonial-info">
            {testimonial.linkedin ? (
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-linkedin-link"
                style={{ textDecoration: "none" }}
              >
                <h3
                  className="testimonial-name testimonial-name-clickable"
                  style={{ color: theme.text }}
                >
                  @ {testimonial.name}
                  <span className="linkedin-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ marginLeft: "6px", verticalAlign: "middle" }}
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </span>
                </h3>
              </a>
            ) : (
              <h3 className="testimonial-name" style={{ color: theme.text }}>
                @ {testimonial.name}
              </h3>
            )}
            <p
              className="testimonial-role"
              style={{ color: theme.secondaryText }}
            >
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialCard;
