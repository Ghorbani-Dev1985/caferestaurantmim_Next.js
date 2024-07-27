"use client";

import { useEffect, useState } from "react";
import { HiOutlineChevronUp } from "react-icons/hi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [isVisible]);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      className={`fixed z-50 bg-primary animate-bounce text-white border-2 border-white border-dotted bottom-4 left-4 rounded-lg p-2 outline-none transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <HiOutlineChevronUp className="size-7" />
    </button>
  );
};

export default ScrollToTopButton;
