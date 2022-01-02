import React, { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap/all";

const CircleMouse = forwardRef((props, ref) => {
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y });
        },
      };
    },
    []
  );

  return (
    <div className="circle-mouse" ref={el}>
      <div className="circle-mouse-small"></div>
    </div>
  );
});

export default CircleMouse;
