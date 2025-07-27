import React from "react";
import "./TopButton.css";
import { FaArrowUp } from "react-icons/fa";

export default function TopButton({ theme }) {
  let lastScrollTop = 0;
  let scrollTimeout = null;

  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const button = document.getElementById("topButton");

    if (!button) return;

    // Clear any existing timeout
    clearTimeout(scrollTimeout);

    // Only show button if:
    // 1. User has scrolled down more than 300px
    // 2. User is scrolling up
    // 3. Not at the very top
    if (currentScrollTop > 300 && currentScrollTop < lastScrollTop && currentScrollTop > 50) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }

    // Hide button after user stops scrolling for 2 seconds
    scrollTimeout = setTimeout(() => {
      if (currentScrollTop <= 50) {
        button.classList.remove("visible");
      }
    }, 2000);

    lastScrollTop = currentScrollTop;
  }

  window.onscroll = function () {
    scrollFunction();
  };

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
