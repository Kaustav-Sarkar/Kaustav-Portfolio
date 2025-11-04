import React, { useEffect, useRef } from "react";
import "./TopButton.css";
import { FaArrowUp } from "react-icons/fa";

export default function TopButton({ theme }) {
  const lastScrollTop = useRef(0);
  const scrollTimeout = useRef(null);

  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    function scrollFunction() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const button = document.getElementById("topButton");

      if (!button) return;

      clearTimeout(scrollTimeout.current);

      if (currentScrollTop > 300 && currentScrollTop < lastScrollTop.current && currentScrollTop > 50) {
        button.classList.add("visible");
      } else {
        button.classList.remove("visible");
      }

      scrollTimeout.current = setTimeout(() => {
        const currentPos = window.pageYOffset || document.documentElement.scrollTop;
        if (currentPos <= 50) {
          button.classList.remove("visible");
        }
      }, 2000);

      lastScrollTop.current = currentScrollTop;
    }

    window.addEventListener('scroll', scrollFunction, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollFunction);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  const onMouseEnter = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <button
      onClick={GoUpEvent}
      id="topButton"
      type="button"
      aria-label="Back to top"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <FaArrowUp id="arrow" aria-hidden="true" />
    </button>
  );
}
