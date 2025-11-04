import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            {greeting.nickname && (
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
            )}
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>
            <SocialMedia theme={theme} />
            <div className="portfolio-repo-btn-div">
              <Button
                text="⭐ Star Me On Github"
                newTab={true}
                href={greeting.portfolio_repository}
                theme={theme}
                className="portfolio-repo-btn"
              />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <picture>
            <source
              media="(min-width: 769px)"
              srcSet="/images/home_setup2.webp"
              type="image/webp"
            />
            <img
              alt="Kaustav Sarkar's developer workspace with multiple monitors and coding setup"
              className="greeting-image"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
