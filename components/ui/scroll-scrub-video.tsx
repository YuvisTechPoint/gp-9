"use client";

import { useEffect, useRef, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { getScrollZoneProgress } from "@/lib/scroll-engage";
import { subscribeScroll } from "@/lib/scroll-performance";

type ScrollScrubVideoProps = {
  src: string;
  poster?: string;
  zoneRef: RefObject<HTMLElement | null>;
  className?: string;
  ariaLabel?: string;
};

export function ScrollScrubVideo({
  src,
  poster,
  zoneRef,
  className,
  ariaLabel,
}: ScrollScrubVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const readyRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const applyScrollFrame = () => {
      const zone = zoneRef.current;
      if (!zone || !readyRef.current || !Number.isFinite(durationRef.current)) return;

      const progress = getScrollZoneProgress(zone);
      video.currentTime = progress * durationRef.current;
    };

    const primeVideo = () => {
      durationRef.current = video.duration;
      readyRef.current = Number.isFinite(durationRef.current) && durationRef.current > 0;
      video.pause();

      video
        .play()
        .then(() => {
          video.pause();
          applyScrollFrame();
        })
        .catch(() => {
          applyScrollFrame();
        });
    };

    const onReady = () => primeVideo();

    video.addEventListener("loadedmetadata", onReady);
    if (video.readyState >= 1) onReady();

    const unsub = subscribeScroll(applyScrollFrame);
    applyScrollFrame();

    return () => {
      unsub();
      video.removeEventListener("loadedmetadata", onReady);
    };
  }, [src, zoneRef]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="auto"
      poster={poster}
      aria-label={ariaLabel}
      className={cn(className)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
