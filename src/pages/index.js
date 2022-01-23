import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import CircleMouse from "../components/CircleMouse";
import CustomLink from "../components/CustomLink";
import LoadingScreen from "../components/LoadingScreen";
import Logo from "../components/Logo";
import Space from "../components/Space";
import "../styles/main.scss";
import { Controls } from "react-three-gui";

// markup
const IndexPage = () => {
  const circleRef = useRef();
  const sidebar = useRef();
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [moveInSpace, setMoveInSpace] = useState(false);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll(".link"));
    const cursor = document.querySelector(".circle-mouse");
    const cursorSmall = document.querySelector(".circle-mouse-small");

    const onMove = (e) => {
      circleRef.current.moveTo(e.clientX, e.clientY);
    };

    const enlargeCursor = () => {
      gsap.to(cursorSmall, {
        duration: 0.4,
        scale: 3,
        ease: "power2.easeIn",
      });
    };

    const normalizeCursor = () => {
      gsap.to(cursorSmall, {
        duration: 0.4,
        scale: 1,
        ease: "power2.easeOut",
      });
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", enlargeCursor, false);
    });
    links.forEach((link) => {
      link.addEventListener("mouseleave", normalizeCursor, false);
    });

    window.addEventListener("pointermove", onMove);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enlargeCursor, false);
      });
      links.forEach((link) => {
        link.removeEventListener("mouseleave", enlargeCursor, false);
      });
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    console.log("on est là");
    // gsap.from(sidebar, { duration: 0.4, y: -110, ease: "power2.easeOut" });
  }, [moveInSpace]);

  return (
    <>
      {/* <Space setMoveInSpace={setMoveInSpace} moveInSpace={moveInSpace} /> */}
      {showLoadingScreen && (
        <LoadingScreen
          setMoveInSpace={setMoveInSpace}
          setShowLoadingScreen={setShowLoadingScreen}
        />
      )}
      <div className="app">
        <header className="header">
          <CustomLink to="/">
            <Logo />
          </CustomLink>
          <ul className="header-menu">
            <li>
              <CustomLink to="/" content="About" />
            </li>
            <li>
              <CustomLink to="/" content="Projets" />
            </li>
            <li>
              <CustomLink to="/" content="Contact" />
            </li>
          </ul>
        </header>
        <sidebar ref={sidebar} className="header-sidebar">
          <CustomLink customClass="start" to="/" content="Start a project" />
        </sidebar>
        <section className="section-hero main-hero">
          <div className="section-content grid">
            <div className="content-left">
              <h1 className="title big">
                Développeur
                <br />
                front-end
              </h1>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </div>
            <div className="content-right">
              <div className="item link"></div>
              <div className="item link"></div>
              <div className="item link"></div>
            </div>
          </div>
        </section>
      </div>
      <CircleMouse ref={circleRef} />
    </>
  );
};

export default IndexPage;
