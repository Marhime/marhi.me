import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import gsap from "gsap/all";

const CustomLink = ({ to, content, children }) => {
  const linkRef = useRef(null);
  const enlargeCursor = () => {
    gsap.to(".circle-mouse-small", {
      duration: 0.4,
      scale: 3,
      ease: "power2.easeIn",
    });
  };

  const normalizeCursor = () => {
    gsap.to(".circle-mouse-small", {
      duration: 0.4,
      scale: 1,
      ease: "power2.easeOut",
    });
  };

  useEffect(() => {
    linkRef.current.addEventListener("mouseenter", enlargeCursor, false);

    linkRef.current.addEventListener("mouseleave", normalizeCursor, false);

    return () => {
      linkRef.current.removeEventListener("mouseenter", enlargeCursor, false);

      linkRef.current.removeEventListener("mouseleave", enlargeCursor, false);
    };
  }, []);
  return (
    <Link ref={linkRef} className="link bahouais" to={to}>
      {content ? content : children}
    </Link>
  );
};

export default CustomLink;
