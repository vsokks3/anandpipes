"use client";

import { useEffect, useRef } from "react";

/* Light-only water ripples + caustics over the hero photo.
   Raw WebGL (~3 KB, no library). Starts after the photo loads and the
   browser is idle; pauses offscreen; off for reduced-motion. Pointer
   movement (desktop) or taps (touch) drop ripples; idle drips otherwise. */

const MAX = 12;

const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;
const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uDrops[${MAX}];
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2 q = vec2(uv.x * asp, uv.y);
  float a = 0.0;
  for (int i = 0; i < ${MAX}; i++) {
    vec3 d = uDrops[i];
    float age = uTime - d.z;
    if (age < 0.0 || age > 3.2) continue;
    float dist = distance(q, vec2(d.x * asp, d.y));
    float rad = age * 0.22;
    float ring = exp(-pow((dist - rad) * 46.0, 2.0)) + 0.5 * exp(-pow((dist - rad * 0.72) * 60.0, 2.0));
    a += ring * exp(-age * 1.25);
  }
  // soft caustic shimmer near the bottom (the jacuzzi water)
  vec2 c = q * 7.0;
  float t = uTime * 0.55;
  float n = sin(c.x + t) + sin(c.y * 1.3 - t * 1.2) + sin((c.x + c.y) * 0.8 + t * 0.7);
  float caus = pow(1.0 - abs(n) / 3.0, 9.0) * smoothstep(0.55, 0.0, uv.y) * 0.22;
  float v = clamp(a * 0.55 + caus, 0.0, 1.0);
  gl_FragColor = vec4(vec3(0.62, 0.92, 1.0) * v, v);
}`;

export function HeroRipples() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    const hero = canvas?.parentElement;
    if (!canvas || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let stop = () => {};
    let cancelled = false;

    const boot = () => {
      if (cancelled) return;
      const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false });
      if (!gl) return;
      const sh = (type: number, src: string) => {
        const s = gl.createShader(type)!;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const prog = gl.createProgram()!;
      gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
      gl.useProgram(prog);
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, "p");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const uRes = gl.getUniformLocation(prog, "uRes");
      const uTime = gl.getUniformLocation(prog, "uTime");
      const uDrops = gl.getUniformLocation(prog, "uDrops");

      const drops = new Float32Array(MAX * 3).fill(-99);
      let head = 0;
      const t0 = performance.now();
      const now = () => (performance.now() - t0) / 1000;
      const drop = (x: number, y: number) => {
        drops[head * 3] = x;
        drops[head * 3 + 1] = y;
        drops[head * 3 + 2] = now();
        head = (head + 1) % MAX;
      };

      // render at reduced resolution — the effect is soft by nature
      const scale = 0.6;
      const resize = () => {
        canvas.width = Math.max(1, Math.round(hero.clientWidth * scale));
        canvas.height = Math.max(1, Math.round(hero.clientHeight * scale));
        gl.viewport(0, 0, canvas.width, canvas.height);
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(hero);

      let last = 0;
      const toUv = (e: PointerEvent) => {
        const r = hero.getBoundingClientRect();
        return [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height] as const;
      };
      const onMove = (e: PointerEvent) => {
        if (e.pointerType === "touch") return;
        const tt = now();
        if (tt - last < 0.12) return;
        last = tt;
        const [x, y] = toUv(e);
        drop(x, y);
      };
      const onDown = (e: PointerEvent) => {
        const [x, y] = toUv(e);
        drop(x, y);
      };
      hero.addEventListener("pointermove", onMove, { passive: true });
      hero.addEventListener("pointerdown", onDown, { passive: true });

      let raf = 0;
      let visible = true;
      let nextIdle = 0.6;
      const frame = () => {
        raf = 0;
        if (!visible || document.hidden) return;
        const tt = now();
        if (tt > nextIdle) {
          // idle drips in the lower (water) half
          drop(0.25 + Math.random() * 0.7, 0.08 + Math.random() * 0.32);
          nextIdle = tt + 1.6 + Math.random() * 1.6;
        }
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, tt);
        gl.uniform3fv(uDrops, drops);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        raf = requestAnimationFrame(frame);
      };
      const start = () => {
        if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
      };
      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        start();
      });
      io.observe(hero);
      document.addEventListener("visibilitychange", start);
      canvas.classList.add("is-on");
      start();

      stop = () => {
        if (raf) cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerdown", onDown);
        document.removeEventListener("visibilitychange", start);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    };

    const idle = (cb: () => void) => {
      if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(cb, { timeout: 2500 });
      else setTimeout(cb, 1200);
    };
    const kick = () => idle(boot);
    if (document.readyState === "complete") kick();
    else window.addEventListener("load", kick, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", kick);
      stop();
    };
  }, []);

  return <canvas ref={ref} className="hero-ripples" aria-hidden />;
}
