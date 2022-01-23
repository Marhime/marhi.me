import gsap from "gsap/all";
import React, { useEffect } from "react";

const Loadgo = ({ moveInSpace, setMoveInSpace }) => {
  useEffect(() => {
    gsap.set(".loadgo .logo-letter-stroke", { y: 80 });
    const tl = gsap.timeline();
    tl.to(".loadgo .logo-letter-stroke", {
      duration: 1.2,
      y: 0,
      ease: "power2.easeOut",
    })
      .to(".loadgo .logo-letter-fill span", {
        duration: 2,
        backgroundPositionY: 0,
        ease: "power2.easeOut",
      })
      .to(".loadgo .logo-letter-fill", {
        duration: 0.4,
        y: 0,
        ease: "power2.easeOut",
      })
      .to(".loadgo .logo-letter-fill", {
        duration: 1,
        opacity: 0,
        ease: "power2.easeOut",
        delay: 1,
        onComplete: () => setMoveInSpace(true),
      })
      .to(
        ".loadgo .logo-letter-stroke",
        {
          duration: 1,
          opacity: 0,
          ease: "power2.easeOut",
          onComplete: () => setMoveInSpace(true),
        },
        "-=1"
      );
  }, []);

  return (
    <div className="logo loadgo">
      <div className="logo-clip"></div>
      <div className="logo-letter-stroke">
        <span>m</span>
        <span>a</span>
        <span>r</span>
        <span>h</span>
        <span>i</span>
        <span>m</span>
        <span>e</span>
        <span className="stroke-point">.</span>
      </div>
      <div className="logo-letter-fill">
        <span>m</span>
        <span>a</span>
        <span>r</span>
        <span>h</span>
        <span>i</span>
        <span>m</span>
        <span>e</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default Loadgo;
