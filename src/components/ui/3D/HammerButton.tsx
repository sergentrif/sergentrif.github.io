"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import {
  Group,
  Mesh,
  MeshBasicMaterial,
  Color,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
} from "three";

interface HammerButtonProps {
  position?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
  className?: string;
  onClick?: () => void;
  wireframe?: boolean;
}

export function HammerModel({
  position,
  scale,
  autoRotate,
  onClick,
  wireframe = false,
}: Omit<HammerButtonProps, "className">) {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/hammer-button-animated.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName]?.play();
      });
    }
  }, [actions]);

  useEffect(() => {
    if (scene) {
      const basicMaterial = new MeshBasicMaterial({
        color: new Color(0xf7f7f2),
        transparent: true,
        opacity: 0.2,
        wireframe: wireframe,
      });

      const outlineMaterial = new LineBasicMaterial({
        color: new Color(0x4d5e7c), // White outline
        linewidth: 4,
      });

      scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.material = basicMaterial;

          // Add white outline
          const edges = new EdgesGeometry(child.geometry);
          const outline = new LineSegments(edges, outlineMaterial);
          child.add(outline);
        }
      });
    }
  }, [scene, wireframe]);

  useFrame((state) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group} position={position} scale={scale} onClick={onClick}>
      <primitive object={scene} />
    </group>
  );
}

export function HammerButton({
  position = [0, 0, 0],
  scale = 1,
  autoRotate = false,
  className = "",
  onClick,
  wireframe = false,
}: HammerButtonProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <HammerModel
          position={position}
          scale={scale}
          autoRotate={autoRotate}
          onClick={onClick}
          wireframe={wireframe}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/hammer-button-animated.glb");
