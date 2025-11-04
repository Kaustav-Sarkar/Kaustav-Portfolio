import React, { useEffect, useRef, useState } from "react";
import "./Fade.css";

// Enhanced Fade component with actual animations
export const Fade = ({
  children,
  bottom = false,
  left = false,
  right = false,
  top = false,
  duration = 400,
  distance = "20px",
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsVisible(false);
      return;
    }

    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isMobile]);

  const getTransform = () => {
    if (bottom) return `translateY(${distance})`;
    if (top) return `translateY(-${distance})`;
    if (left) return `translateX(-${distance})`;
    if (right) return `translateX(${distance})`;
    return "none";
  };

  if (isMobile) {
    return <div {...props}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`fade-wrapper ${isVisible ? "fade-visible" : ""}`}
      style={{
        "--fade-transform": getTransform(),
        "--fade-duration": `${duration}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const Flip = ({ children, ...props }) => {
  return <Fade {...props}>{children}</Fade>;
};

export default Fade;
