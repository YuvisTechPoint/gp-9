"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCw } from "lucide-react";
import { SPINNER_FRAMES, SPINNER_FRAME_LABELS } from "@/lib/gp9-assets";
import { cn } from "@/lib/utils";

export function ProductSpinner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, index: 0 });
  const pixelsPerFrame = 48;

  const goToFrame = useCallback((index: number) => {
    const len = SPINNER_FRAMES.length;
    setFrameIndex(((index % len) + len) % len);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, index: frameIndex };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStart.current.x;
    const offset = Math.round(delta / pixelsPerFrame);
    goToFrame(dragStart.current.index - offset);
  };

  const handlePointerUp = () => setIsDragging(false);

  useEffect(() => {
    SPINNER_FRAMES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-square w-full select-none overflow-hidden rounded-2xl bg-secondary touch-none",
        isDragging ? "cursor-grabbing" : "cursor-grab"
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      role="img"
      aria-label={`GP-9 product view: ${SPINNER_FRAME_LABELS[frameIndex]}. Drag to rotate.`}
    >
      {SPINNER_FRAMES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className="object-contain p-4 transition-opacity duration-150"
          style={{ opacity: i === frameIndex ? 1 : 0 }}
          draggable={false}
          priority={i === 0}
        />
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">360° View</p>
            <p className="mt-1 text-sm font-medium text-white">{SPINNER_FRAME_LABELS[frameIndex]}</p>
          </div>
          <div className="flex items-center gap-1.5 text-white/40">
            <RotateCw className="h-3.5 w-3.5" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Drag</span>
          </div>
        </div>
        <div className="mt-3 flex gap-1">
          {SPINNER_FRAMES.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-0.5 flex-1 rounded-full transition-colors",
                i === frameIndex ? "bg-white" : "bg-white/25"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
