"use client";

import { useRef, useState } from "react";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { ROLAND_GP9, rolandTextureUrl } from "@/lib/gp9-assets";

type HotspotId = "lid" | "keys" | "speakers" | null;

interface PianoSceneProps {
  activeHotspot: HotspotId;
  onHotspot: (id: HotspotId) => void;
  lidOpen: number;
}

function PianoModel({ activeHotspot, onHotspot, lidOpen }: PianoSceneProps) {
  const bodyTexture = useTexture(`${ROLAND_GP9}/gp-9_hero.jpg`);
  const lidRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (lidRef.current) {
      lidRef.current.rotation.x = THREE.MathUtils.lerp(
        lidRef.current.rotation.x,
        -lidOpen * 0.55,
        delta * 4
      );
    }
  });

  const ebony = "#1a1a1a";
  const ivory = "#f0ebe3";
  const gold = "#c9a962";

  return (
    <group position={[0, -0.6, 0]}>
      {/* Cabinet base */}
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.7, 1.6]} />
        <meshStandardMaterial color={ebony} roughness={0.35} metalness={0.15} />
      </mesh>

      {/* Textured fallboard / music rest area */}
      <mesh position={[0, 0.85, -0.15]} rotation={[-0.15, 0, 0]}>
        <planeGeometry args={[2.4, 0.9]} />
        <meshStandardMaterial map={bodyTexture} roughness={0.4} />
      </mesh>

      {/* Keyboard */}
      <mesh
        position={[0, 0.78, 0.35]}
        onClick={(e) => {
          e.stopPropagation();
          onHotspot(activeHotspot === "keys" ? null : "keys");
        }}
      >
        <boxGeometry args={[2.6, 0.06, 0.55]} />
        <meshStandardMaterial
          color={activeHotspot === "keys" ? gold : ivory}
          emissive={activeHotspot === "keys" ? gold : "#000000"}
          emissiveIntensity={activeHotspot === "keys" ? 0.25 : 0}
        />
      </mesh>

      {/* Lid group — hinged at back */}
      <group ref={lidRef} position={[0, 0.75, -0.55]}>
        <mesh
          position={[0, 0.12, 0.45]}
          onClick={(e) => {
            e.stopPropagation();
            onHotspot(activeHotspot === "lid" ? null : "lid");
          }}
        >
          <boxGeometry args={[3.1, 0.08, 1.5]} />
          <meshStandardMaterial
            color={activeHotspot === "lid" ? "#2a2a2a" : ebony}
            emissive={activeHotspot === "lid" ? gold : "#000000"}
            emissiveIntensity={activeHotspot === "lid" ? 0.2 : 0}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
      </group>

      {/* Speaker grille area (front curve suggestion) */}
      <mesh
        position={[0, 0.25, 0.82]}
        onClick={(e) => {
          e.stopPropagation();
          onHotspot(activeHotspot === "speakers" ? null : "speakers");
        }}
      >
        <boxGeometry args={[2.2, 0.35, 0.12]} />
        <meshStandardMaterial
          color="#111"
          emissive={activeHotspot === "speakers" ? "#4466aa" : "#000000"}
          emissiveIntensity={activeHotspot === "speakers" ? 0.35 : 0}
        />
      </mesh>

      {/* Legs */}
      {[
        [-1.2, -0.35, 0.5],
        [1.2, -0.35, 0.5],
        [-1.2, -0.35, -0.5],
        [1.2, -0.35, -0.5],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.06, 0.08, 0.5, 12]} />
          <meshStandardMaterial color={ebony} metalness={0.4} roughness={0.3} />
        </mesh>
      ))}

      {/* Hotspot labels */}
      {activeHotspot === "lid" && (
        <Html position={[0, 1.6, 0]} center>
          <div className="rounded-lg bg-black/80 px-3 py-2 text-xs text-white backdrop-blur-sm">
            Concert lid — adjustable height
          </div>
        </Html>
      )}
      {activeHotspot === "keys" && (
        <Html position={[0, 1.2, 0.6]} center>
          <div className="rounded-lg bg-black/80 px-3 py-2 text-xs text-white backdrop-blur-sm">
            Hybrid Grand keyboard · 88 keys
          </div>
        </Html>
      )}
      {activeHotspot === "speakers" && (
        <Html position={[0, 0.6, 1.1]} center>
          <div className="rounded-lg bg-black/80 px-3 py-2 text-xs text-white backdrop-blur-sm">
            Piano Reality Projection · 8 speakers
          </div>
        </Html>
      )}
    </group>
  );
}

const HOTSPOT_COPY: Record<Exclude<HotspotId, null>, { title: string; body: string }> = {
  lid: {
    title: "Adjustable lid",
    body: "Open to concert position for fuller projection — just like an acoustic grand.",
  },
  keys: {
    title: "Hybrid Grand keyboard",
    body: "Progressive hammer action, escapement, Ivory Feel, and haptic key vibration.",
  },
  speakers: {
    title: "Piano Reality Projection",
    body: "Eight speakers tuned to the cabinet for immersive, hall-scale sound.",
  },
};

export function PianoViewer() {
  const [activeHotspot, setActiveHotspot] = useState<HotspotId>(null);
  const [lidOpen, setLidOpen] = useState(0);

  const handleHotspot = (id: HotspotId) => {
    if (id === "lid") {
      const next = activeHotspot === "lid" ? null : "lid";
      setActiveHotspot(next);
      setLidOpen(next === "lid" ? 1 : 0);
      return;
    }
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  return (
    <div className="flex h-full min-h-[420px] flex-col">
      <div className="relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950">
        <Canvas
          camera={{ position: [0, 1.8, 4.5], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
          style={{ touchAction: "none" }}
        >
          <color attach="background" args={["#0a0a0a"]} />
          <ambientLight intensity={0.45} />
          <directionalLight position={[4, 6, 3]} intensity={1.2} castShadow />
          <directionalLight position={[-3, 2, -2]} intensity={0.35} />
          <pointLight position={[0, 2, 2]} intensity={0.5} color="#c9a962" />

          <Suspense fallback={null}>
            <PianoModel
              activeHotspot={activeHotspot}
              onHotspot={handleHotspot}
              lidOpen={lidOpen}
            />
          </Suspense>

          <OrbitControls
            enablePan={false}
            minDistance={3}
            maxDistance={7}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.1}
            autoRotate={!activeHotspot}
            autoRotateSpeed={0.4}
          />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.65, 0]} receiveShadow>
            <planeGeometry args={[12, 12]} />
            <meshStandardMaterial color="#050505" roughness={0.9} />
          </mesh>
        </Canvas>

        <div className="pointer-events-none absolute left-4 top-4">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">3D Explorer</p>
          <p className="mt-1 text-xs text-white/60">Drag to orbit · Click hotspots</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(["lid", "keys", "speakers"] as const).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => handleHotspot(id)}
            className={`cursor-target rounded-full border px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-all ${
              activeHotspot === id
                ? "border-white bg-white text-black"
                : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
            }`}
            data-cursor-target
          >
            {HOTSPOT_COPY[id].title}
          </button>
        ))}
      </div>

      {activeHotspot && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {HOTSPOT_COPY[activeHotspot].body}
        </p>
      )}
    </div>
  );
}
