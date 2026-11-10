/* Lazy-loaded three.js scene for <WaterLine3D />. Never import statically. */
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

type Options = {
  journey: HTMLElement | null;
  onStage: (i: number) => void;
  onReady: () => void;
  onFail: () => void;
};

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const ease = (t: number) => t * t * (3 - 2 * t);
const span = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

/* Polyline with rounded elbows → smooth plumbing run */
function plumbing(points: THREE.Vector3[], r = 0.35) {
  const path = new THREE.CurvePath<THREE.Vector3>();
  let cur = points[0].clone();
  for (let i = 1; i < points.length - 1; i++) {
    const p = points[i];
    const a = points[i - 1].clone().sub(p);
    const b = points[i + 1].clone().sub(p);
    const ra = Math.min(r, a.length() / 2);
    const rb = Math.min(r, b.length() / 2);
    const s = p.clone().add(a.normalize().multiplyScalar(ra));
    const e = p.clone().add(b.normalize().multiplyScalar(rb));
    if (cur.distanceTo(s) > 1e-4) path.add(new THREE.LineCurve3(cur, s));
    path.add(new THREE.QuadraticBezierCurve3(s, p.clone(), e));
    cur = e;
  }
  path.add(new THREE.LineCurve3(cur, points[points.length - 1].clone()));
  return path;
}

const flowVert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const flowFrag = /* glsl */ `
  uniform float uTime;
  uniform float uFill;
  uniform float uRepeat;
  varying vec2 vUv;
  void main() {
    float filled = step(vUv.x, uFill);
    float s = fract(vUv.x * uRepeat - uTime * 1.4);
    float pulse = smoothstep(0.0, 0.18, s) * smoothstep(0.75, 0.3, s);
    vec3 empty = vec3(0.05, 0.16, 0.22);
    vec3 water = mix(vec3(0.03, 0.55, 0.72), vec3(0.62, 0.95, 1.0), pulse);
    // bright leading edge of the water front
    float front = smoothstep(0.03, 0.0, abs(vUv.x - uFill)) * step(uFill, 0.999);
    vec3 col = mix(empty, water, filled) + front * vec3(0.7, 1.0, 1.0);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function mountWaterLine(host: HTMLElement, opts: Options): () => void {
  const small = window.matchMedia("(max-width: 1023px)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: !small,
      alpha: true,
      powerPreference: small ? "low-power" : "high-performance",
    });
  } catch {
    opts.onFail();
    return () => {};
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
  scene.environment = envRT.texture;
  scene.fog = new THREE.Fog(0x08222f, 18, 34);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);

  scene.add(new THREE.HemisphereLight(0xbfefff, 0x0b2b3c, 0.9));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(6, 12, 8);
  scene.add(sun);
  const warm = new THREE.PointLight(0xf4c97b, 18, 12, 2);
  warm.position.set(4.6, 3.2, 2.2);
  scene.add(warm);

  const disposables: { dispose: () => void }[] = [envRT, pmrem];
  const track = <T extends { dispose: () => void }>(x: T) => {
    disposables.push(x);
    return x;
  };

  /* ── Materials ── */
  const chrome = track(new THREE.MeshStandardMaterial({ color: 0xdfe8ec, metalness: 1, roughness: 0.18 }));
  const pvc = track(
    new THREE.MeshStandardMaterial({
      color: 0x9fd3e2, metalness: 0, roughness: 0.15, transparent: true, opacity: 0.22, depthWrite: false,
    })
  );
  const pumpBlue = track(new THREE.MeshStandardMaterial({ color: 0x135e86, metalness: 0.45, roughness: 0.35 }));
  const steel = track(new THREE.MeshStandardMaterial({ color: 0x6f8790, metalness: 0.8, roughness: 0.4 }));
  const porcelain = track(new THREE.MeshStandardMaterial({ color: 0xf6fafb, roughness: 0.22, side: THREE.DoubleSide }));
  const tankMat = track(
    new THREE.MeshStandardMaterial({
      color: 0x1d7fae, roughness: 0.45, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide,
    })
  );
  const waterMat = track(
    new THREE.MeshStandardMaterial({
      color: 0x2fc4e0, emissive: 0x0e9fbe, emissiveIntensity: 0.35, roughness: 0.05, transparent: true, opacity: 0.85,
    })
  );
  const soilMat = track(
    new THREE.MeshStandardMaterial({ color: 0x3b2a1b, roughness: 1, transparent: true, opacity: 0.5, depthWrite: false })
  );
  const aquiferMat = track(
    new THREE.MeshStandardMaterial({
      color: 0x19b6d6, emissive: 0x0e9fbe, emissiveIntensity: 1.2, transparent: true, opacity: 0.7, depthWrite: false, toneMapped: false,
    })
  );

  const mesh = (g: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0) => {
    track(g);
    const o = new THREE.Mesh(g, m);
    o.position.set(x, y, z);
    scene.add(o);
    return o;
  };

  /* ── Ground cutaway ── */
  const grid = new THREE.GridHelper(16, 32, 0x0e9fbe, 0x0e9fbe);
  (grid.material as THREE.Material).transparent = true;
  (grid.material as THREE.Material).opacity = 0.14;
  track(grid.geometry);
  track(grid.material as THREE.Material);
  scene.add(grid);
  mesh(new THREE.BoxGeometry(15, 3.6, 3.2), soilMat, 0, -1.8, 0);
  mesh(new THREE.BoxGeometry(5, 0.4, 3.0), aquiferMat, -5, -3.2, 0).renderOrder = 2; // draw over the soil

  /* ── Pipes with flowing water ── */
  type Run = { fill: THREE.ShaderMaterial; from: number; to: number };
  const runs: Run[] = [];
  const addRun = (pts: THREE.Vector3[], from: number, to: number) => {
    const path = plumbing(pts);
    const len = path.getLength();
    const seg = Math.max(64, Math.round(len * (small ? 10 : 16)));
    mesh(new THREE.TubeGeometry(path, seg, 0.17, small ? 10 : 14, false), pvc);
    const fill = track(
      new THREE.ShaderMaterial({
        vertexShader: flowVert,
        fragmentShader: flowFrag,
        uniforms: { uTime: { value: 0 }, uFill: { value: 0 }, uRepeat: { value: len / 0.7 } },
      })
    );
    const inner = mesh(new THREE.TubeGeometry(path, seg, 0.1, 8, false), fill);
    inner.renderOrder = -1;
    // brass couplings at each elbow
    for (let i = 1; i < pts.length - 1; i++) {
      mesh(new THREE.SphereGeometry(0.22, 16, 12), steel, pts[i].x, pts[i].y, pts[i].z).scale.setScalar(0.9);
    }
    runs.push({ fill, from, to });
  };

  // Source → tank
  addRun([V(-5, -3.2, 0), V(-5, 1.5, 0), V(-2.2, 1.5, 0), V(-2.2, 6, 0), V(-0.5, 6, 0), V(-0.5, 5.35, 0)], 0.12, 0.55);
  // Tank → shower over the tub
  addRun(
    [V(0.55, 3.55, 0), V(1.4, 3.55, 0), V(1.4, 0.45, 0), V(1.4, 0.45, -1.25), V(4.6, 0.45, -1.25), V(4.6, 4.7, -1.25), V(4.6, 4.7, -0.05), V(4.6, 4.38, -0.05)],
    0.72,
    0.88
  );

  /* ── Pump (source) ── */
  mesh(new THREE.BoxGeometry(1.4, 0.18, 1.1), steel, -5, 0.09, 0);
  const pump = mesh(new THREE.CylinderGeometry(0.48, 0.48, 1.05, 32), pumpBlue, -5, 0.72, 0);
  mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.12, 32), chrome, -5, 1.28, 0);
  const finGeo = track(new THREE.BoxGeometry(0.06, 0.9, 0.16));
  for (let i = 0; i < 8; i++) {
    const fin = new THREE.Mesh(finGeo, steel);
    const a = (i / 8) * Math.PI * 2;
    fin.position.set(Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5);
    fin.rotation.y = -a;
    pump.add(fin); // cooling fins turn with the motor
  }
  mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.2, 24), steel, -5, 0.02, 0); // borewell casing

  /* ── Tank on stand (storage) ── */
  const TX = -0.5;
  for (const [dx, dz] of [[-0.8, -0.8], [0.8, -0.8], [-0.8, 0.8], [0.8, 0.8]]) {
    mesh(new THREE.BoxGeometry(0.14, 3, 0.14), steel, TX + dx, 1.5, dz);
  }
  mesh(new THREE.BoxGeometry(2.2, 0.16, 2.2), steel, TX, 3.08, 0);
  mesh(new THREE.CylinderGeometry(1.1, 1.1, 2.2, 48, 1, true), tankMat, TX, 4.26, 0);
  mesh(new THREE.CylinderGeometry(1.12, 1.12, 0.08, 48), pumpBlue, TX, 5.38, 0);
  mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.16, 32), pumpBlue, TX, 5.48, 0);
  for (const y of [3.7, 4.3, 4.9]) {
    mesh(new THREE.TorusGeometry(1.11, 0.035, 8, 64), pumpBlue, TX, y, 0).rotation.x = Math.PI / 2;
  }
  const tankWater = mesh(new THREE.CylinderGeometry(1.04, 1.04, 1, 48), waterMat, TX, 3.2, 0);
  tankWater.scale.y = 0.001;

  /* ── Bathtub + shower (delivery) ── */
  const tubProfile = [
    V(0, 0.08, 0), V(0.85, 0.08, 0), V(0.98, 0.22, 0), V(1.04, 0.95, 0), V(1.12, 1.02, 0), V(1.14, 0.96, 0), V(1.08, 0.2, 0), V(0.92, 0, 0), V(0, 0, 0),
  ].map((p) => new THREE.Vector2(p.x, p.y));
  const tub = mesh(new THREE.LatheGeometry(tubProfile, small ? 32 : 48), porcelain, 4.6, 0, 0.25);
  tub.scale.set(1.55, 1, 0.82);
  const tubWater = mesh(new THREE.CircleGeometry(1.0, 48), waterMat, 4.6, 0.12, 0.25);
  tubWater.rotation.x = -Math.PI / 2;
  tubWater.scale.set(1.5, 0.8, 1);
  mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.06, 40), chrome, 4.6, 4.34, -0.05);

  // ripple rings on the tub water
  const rings = Array.from({ length: 3 }, (_, i) => {
    const r = mesh(new THREE.RingGeometry(0.2, 0.24, 40), track(waterMat.clone()), 4.6, 0.13, 0.2);
    r.rotation.x = -Math.PI / 2;
    (r.material as THREE.MeshStandardMaterial).color.set(0xd6f6ff);
    r.userData.phase = i / 3;
    return r;
  });

  // shower rain (points)
  const DROPS = small ? 90 : 180;
  const dropPos = new Float32Array(DROPS * 3);
  const dropSpeed = new Float32Array(DROPS);
  const resetDrop = (i: number, randomY: boolean) => {
    const a = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * 0.38;
    dropPos[i * 3] = 4.6 + Math.cos(a) * r;
    dropPos[i * 3 + 1] = randomY ? 0.3 + Math.random() * 4 : 4.28;
    dropPos[i * 3 + 2] = -0.05 + Math.sin(a) * r;
    dropSpeed[i] = 4 + Math.random() * 2.5;
  };
  for (let i = 0; i < DROPS; i++) resetDrop(i, true);
  const dropGeo = track(new THREE.BufferGeometry());
  dropGeo.setAttribute("position", new THREE.BufferAttribute(dropPos, 3));
  const dropMat = track(
    new THREE.PointsMaterial({ color: 0xbfefff, size: small ? 0.07 : 0.055, transparent: true, opacity: 0, depthWrite: false })
  );
  scene.add(new THREE.Points(dropGeo, dropMat));

  /* ── Camera path: overview → source → supply → storage → delivery ── */
  const keys = [
    { pos: V(1, 5.5, 19), look: V(0, 1.6, 0) },
    { pos: V(-9, 2.2, 8), look: V(-4.4, 0.4, 0) },
    { pos: V(-7, 5.6, 9.5), look: V(-2, 3, 0) },
    { pos: V(3.2, 7, 8.6), look: V(-0.4, 4.1, 0) },
    { pos: V(9.8, 5.4, 9.6), look: V(3.2, 2.6, 0) },
  ];
  const camPos = new THREE.Vector3();
  const camLook = new THREE.Vector3();
  const tmpA = new THREE.Vector3();
  const tmpB = new THREE.Vector3();

  /* ── Sizing ── */
  let aspect = 1;
  const resize = () => {
    const w = host.clientWidth || 1;
    const h = host.clientHeight || 1;
    aspect = w / h;
    renderer.setSize(w, h, false);
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  /* ── Scroll progress from the journey list ── */
  let target = 0;
  let progress = 0;
  let stage = -1;
  const readScroll = () => {
    const el = opts.journey;
    const vh = window.innerHeight;
    if (!el) {
      const r = host.getBoundingClientRect();
      target = clamp01((vh - r.top) / (vh + r.height));
      return;
    }
    const r = el.getBoundingClientRect();
    // 0 when the list top reaches 60% of the viewport, 1 when its bottom does
    target = clamp01((vh * 0.6 - r.top) / (r.height || 1));
  };
  const stations = opts.journey ? Array.from(opts.journey.querySelectorAll<HTMLElement>("[data-station]")) : [];
  window.addEventListener("scroll", readScroll, { passive: true });
  window.addEventListener("resize", readScroll);
  readScroll();
  progress = target;

  /* ── Pointer parallax (fine pointers) / idle sway (touch) ── */
  let px = 0;
  let py = 0;
  const onPointer = (e: PointerEvent) => {
    if (e.pointerType === "touch") return;
    px = (e.clientX / window.innerWidth - 0.5) * 2;
    py = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  if (!coarse) window.addEventListener("pointermove", onPointer, { passive: true });

  /* ── Loop (only while visible) ── */
  let raf = 0;
  let visible = true;
  let pageVisible = !document.hidden;
  const clock = new THREE.Clock();
  let t = 0;
  let readyFired = false;

  const frame = () => {
    raf = 0;
    if (!visible || !pageVisible) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    t += dt;
    progress += (target - progress) * Math.min(1, dt * 4);
    const p = progress;

    // camera
    const f = p * (keys.length - 1);
    const i = Math.min(keys.length - 2, Math.floor(f));
    const k = ease(f - i);
    tmpA.lerpVectors(keys[i].pos, keys[i + 1].pos, k);
    tmpB.lerpVectors(keys[i].look, keys[i + 1].look, k);
    // pull back on narrow (portrait) stages so the subject stays in frame
    const pull = Math.max(1, 1.75 / aspect);
    tmpA.sub(tmpB).multiplyScalar(pull).add(tmpB);
    tmpA.x += px * 0.9 + (coarse ? Math.sin(t * 0.35) * 0.5 : 0);
    tmpA.y += -py * 0.5;
    camPos.lerp(tmpA, readyFired ? Math.min(1, dt * 5) : 1);
    camLook.lerp(tmpB, readyFired ? Math.min(1, dt * 5) : 1);
    camera.position.copy(camPos);
    camera.lookAt(camLook);

    // water
    for (const r of runs) {
      r.fill.uniforms.uTime.value = t;
      r.fill.uniforms.uFill.value = span(p, r.from, r.to);
    }
    const tankLevel = ease(span(p, 0.5, 0.74));
    tankWater.scale.y = Math.max(0.001, tankLevel * 1.95);
    tankWater.position.y = 3.2 + (tankLevel * 1.95) / 2;
    const showerOn = span(p, 0.86, 0.9);
    dropMat.opacity = showerOn * 0.85;
    const tubLevel = ease(span(p, 0.88, 1));
    tubWater.position.y = 0.12 + tubLevel * 0.72;
    pump.rotation.y += dt * (p > 0.08 ? 2.4 : 0.25);

    if (showerOn > 0) {
      for (let d = 0; d < DROPS; d++) {
        dropPos[d * 3 + 1] -= dropSpeed[d] * dt;
        if (dropPos[d * 3 + 1] < tubWater.position.y) resetDrop(d, false);
      }
      dropGeo.attributes.position.needsUpdate = true;
    }
    for (const r of rings) {
      const ph = (t * 0.45 + r.userData.phase) % 1;
      r.position.y = tubWater.position.y + 0.01;
      r.scale.setScalar(0.4 + ph * 3.2);
      r.scale.y = 1;
      (r.material as THREE.MeshStandardMaterial).opacity = (1 - ph) * 0.7 * showerOn;
    }

    // stage HUD + station highlight
    const s = p < 0.36 ? 0 : p < 0.6 ? 1 : p < 0.82 ? 2 : 3;
    if (s !== stage) {
      stage = s;
      opts.onStage(s);
      stations.forEach((el, idx) => el.classList.toggle("is-active", idx === s));
    }

    renderer.render(scene, camera);
    if (!readyFired) {
      readyFired = true;
      opts.onReady();
    }
    raf = requestAnimationFrame(frame);
  };
  const start = () => {
    if (!raf && visible && pageVisible) {
      clock.getDelta();
      raf = requestAnimationFrame(frame);
    }
  };

  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) start();
  });
  io.observe(host);
  const onVis = () => {
    pageVisible = !document.hidden;
    if (pageVisible) start();
  };
  document.addEventListener("visibilitychange", onVis);

  const canvas = renderer.domElement;
  const onLost = (e: Event) => {
    e.preventDefault();
    opts.onFail();
  };
  canvas.addEventListener("webglcontextlost", onLost);

  start();

  return () => {
    if (raf) cancelAnimationFrame(raf);
    io.disconnect();
    ro.disconnect();
    window.removeEventListener("scroll", readScroll);
    window.removeEventListener("resize", readScroll);
    window.removeEventListener("pointermove", onPointer);
    document.removeEventListener("visibilitychange", onVis);
    canvas.removeEventListener("webglcontextlost", onLost);
    stations.forEach((el) => el.classList.remove("is-active"));
    disposables.forEach((d) => d.dispose());
    renderer.dispose();
    canvas.remove();
  };
}
