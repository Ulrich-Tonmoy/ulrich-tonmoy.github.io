import { useGLTF } from "@react-three/drei";

export const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return <primitive object={earth.scene} scale={1.5} position={[0, 3, -8]} />;
};
