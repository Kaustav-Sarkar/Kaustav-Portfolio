import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Blogs from "../../containers/blogs/Blogs";
import BlogsImg from "../contact/BlogsImg";
import { blogSection } from "../../portfolio";
import { Fade } from "../../components/Fade";
import "./BlogComponent.css";

class BlogComponent extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="blogs-main">
        <Header theme={this.props.theme} />
        <div className="basic-blogs">
          <Fade bottom duration={1000} distance="40px">
            <div className="blogs-heading-div">
              <div className="blogs-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
              <div className="blogs-heading-text-div">
                <h1
                  className="blogs-heading-text"
                  style={{ color: theme.text }}
                >
                  {blogSection.title}
                </h1>
                <p
                  className="blogs-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection.subtitle}
                </p>
              </div>
            </div>
          </Fade>
          <Blogs theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default BlogComponent;
