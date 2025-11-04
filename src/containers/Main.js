import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import WorkInProgress from "../pages/workInProgress/WorkInProgress";
import featureFlags from "../featureFlags";

const Splash = React.lazy(() => import("../pages/splash/Splash"));
const Home = React.lazy(() => import("../pages/home/HomeComponent"));
const Education = React.lazy(() => import("../pages/education/EducationComponent"));
const Experience = React.lazy(() => import("../pages/experience/Experience"));
const Contact = React.lazy(() => import("../pages/contact/ContactComponent"));
const Projects = React.lazy(() => import("../pages/projects/Projects"));
const BlogComponent = React.lazy(() => import("../pages/blogs/BlogComponent"));

export default function Main(props) {
  const { theme, onToggle } = props;
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            settings.isSplash ? (
              <Suspense fallback={<div />}>
                <Splash theme={theme} />
              </Suspense>
            ) : (
              <Suspense fallback={<div />}>
                <Home theme={theme} onToggle={onToggle} />
              </Suspense>
            )
          }
        />
        <Route path="/home" element={
          <Suspense fallback={<div />}>
            <Home theme={theme} onToggle={onToggle} />
          </Suspense>
        } />
        <Route path="/experience" element={
          <Suspense fallback={<div />}>
            <Experience theme={theme} onToggle={onToggle} />
          </Suspense>
        } />
        <Route path="/education" element={
          <Suspense fallback={<div />}>
            <Education theme={theme} onToggle={onToggle} />
          </Suspense>
        } />

        {featureFlags.sections.blogs && (
          <Route path="/blogs" element={
            <Suspense fallback={<div />}>
              <BlogComponent theme={theme} onToggle={onToggle} />
            </Suspense>
          } />
        )}
        {!featureFlags.sections.blogs && (
          <Route
            path="/blogs"
            element={<WorkInProgress theme={theme} onToggle={onToggle} />}
          />
        )}

        <Route
          path="/contact"
          element={
            <Suspense fallback={<div />}>
              <Contact theme={theme} onToggle={onToggle} />
            </Suspense>
          }
        />

        {settings.isSplash && (
          <Route path="/splash" element={
            <Suspense fallback={<div />}>
              <Splash theme={theme} />
            </Suspense>
          } />
        )}

        <Route path="/projects" element={
          <Suspense fallback={<div />}>
            <Projects theme={theme} onToggle={onToggle} />
          </Suspense>
        } />
        <Route
          path="*"
          element={<Error404 theme={theme} onToggle={onToggle} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
