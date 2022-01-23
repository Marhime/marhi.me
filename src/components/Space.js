import * as THREE from "three";
import React, { useMemo, useRef, useState, useEffect, forwardRef } from "react";
import { Stars, Text } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { withControls, useControl, Controls } from "react-three-gui";
import CameraControls from "camera-controls";

// Wrap the <Canvas> with `withControls`
const GuiCanvas = withControls(Canvas);

CameraControls.install({ THREE: THREE });

// function Controls({
//   zoom,
//   focus,
//   pos = new THREE.Vector3(),
//   look = new THREE.Vector3(),
// }) {
//   const camera = useThree((state) => state.camera);
//   const gl = useThree((state) => state.gl);
//   const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);
//   useFrame((state, delta) => {
//     zoom ? pos.set(focus.x, focus.y, focus.z - 3.25) : pos.set(0, 0, 5);
//     zoom ? look.set(focus.x, focus.y, focus.z - 0.1) : look.set(0, 0, 4);

//     state.camera.position.lerp(pos, 0.5);
//     state.camera.updateProjectionMatrix();

//     controls.setLookAt(
//       state.camera.position.x,
//       state.camera.position.y,
//       state.camera.position.z,
//       look.x,
//       look.y,
//       look.z,
//       true
//     );
//     controls.update(delta);
//   });
//   return null;
// }

const Object = forwardRef((props, ref) => {
  const objectsDistance = 4;

  // passing the ref to a DOM element,
  // so that the parent has a reference to the DOM node
  // useFrame(() => {
  //   if (zoom) {
  //   }
  // });

  return (
    <mesh ref={ref}>
      <meshNormalMaterial attach="material" color={"#8F4EF4"} />
      <torusGeometry
        attach="geometry"
        position={{ x: props.x, y: -objectsDistance * props.distance }}
        args={[1, 0.4, 16, 60]}
      />
    </mesh>
  );
});

const Space = ({ setMoveInSpace, moveInSpace }) => {
  const [focus, setFocus] = useState({});
  const object1 = useRef(null);
  const object2 = useRef(null);
  const object3 = useRef(null);
  const { viewport } = useThree();
  useEffect(() => {}, []);

  return (
    <div id="space">
      <GuiCanvas linear camera={{ position: [0, 0, 20] }}>
        {/* <ambientLight />
        <pointLight position={[10, 10, 10]} /> */}
        {/* <Object ref={object1} x={2} distance={0} />
        <Object ref={object2} x={-2} distance={1} />
        <Object ref={object3} x={2} distance={2} /> */}
        {/* {moveInSpace && focus ? (
          <Controls zoom={moveInSpace} focus={focus.current.position} />
        ) : null} */}
        {/* <Stars
          radius={200} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        /> */}
        {/* <Text
          color={"#d49312"}
          fontSize={20}
          maxWidth={(viewport.width / 100) * 87.5}
          lineHeight={1.26}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, -200]}
          rotation={[-10.275, 0, 0]}
        >
          La République Galactique est en pleine ébullition. La taxation des
          routes commerciales reliant les systèmes éloignés provoque la
          discorde. Pour régler la question, la cupide Fédération du Commerce et
          ses redoutables vaisseaux de guerre imposent un blocus à la petite
          planète Naboo. Face à ce dangereux engrenage, alors que le Congrès de
          la République s’enlise dans des débats sans fin, le Chancelier Suprême
          charge en secret deux Chevaliers Jedi, gardiens de la paix et de la
          justice dans la galaxie, de résoudre le conflit…
        </Text> */}
      </GuiCanvas>
    </div>
  );
};

export default Space;
