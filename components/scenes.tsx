/* Generated vector scenes — every "image" on the site is drawn here.
   Zero photo downloads, ~KB each, animated via classes in globals.css:
   .svg-rain  .svg-stream  .svg-ripple  .svg-steam  .glow-pulse  .glow-soft */

const chrome = "#C7D6DC";
const chromeDark = "#8FA6AF";
const porcelain = "#F4F7F8";
const porcelainShade = "#D6E2E6";
const outline = "#C4D2D7";
const waterLight = "#9FE3F2";
const warm = "#F4C97B";

/* ── Hero: walk into a luxury bathroom ───────────────────── */
export function HeroBathScene() {
  return (
    <svg
      className="hero-scene"
      viewBox="0 0 1440 780"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustrated luxury bathroom: rain shower running, freestanding bathtub filling, backlit vanity mirror"
    >
      <defs>
        <linearGradient id="hb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B3547" />
          <stop offset="1" stopColor="#051B25" />
        </linearGradient>
        <linearGradient id="hb-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#04161E" />
          <stop offset="1" stopColor="#031017" />
        </linearGradient>
        <linearGradient id="hb-tub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor={porcelainShade} />
        </linearGradient>
        <linearGradient id="hb-chrome" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={chrome} />
          <stop offset="1" stopColor={chromeDark} />
        </linearGradient>
        <linearGradient id="hb-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#96714E" />
          <stop offset="1" stopColor="#6E4E33" />
        </linearGradient>
        <radialGradient id="hb-halo">
          <stop offset="0" stopColor={warm} stopOpacity="0.55" />
          <stop offset="1" stopColor={warm} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hb-mirror">
          <stop offset="0.55" stopColor="#12455A" />
          <stop offset="1" stopColor="#0B3244" />
        </radialGradient>
      </defs>

      {/* Walls + tiles */}
      <rect width="1440" height="560" fill="url(#hb-bg)" />
      {[160, 320, 480, 640, 800, 960, 1120, 1280].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="560" stroke="#FFFFFF" strokeOpacity="0.04" />
      ))}
      {[150, 330, 510].map((y) => (
        <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#FFFFFF" strokeOpacity="0.04" />
      ))}

      {/* Moonlight shafts */}
      <polygon className="glow-soft" points="880,0 1020,0 740,560 620,560" fill="#BCE4F0" opacity="0.05" />
      <polygon className="glow-soft" points="1050,0 1120,0 920,560 860,560" fill="#BCE4F0" opacity="0.035" />

      {/* Floor */}
      <rect y="560" width="1440" height="220" fill="url(#hb-floor)" />
      <line x1="0" y1="560" x2="1440" y2="560" stroke="#9FD3E2" strokeOpacity="0.18" />

      {/* ── Walk-in shower (left) ── */}
      <line x1="104" y1="96" x2="104" y2="560" stroke="#9FD3E2" strokeOpacity="0.3" strokeWidth="2" />
      <line x1="392" y1="96" x2="392" y2="560" stroke="#9FD3E2" strokeOpacity="0.3" strokeWidth="2" />
      <line x1="104" y1="96" x2="392" y2="96" stroke="#9FD3E2" strokeOpacity="0.3" strokeWidth="2" />
      <line x1="150" y1="200" x2="240" y2="460" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="14" />
      {/* head */}
      <line x1="248" y1="96" x2="248" y2="122" stroke="url(#hb-chrome)" strokeWidth="7" />
      <rect x="176" y="120" width="144" height="13" rx="6" fill="url(#hb-chrome)" />
      {/* rain */}
      <g className="svg-rain" stroke={waterLight} strokeOpacity="0.5" strokeWidth="1.6">
        {[186, 202, 218, 234, 250, 266, 282, 298, 312].map((x) => (
          <line key={x} x1={x} y1="140" x2={x} y2="548" />
        ))}
      </g>
      {/* tray + drain */}
      <line x1="112" y1="556" x2="384" y2="556" stroke={chromeDark} strokeWidth="3" />
      <rect x="226" y="551" width="44" height="5" rx="2.5" fill={chromeDark} />
      {/* steam */}
      <path className="svg-steam" d="M340 430 q14 -22 0 -44 q-14 -22 0 -44" fill="none" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="5" strokeLinecap="round" />

      {/* ── Freestanding tub (centre) ── */}
      <ellipse cx="770" cy="608" rx="230" ry="16" fill="#000000" opacity="0.3" />
      <path
        d="M560 440 Q560 428 576 428 L964 428 Q980 428 980 440 L972 496 Q958 588 770 588 Q582 588 568 496 Z"
        fill="url(#hb-tub)"
        stroke={outline}
        strokeWidth="2"
      />
      <ellipse cx="770" cy="431" rx="196" ry="13" fill="#EAF2F4" stroke={outline} strokeWidth="1.5" />
      <ellipse cx="770" cy="432" rx="180" ry="9" fill="#186D85" opacity="0.9" />
      <g style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <ellipse className="svg-ripple" cx="880" cy="432" rx="26" ry="4" fill="none" stroke={waterLight} strokeWidth="1.5" />
      </g>
      <g style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <ellipse className="svg-ripple svg-ripple--late" cx="880" cy="432" rx="14" ry="2.5" fill="none" stroke={waterLight} strokeWidth="1.5" />
      </g>
      {/* floor-mounted filler */}
      <line x1="1012" y1="600" x2="1012" y2="378" stroke="url(#hb-chrome)" strokeWidth="6" />
      <path d="M1012 380 Q1012 358 990 358 L936 358 L936 368" fill="none" stroke="url(#hb-chrome)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="1012" cy="470" r="7" fill={chrome} />
      <line className="svg-stream" x1="936" y1="372" x2="936" y2="426" stroke="#BFEFF9" strokeWidth="3" strokeLinecap="round" />
      {/* steam over tub */}
      <path className="svg-steam svg-steam--late" d="M730 400 q14 -22 0 -44 q-14 -22 0 -44" fill="none" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
      <path className="svg-steam" d="M820 388 q12 -18 0 -36 q-12 -18 0 -36" fill="none" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="4" strokeLinecap="round" />

      {/* ── Plant ── */}
      <path d="M488 508 L544 508 L536 560 L496 560 Z" fill="#0E3140" />
      <g fill="#17544A">
        <path d="M516 506 Q470 470 484 424 Q520 452 518 506 Z" />
        <path d="M516 506 Q560 464 548 416 Q512 448 514 506 Z" />
        <path d="M516 506 Q516 448 500 420 Q536 440 520 506 Z" opacity="0.8" />
      </g>

      {/* ── Vanity (right) ── */}
      <circle cx="1240" cy="248" r="88" fill="url(#hb-mirror)" />
      <circle className="glow-pulse" cx="1240" cy="248" r="88" fill="none" stroke={warm} strokeOpacity="0.5" strokeWidth="3" />
      <path d="M1180 210 A76 76 0 0 1 1240 176" fill="none" stroke="#9FD3E2" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
      {/* pendant */}
      <line x1="1108" y1="0" x2="1108" y2="150" stroke={chromeDark} strokeWidth="2.5" />
      <circle className="glow-pulse" cx="1108" cy="168" r="40" fill="url(#hb-halo)" />
      <circle cx="1108" cy="164" r="13" fill={warm} />
      {/* counter + cabinet */}
      <rect x="1082" y="460" width="332" height="11" rx="3" fill="#E8EFF1" />
      <rect x="1094" y="471" width="308" height="72" rx="8" fill="url(#hb-wood)" />
      <line x1="1114" y1="507" x2="1382" y2="507" stroke="#4E3722" strokeWidth="2" />
      <rect className="glow-pulse" x="1094" y="548" width="308" height="8" rx="4" fill={warm} opacity="0.3" />
      {/* vessel basin + tap */}
      <path d="M1152 460 L1152 442 Q1152 424 1172 424 L1246 424 Q1266 424 1266 442 L1266 460 Z" fill={porcelain} stroke={outline} strokeWidth="2" />
      <line x1="1318" y1="460" x2="1318" y2="392" stroke="url(#hb-chrome)" strokeWidth="5" />
      <path d="M1318 394 Q1318 378 1302 378 L1284 378 L1284 386" fill="none" stroke="url(#hb-chrome)" strokeWidth="5" strokeLinecap="round" />
      <line className="svg-stream" x1="1284" y1="390" x2="1284" y2="420" stroke="#BFEFF9" strokeWidth="2.5" strokeLinecap="round" />
      {/* bottles */}
      <rect x="1356" y="436" width="12" height="24" rx="3" fill="#9FD3E2" opacity="0.6" />
      <rect x="1374" y="428" width="12" height="32" rx="3" fill={warm} opacity="0.5" />

      {/* Floor reflections */}
      <ellipse cx="770" cy="648" rx="212" ry="16" fill={waterLight} opacity="0.05" />
      <ellipse cx="1108" cy="640" rx="26" ry="7" fill={warm} opacity="0.08" />
      <ellipse cx="248" cy="636" rx="120" ry="10" fill={waterLight} opacity="0.05" />
    </svg>
  );
}

/* ── Vignette: Jaquar rain shower ────────────────────────── */
export function VignetteShower() {
  return (
    <svg viewBox="0 0 460 380" className="vignette" role="img" aria-label="Illustration of a rain shower running">
      <defs>
        <linearGradient id="vs-chrome" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={chrome} />
          <stop offset="1" stopColor={chromeDark} />
        </linearGradient>
      </defs>
      {[92, 184, 276, 368].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="340" stroke="#FFFFFF" strokeOpacity="0.05" />
      ))}
      <line x1="0" y1="120" x2="460" y2="120" stroke="#FFFFFF" strokeOpacity="0.05" />
      <line x1="0" y1="240" x2="460" y2="240" stroke="#FFFFFF" strokeOpacity="0.05" />
      {/* arm + head */}
      <line x1="230" y1="16" x2="230" y2="52" stroke="url(#vs-chrome)" strokeWidth="8" />
      <rect x="130" y="50" width="200" height="16" rx="8" fill="url(#vs-chrome)" />
      <g fill={chromeDark}>
        {[150, 175, 200, 225, 250, 275, 300].map((x) => (
          <circle key={x} cx={x} cy="70" r="2.2" />
        ))}
      </g>
      {/* rain */}
      <g className="svg-rain" stroke={waterLight} strokeOpacity="0.55" strokeWidth="1.8">
        {[146, 166, 186, 206, 226, 246, 266, 286, 306].map((x) => (
          <line key={x} x1={x} y1="82" x2={x} y2="330" />
        ))}
      </g>
      {/* mixer */}
      <circle cx="230" cy="210" r="16" fill="none" stroke="url(#vs-chrome)" strokeWidth="5" />
      <line x1="230" y1="210" x2="248" y2="198" stroke={chrome} strokeWidth="4" strokeLinecap="round" />
      {/* tray + drain + splash */}
      <line x1="60" y1="340" x2="400" y2="340" stroke={chromeDark} strokeWidth="3" />
      <rect x="206" y="334" width="48" height="6" rx="3" fill={chromeDark} />
      <g style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <ellipse className="svg-ripple" cx="230" cy="337" rx="40" ry="5" fill="none" stroke={waterLight} strokeWidth="1.5" />
      </g>
      <path className="svg-steam" d="M340 260 q12 -20 0 -40 q-12 -20 0 -40" fill="none" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/* ── Vignette: Kohler freestanding tub ───────────────────── */
export function VignetteTub() {
  return (
    <svg viewBox="0 0 460 380" className="vignette" role="img" aria-label="Illustration of a freestanding bathtub filling with water">
      <defs>
        <linearGradient id="vt-tub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor={porcelainShade} />
        </linearGradient>
        <linearGradient id="vt-chrome" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={chrome} />
          <stop offset="1" stopColor={chromeDark} />
        </linearGradient>
      </defs>
      <ellipse cx="216" cy="330" rx="176" ry="13" fill="#000000" opacity="0.28" />
      <path
        d="M66 186 Q66 174 82 174 L350 174 Q366 174 366 186 L360 234 Q348 312 216 312 Q84 312 72 234 Z"
        fill="url(#vt-tub)"
        stroke={outline}
        strokeWidth="2"
      />
      <ellipse cx="216" cy="177" rx="136" ry="11" fill="#EAF2F4" stroke={outline} strokeWidth="1.5" />
      <ellipse cx="216" cy="178" rx="122" ry="7.5" fill="#186D85" opacity="0.9" />
      <g style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <ellipse className="svg-ripple" cx="286" cy="178" rx="22" ry="3.5" fill="none" stroke={waterLight} strokeWidth="1.5" />
      </g>
      {/* filler */}
      <line x1="404" y1="330" x2="404" y2="128" stroke="url(#vt-chrome)" strokeWidth="6" />
      <path d="M404 130 Q404 108 382 108 L330 108 L330 118" fill="none" stroke="url(#vt-chrome)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="404" cy="226" r="6" fill={chrome} />
      <line className="svg-stream" x1="330" y1="122" x2="330" y2="172" stroke="#BFEFF9" strokeWidth="3" strokeLinecap="round" />
      {/* steam */}
      <path className="svg-steam" d="M180 140 q13 -20 0 -40 q-13 -20 0 -40" fill="none" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
      <path className="svg-steam svg-steam--late" d="M250 132 q11 -17 0 -34 q-11 -17 0 -34" fill="none" stroke="#FFFFFF" strokeOpacity="0.24" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Vignette: Parryware vessel basin ────────────────────── */
export function VignetteBasin() {
  return (
    <svg viewBox="0 0 460 380" className="vignette" role="img" aria-label="Illustration of a designer wash basin with tap running">
      <defs>
        <linearGradient id="vb-chrome" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={chrome} />
          <stop offset="1" stopColor={chromeDark} />
        </linearGradient>
        <linearGradient id="vb-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#96714E" />
          <stop offset="1" stopColor="#6E4E33" />
        </linearGradient>
      </defs>
      {/* mirror */}
      <circle cx="230" cy="108" r="72" fill="#12455A" />
      <circle className="glow-pulse" cx="230" cy="108" r="72" fill="none" stroke={warm} strokeOpacity="0.5" strokeWidth="2.5" />
      <path d="M182 78 A60 60 0 0 1 230 50" fill="none" stroke="#9FD3E2" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
      {/* counter + cabinet */}
      <rect x="48" y="252" width="364" height="10" rx="3" fill="#E8EFF1" />
      <rect x="62" y="262" width="336" height="58" rx="8" fill="url(#vb-wood)" />
      <rect className="glow-pulse" x="62" y="324" width="336" height="7" rx="3.5" fill={warm} opacity="0.3" />
      {/* basin */}
      <path d="M132 252 L132 230 Q132 208 156 208 L244 208 Q268 208 268 230 L268 252 Z" fill={porcelain} stroke={outline} strokeWidth="2" />
      <ellipse cx="200" cy="210" rx="66" ry="7" fill="#EAF2F4" stroke={outline} strokeWidth="1.2" />
      <ellipse cx="200" cy="211" rx="56" ry="5" fill="#186D85" opacity="0.85" />
      <g style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <ellipse className="svg-ripple" cx="232" cy="211" rx="16" ry="2.6" fill="none" stroke={waterLight} strokeWidth="1.4" />
      </g>
      {/* tall tap */}
      <line x1="322" y1="252" x2="322" y2="164" stroke="url(#vb-chrome)" strokeWidth="6" />
      <path d="M322 166 Q322 146 302 146 L236 146 L236 156" fill="none" stroke="url(#vb-chrome)" strokeWidth="6" strokeLinecap="round" />
      <line x1="340" y1="200" x2="352" y2="188" stroke={chrome} strokeWidth="4" strokeLinecap="round" />
      <line className="svg-stream" x1="236" y1="160" x2="236" y2="204" stroke="#BFEFF9" strokeWidth="2.6" strokeLinecap="round" />
      {/* soap */}
      <rect x="86" y="228" width="13" height="24" rx="3.5" fill="#9FD3E2" opacity="0.6" />
      <rect x="105" y="236" width="20" height="16" rx="3" fill={warm} opacity="0.4" />
    </svg>
  );
}

/* ── Showroom floor plan (3,500 sq ft, drawn to concept) ─── */
export function ShowroomPlan() {
  const label = { fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", fill: "var(--muted)" } as const;
  const zone = "var(--pipe)";
  return (
    <svg viewBox="0 0 900 540" className="floor-plan" role="img" aria-label="Floor plan of the 3,500 square foot showroom with demo zones">
      {/* outline with entrance gap */}
      <path
        d="M70 60 L830 60 L830 480 L360 480 M260 480 L70 480 Z"
        fill="#FFFFFF"
        stroke={zone}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* entrance */}
      <path d="M360 480 A50 50 0 0 0 310 430" fill="none" stroke={zone} strokeWidth="2" strokeDasharray="4 5" />
      <text x="310" y="516" style={label} fill={zone} fontWeight="700">ENTRANCE ↑</text>

      {/* dimensions */}
      <line x1="70" y1="34" x2="830" y2="34" stroke="var(--muted)" strokeWidth="1.5" />
      <text x="420" y="26" style={label}>70 FT</text>
      <line x1="856" y1="60" x2="856" y2="480" stroke="var(--muted)" strokeWidth="1.5" />
      <text x="868" y="274" style={label} writingMode="tb">50 FT</text>

      {/* Bath & jacuzzi demo zone */}
      <rect x="92" y="82" width="330" height="180" rx="10" fill="var(--water-soft)" stroke="var(--water)" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="108" y="108" style={label} fill="var(--pipe)" fontWeight="700">BATH &amp; JACUZZI — LIVE DEMO</text>
      {/* tub icon */}
      <path d="M130 190 Q130 182 138 182 L230 182 Q238 182 238 190 L234 208 Q230 226 184 226 Q138 226 134 208 Z" fill="#FFFFFF" stroke={zone} strokeWidth="2" />
      {/* shower icon */}
      <rect x="290" y="150" width="60" height="8" rx="4" fill="none" stroke={zone} strokeWidth="2" />
      <g stroke="var(--water)" strokeWidth="1.5" opacity="0.8">
        <line x1="300" y1="166" x2="300" y2="220" />
        <line x1="318" y1="166" x2="318" y2="220" />
        <line x1="336" y1="166" x2="336" y2="220" />
      </g>

      {/* Sanitaryware */}
      <rect x="92" y="290" width="330" height="160" rx="10" fill="none" stroke={zone} strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="108" y="316" style={label} fill="var(--pipe)" fontWeight="700">SANITARYWARE</text>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={120 + i * 74} y="346" width="48" height="26" rx="6" fill="#FFFFFF" stroke={zone} strokeWidth="1.5" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <ellipse key={i} cx={144 + i * 74} cy="404" rx="20" ry="12" fill="#FFFFFF" stroke={zone} strokeWidth="1.5" />
      ))}

      {/* Pipes & fittings racks */}
      <rect x="452" y="82" width="356" height="140" rx="10" fill="none" stroke={zone} strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="468" y="108" style={label} fill="var(--pipe)" fontWeight="700">PIPES &amp; FITTINGS</text>
      <g stroke={zone} strokeWidth="3" strokeLinecap="round">
        {[128, 146, 164, 182, 200].map((y) => (
          <line key={y} x1="476" y1={y} x2="700" y2={y} />
        ))}
      </g>
      <g fill="none" stroke={zone} strokeWidth="2">
        <circle cx="748" cy="150" r="14" />
        <circle cx="748" cy="150" r="7" />
        <circle cx="782" cy="150" r="14" />
        <circle cx="782" cy="150" r="7" />
      </g>

      {/* Tanks */}
      <rect x="452" y="250" width="200" height="200" rx="10" fill="none" stroke={zone} strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="468" y="276" style={label} fill="var(--pipe)" fontWeight="700">TANKS</text>
      <circle cx="516" cy="340" r="34" fill="#FFFFFF" stroke={zone} strokeWidth="2" />
      <circle cx="516" cy="340" r="14" fill="none" stroke={zone} strokeWidth="1.5" />
      <circle cx="596" cy="380" r="26" fill="#FFFFFF" stroke={zone} strokeWidth="2" />
      <circle cx="596" cy="380" r="10" fill="none" stroke={zone} strokeWidth="1.5" />

      {/* Pumps + counter */}
      <rect x="680" y="250" width="128" height="120" rx="10" fill="none" stroke={zone} strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="696" y="276" style={label} fill="var(--pipe)" fontWeight="700">PUMPS</text>
      {[
        [716, 316],
        [762, 316],
        [740, 348],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="13" fill="#FFFFFF" stroke={zone} strokeWidth="2" />
          <path d={`M${cx - 5} ${cy + 4} L${cx} ${cy - 6} L${cx + 5} ${cy + 4} Z`} fill={zone} />
        </g>
      ))}
      <rect x="680" y="396" width="128" height="54" rx="10" fill="var(--water-soft)" stroke="var(--water)" strokeWidth="1.5" />
      <text x="700" y="428" style={label} fill="var(--pipe)" fontWeight="700">HELP DESK</text>
    </svg>
  );
}
