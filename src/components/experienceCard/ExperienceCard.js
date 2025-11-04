import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "../Fade";

class ExperienceCard extends Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.stepperRef = React.createRef();
    this.state = {
      lineHeight: 0
    };
    this.observer = null;
  }

  componentDidMount() {
    if (window.innerWidth <= 768) return;

    setTimeout(() => {
      this.calculateLineHeight();
    }, 500);

    this.setupAccordionObserver();

    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps) {
    if (window.innerWidth <= 768) return;

    if (prevProps.experience.description !== this.props.experience.description) {
      setTimeout(() => {
        this.calculateLineHeight();
      }, 500);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupAccordionObserver = () => {
    if (window.innerWidth <= 768) return;

    const findAccordionPanel = (element) => {
      let current = element;
      while (current && current.parentElement) {
        if (current.getAttribute('data-baseweb') === 'panel') {
          return current;
        }
        current = current.parentElement;
      }
      return null;
    };

    if (this.cardRef.current) {
      const accordionPanel = findAccordionPanel(this.cardRef.current);

      if (accordionPanel) {
        // Create observer to watch for attribute changes
        this.observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' &&
              (mutation.attributeName === 'aria-expanded' ||
                mutation.attributeName === 'style')) {
              // Accordion state changed, recalculate after animation
              setTimeout(() => {
                this.calculateLineHeight();
              }, 500);
            }
          });
        });

        // Start observing
        this.observer.observe(accordionPanel, {
          attributes: true,
          attributeFilter: ['aria-expanded', 'style']
        });
      }
    }
  };

  handleResize = () => {
    if (window.innerWidth <= 768) return;

    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.calculateLineHeight();
    }, 200);
  };

  calculateLineHeight = () => {
    const { index, totalCards } = this.props;
    if (index < totalCards - 1 && this.cardRef.current && this.stepperRef.current) {
      // Use requestAnimationFrame to ensure layout is complete
      requestAnimationFrame(() => {
        // Get current stepper position
        const currentStepper = this.stepperRef.current;
        const currentDot = currentStepper.querySelector('.experience-stepper-dot');

        if (!currentDot) return;

        const currentDotRect = currentDot.getBoundingClientRect();

        // Get the parent container to find the next card
        const parentContainer = this.cardRef.current.parentElement;
        if (parentContainer) {
          const allCards = parentContainer.querySelectorAll('.experience-list-item');
          const nextCard = allCards[index + 1];

          if (nextCard) {
            const nextStepper = nextCard.querySelector('.experience-card-stepper');
            if (nextStepper) {
              const nextDot = nextStepper.querySelector('.experience-stepper-dot');
              if (nextDot) {
                const nextDotRect = nextDot.getBoundingClientRect();

                // Calculate the exact distance from bottom of current dot to top of next dot
                const distance = nextDotRect.top - currentDotRect.bottom;

                // Only set line height if distance is positive
                if (distance > 0) {
                  this.setState({ lineHeight: distance });
                }
              }
            }
          }
        }
      });
    }
  };

  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    const { lineHeight } = this.state;

    return (
      <div
        ref={this.cardRef}
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 30 : 50 }}
      >
        <Fade left duration={1000} distance="40px">
          <div className="experience-card-logo-div">
            <a
              href={experience["company_url"]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              {experience["logo_icon"] ? (
                <div className="experience-card-logo experience-card-icon">
                  <span
                    className="iconify"
                    data-icon={experience["logo_icon"]}
                    data-inline="false"
                  ></span>
                </div>
              ) : (
                <img
                  className="experience-card-logo"
                  src={require(`../../assets/images/${experience["logo_path"]}`)}
                  alt={`${experience["company"]} logo`}
                />
              )}
            </a>
          </div>
        </Fade>
        <div className="experience-card-stepper" ref={this.stepperRef}>
          <div
            className="experience-stepper-dot"
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: '50%',
              zIndex: 100,
              position: 'relative',
              opacity: 1,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
          {index !== totalCards - 1 && lineHeight > 0 && (
            <div
              className="experience-stepper-line"
              style={{
                height: lineHeight,
                width: 2,
                backgroundColor: `${theme.headerColor}`,
                position: "absolute",
                top: 20, // Start exactly at bottom of dot
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 50, // Behind the dots
                transition: "height 0.3s ease",
              }}
            />
          )}
        </div>
        <Fade right duration={1000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="experience-card"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.primary }}
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="experience-card-description"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  whiteSpace: "pre-line",
                  color: theme.text,
                }}
              >
                {experience["description"]}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
