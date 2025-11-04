import React, { Component } from "react";
import { Fade } from "../../components/Fade";
import "./WorkInProgress.css";
import { Link } from "react-router-dom";

class WorkInProgress extends Component {
  componentDidMount() {
    this.updateViewportHeight();
    window.addEventListener('resize', this.updateViewportHeight);
    window.addEventListener('orientationchange', this.updateViewportHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportHeight);
    window.removeEventListener('orientationchange', this.updateViewportHeight);
  }

  updateViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="work-in-progress-main">
        <Fade bottom distance="40px">
          <div className="work-in-progress-content">
            <div className="wip-image-container">
              <img
                src={require("../../assets/images/work_in_progress.webp")}
                alt="Page under construction - work in progress illustration"
                className="wip-image"
              />
              <div className="wip-animation-circles">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <p className="wip-subtitle" style={{ color: theme.secondaryText }}>
              This feature is currently under construction. I'm working hard to
              bring you something amazing!
            </p>

            <div className="wip-progress-bar">
              <div className="wip-progress-fill"></div>
            </div>

            <p className="wip-message" style={{ color: theme.secondaryText }}>
              Check back soon for updates, or explore other sections of my
              portfolio.
            </p>

            <div className="wip-actions">
              <Link
                to="/home"
                className="wip-button-primary"
                style={{
                  backgroundColor: theme.primary,
                  color: theme.body,
                }}
              >
                Go to Home
              </Link>
              <Link
                to="/projects"
                className="wip-button-secondary"
                style={{
                  border: `2px solid ${theme.primary}`,
                  color: theme.primary,
                }}
              >
                View Projects
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default WorkInProgress;
