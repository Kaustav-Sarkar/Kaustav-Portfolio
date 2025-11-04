import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import WorkInProgress from "../pages/workInProgress/WorkInProgress";
import featureFlags from "../featureFlags";
import { PageTransition } from "../components/pageTransition/PageTransition";

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
            <PageTransition>
              {settings.isSplash ? (
                <Suspense fallback={<div />}>
                  <Splash theme={theme} />
                </Suspense>
              ) : (
                <Suspense fallback={<div />}>
                  <Home theme={theme} onToggle={onToggle} />
                </Suspense>
              )}
            </PageTransition>
          }
        />
        <Route path="/home" element={
          <PageTransition>
            <Suspense fallback={<div />}>
              <Home theme={theme} onToggle={onToggle} />
            </Suspense>
          </PageTransition>
        } />
        <Route path="/experience" element={
          <PageTransition>
            <Suspense fallback={<div />}>
              <Experience theme={theme} onToggle={onToggle} />
            </Suspense>
          </PageTransition>
        } />
        <Route path="/education" element={
          <PageTransition>
            <Suspense fallback={<div />}>
              <Education theme={theme} onToggle={onToggle} />
            </Suspense>
          </PageTransition>
        } />

        {featureFlags.sections.blogs && (
          <Route path="/blogs" element={
            <PageTransition>
              <Suspense fallback={<div />}>
                <BlogComponent theme={theme} onToggle={onToggle} />
              </Suspense>
            </PageTransition>
          } />
        )}
        {!featureFlags.sections.blogs && (
          <Route
            path="/blogs"
            element={
              <PageTransition>
                <WorkInProgress theme={theme} onToggle={onToggle} />
              </PageTransition>
            }
          />
        )}

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Suspense fallback={<div />}>
                <Contact theme={theme} onToggle={onToggle} />
              </Suspense>
            </PageTransition>
          }
        />

        {settings.isSplash && (
          <Route path="/splash" element={
            <PageTransition>
              <Suspense fallback={<div />}>
                <Splash theme={theme} />
              </Suspense>
            </PageTransition>
          } />
        )}

        <Route path="/projects" element={
          <PageTransition>
            <Suspense fallback={<div />}>
              <Projects theme={theme} onToggle={onToggle} />
            </Suspense>
          </PageTransition>
        } />
        <Route
          path="*"
          element={
            <PageTransition>
              <Error404 theme={theme} onToggle={onToggle} />
            </PageTransition>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
