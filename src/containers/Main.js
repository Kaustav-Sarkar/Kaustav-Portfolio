import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import WorkInProgress from "../pages/workInProgress/WorkInProgress";
import featureFlags from "../featureFlags";
import Splash from "../pages/splash/Splash";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import BlogComponent from "../pages/blogs/BlogComponent";

export default function Main(props) {
  const { theme, onToggle } = props;
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            settings.isSplash ? (
              <Splash theme={theme} />
            ) : (
              <Home theme={theme} onToggle={onToggle} />
            )
          }
        />
        <Route path="/home" element={<Home theme={theme} onToggle={onToggle} />} />
        <Route path="/experience" element={<Experience theme={theme} onToggle={onToggle} />} />
        <Route path="/education" element={<Education theme={theme} onToggle={onToggle} />} />

        {featureFlags.sections.blogs && (
          <Route path="/blogs" element={<BlogComponent theme={theme} onToggle={onToggle} />} />
        )}
        {!featureFlags.sections.blogs && (
          <Route
            path="/blogs"
            element={<WorkInProgress theme={theme} onToggle={onToggle} />}
          />
        )}

        <Route
          path="/contact"
          element={<Contact theme={theme} onToggle={onToggle} />}
        />

        {settings.isSplash && (
          <Route path="/splash" element={<Splash theme={theme} />} />
        )}

        <Route path="/projects" element={<Projects theme={theme} onToggle={onToggle} />} />
        <Route
          path="*"
          element={<Error404 theme={theme} onToggle={onToggle} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
