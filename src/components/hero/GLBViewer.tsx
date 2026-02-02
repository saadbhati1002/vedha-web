import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface GLBModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
}

function Model({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], autoRotate = false }: GLBModelProps) {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<THREE.Group>(null);

  React.useEffect(() => {
    console.log('GLB Model loaded:', modelPath);
  }, [modelPath]);

  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

interface GLBViewerProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
}

const GLBViewer: React.FC<GLBViewerProps> = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  cameraPosition = [0, 0, 5],
  enableControls = false,
}) => {
  React.useEffect(() => {
    console.log('GLBViewer initialized with path:', modelPath);
  }, [modelPath]);

  return (
    <div style={{ width: '100%', height: '100%', background: 'transparent', position: 'relative' }}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: cameraPosition, fov: 50 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" wireframe />
          </mesh>
        }>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <directionalLight position={[-10, -10, -5]} intensity={0.6} />
          <pointLight position={[0, 10, 0]} intensity={0.8} />
          <Model
            modelPath={modelPath}
            scale={scale}
            position={position}
            rotation={rotation}
            autoRotate={autoRotate}
          />
          {enableControls && <OrbitControls enableZoom={false} enablePan={false} />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GLBViewer;
