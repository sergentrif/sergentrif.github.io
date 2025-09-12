import { HammerModel } from "./HammerButton";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Canvas3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 13] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <HammerModel />
    </Canvas>
  );
};

export default Canvas3D;
