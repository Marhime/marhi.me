import gsap from "gsap/all";
import React, { useEffect, useRef } from "react";
import Loadgo from "./Loadgo";

const LoadingScreen = ({ setShowLoadingScreen, setMoveInSpace }) => {
  const topCurtain = useRef(null);
  const bottomCurtain = useRef(null);

  useEffect(() => {
    gsap.to(bottomCurtain.current, {
      duration: 4,
      height: 0,
      ease: "power2.easeOut",
      delay: 6,
    });
    gsap.to(topCurtain.current, {
      duration: 4,
      height: 0,
      ease: "power2.easeOut",
      delay: 6,

      onComplete: () => setShowLoadingScreen(),
    });
  }, []);

  return (
    <div className="loading-screen">
      <Loadgo setMoveInSpace={setMoveInSpace} />
      <div ref={topCurtain} className="top-curtain"></div>
      <div ref={bottomCurtain} className="bottom-curtain"></div>
    </div>
  );
};

export default LoadingScreen;
