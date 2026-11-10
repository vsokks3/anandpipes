"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

/* 3D "borewell → bathtub" plumbing scene.
   - Procedural geometry only (no models/textures to download).
   - three.js is dynamically imported once the stage nears the viewport,
     so it never weighs on first load; skipped for reduced-motion,
     Save-Data, or no-WebGL visitors (they keep the SVG `fallback`).
   - Scroll through the `.journey` list drives camera + water fill and
     highlights the matching `[data-station]` row. */

type Mode = "static" | "3d";

const STAGES = [
  { num: "01", label: "Source", title: "Pumps & Motors" },
  { num: "02", label: "Supply", title: "Pipes & Fittings" },
  { num: "03", label: "Storage", title: "Water Tanks" },
  { num: "04", label: "Delivery", title: "Bath & Showers" },
];

function canRun3D() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (conn?.saveData) return false;
  try {
    const gl = document.createElement("canvas").getContext("webgl2");
    gl?.getExtension("WEBGL_lose_context")?.loseContext(); // free the probe context
    return !!gl;
  } catch {
    return false;
  }
}

export function WaterLine3D({ fallback }: { fallback: ReactNode }) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<Mode>("static");
  const [ready, setReady] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (canRun3D()) setMode("3d");
  }, []);

  useEffect(() => {
    if (mode !== "3d") return;
    const stageEl = stageRef.current;
    const host = hostRef.current;
    if (!stageEl || !host) return;

    let dispose: (() => void) | null = null;
    let cancelled = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        import("@/components/water-line-scene")
          .then(({ mountWaterLine }) => {
            if (cancelled) return;
            dispose = mountWaterLine(host, {
              journey: stageEl.parentElement?.querySelector<HTMLElement>(".journey") ?? null,
              onStage: setStage,
              onReady: () => setReady(true),
              onFail: () => setMode("static"),
            });
          })
          .catch(() => setMode("static"));
      },
      { rootMargin: "700px 0px" }
    );
    io.observe(stageEl);

    return () => {
      cancelled = true;
      io.disconnect();
      dispose?.();
    };
  }, [mode]);

  const s = STAGES[stage];

  return (
    <div ref={stageRef} className="waterline-stage" data-mode={mode} data-ready={ready || undefined}>
      <div className="stage3d">
        <div className="stage3d-fallback" aria-hidden={mode === "3d" && ready ? true : undefined}>
          {fallback}
        </div>
        {mode === "3d" && (
          <>
            <div ref={hostRef} className="stage3d-canvas" aria-hidden />
            <div className="stage3d-hud" aria-hidden>
              <span className="stage3d-num">{s.num}</span>
              <span>
                <span className="stage3d-label">{s.label}</span>
                <span className="stage3d-title">{s.title}</span>
              </span>
            </div>
            <div className="stage3d-dots" aria-hidden>
              {STAGES.map((x, i) => (
                <span key={x.num} className={i <= stage ? "on" : undefined} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
