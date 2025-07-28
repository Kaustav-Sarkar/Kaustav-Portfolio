import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "../../../components/Fade";
import "./Error.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default class Error extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="error-main">
        <Helmet>
          <title>404 Page Not Found - Kaustav Sarkar</title>
          <meta name="description" content="The page you're looking for could not be found. Please return to the homepage to explore my portfolio." />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <Header theme={this.props.theme} />
        <div className="error-class">
          <Fade bottom duration={1000} distance="40px">
            <h1>Woops</h1>
            <h1 className="error-404">404</h1>
            <p>The requested page is unavailable at the moment!</p>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              Go Home
            </Link>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
