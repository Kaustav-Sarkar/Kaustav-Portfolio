import React from "react";
import { Fade } from "../Fade";
import ToggleSwitch from "./ToggleSwitch";
import "./Footer.css";

export default function Footer(props) {
  return (
    <Fade bottom duration={1000} distance="20px">
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-copyright">
            © 2025 Kaustav Sarkar. MIT License.
          </div>
          <ToggleSwitch theme={props.theme} onToggle={props.onToggle} />
        </div>
      </footer>
    </Fade>
  );
}
