import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

function NeuralWeb() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 300;
  
  // Create nodes with random positions
  const nodes = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push(new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }
    return data;
  }, []);

  // Filter pairs that are close together for lines
  const lines = useMemo(() => {
    const pairs = [];
    const maxDist = 2.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          pairs.push(nodes[i], nodes[j]);
        }
      }
    }
    return pairs;
  }, [nodes]);

  const positions = useMemo(() => {
    const pos = new Float32Array(nodes.length * 3);
    nodes.forEach((node, i) => {
      pos[i * 3] = node.x;
      pos[i * 3 + 1] = node.y;
      pos[i * 3 + 2] = node.z;
    });
    return pos;
  }, [nodes]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.mouse;
    
    // Smooth cinematic camera drift and interaction
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, (x * Math.PI) / 8 + t * 0.02, 0.05);
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, (y * -Math.PI) / 8 + Math.sin(t * 0.1) * 0.05, 0.05);
  });

  return (
    <group ref={pointsRef as any}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366F1"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Dynamic Network Connections */}
      <group>
        {lines.map((_, i) => i % 2 === 0 && (
          <Line
            key={i}
            points={[lines[i] as any, lines[i+1] as any]}
            color="#6366F1"
            lineWidth={0.5}
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
          />
        ))}
      </group>
    </group>
  );
}

export default function NeuralScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-obsidian">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={['#020617']} />
        <fog attach="fog" args={['#020617', 5, 20]} />
        <NeuralWeb />
        
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.1} 
            mipmapBlur 
            intensity={2} 
            radius={0.6}
          />
          <Noise opacity={0.05} />
          <Vignette offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(2,6,23,0.9)_100%)] pointer-events-none" />
    </div>
  );
}
