import React, { useEffect } from "react";

function ScrollTopBtn() {
  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  // sticky header function
  
  const handleStickyHeader = () => {
    const header = document.querySelector(".circle-container");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("active")
      : header.classList
      ? header.classList.remove("active")
      : header.classList.add("active");
  };
  return (
    <div
      className="circle-container"
      onClick={() => window.scrollTo({ top: 0, behavior:"smooth" })}
    >
    </div>
  );
}

export default ScrollTopBtn;