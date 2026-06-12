"use client";

import dynamic from "next/dynamic";

const PianoViewer = dynamic(
  () => import("@/components/gp9/piano-viewer").then((m) => m.PianoViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-neutral-950">
        <p className="text-xs uppercase tracking-[0.35em] text-white/40">Loading 3D viewer…</p>
      </div>
    ),
  }
);

export { PianoViewer };
