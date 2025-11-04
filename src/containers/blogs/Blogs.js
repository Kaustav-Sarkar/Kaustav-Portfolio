import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import { Fade } from "../../components/Fade";

export default function Blogs() {
  return (
    <Fade bottom distance="20px">
      <div className="blog-main-div">
        {blogSection.blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              blog={{
                url: blog.url,
                image: blog.image,
                title: blog.title,
                description: blog.description,
              }}
            />
          );
        })}
      </div>
    </Fade>
  );
}
