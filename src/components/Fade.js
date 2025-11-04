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
  const ref = useRef(null);

  useEffect(() => {
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
  }, []);

  const getTransform = () => {
    if (bottom) return `translateY(${distance})`;
    if (top) return `translateY(-${distance})`;
    if (left) return `translateX(-${distance})`;
    if (right) return `translateX(${distance})`;
    return "none";
  };

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
