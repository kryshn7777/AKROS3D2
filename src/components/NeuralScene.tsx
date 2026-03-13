import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';

function NeuralWeb() {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate a procedural neural web structure
  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return pos;
  }, []);


  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.mouse;
    
    // Smoothly interpolate rotation based on mouse position
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (x * Math.PI) / 10 + t * 0.05, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (y * -Math.PI) / 10 + Math.sin(t * 0.02) * 0.1, 0.05);
  });


  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366F1"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function NeuralScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-obsidian">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.5} />
        <NeuralWeb />
        <EffectComposer>

          <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur 
            intensity={1.5} 
            radius={0.4}
          />
        </EffectComposer>
      </Canvas>
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(2,6,23,0.8)_100%)] pointer-events-none" />
    </div>
  );
}
