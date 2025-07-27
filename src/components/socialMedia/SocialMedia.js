import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaGoogle, FaKaggle, FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const iconMapping = {
  "fa-github": FaGithub,
  "fa-linkedin-in": FaLinkedinIn,
  "fa-kaggle": FaKaggle,
  "fa-google": FaGoogle,
  "fa-twitter": FaTwitter,
  "fa-instagram": FaInstagram,
  "fa-youtube": FaYoutube,
  "fa-facebook": FaFacebook
};

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        const IconComponent = iconMapping[media.fontAwesomeIcon];
        if (!IconComponent) return null;

        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i style={{ backgroundColor: media.backgroundColor }}>
                <IconComponent />
              </i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
