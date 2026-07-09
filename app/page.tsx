import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { BrandGrid } from "@/components/brand-grid";
import { MapEmbed } from "@/components/map-embed";
import { Navbar } from "@/components/navbar";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

/* ── Structured data ─────────────────────────────────────── */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://anandpipes.in",
  name: "Anand Pipe Agencies",
  description:
    "Premium showroom in Erode for PVC, CPVC, UPVC pipes and fittings, bath fittings, sanitaryware, water tanks, pumps and motors.",
  url: "https://anandpipes.in",
  telephone: "+917305400590",
  image: "https://anandpipes.in/logo.png",
  hasMap: "https://maps.app.goo.gl/3uA7K8H7PvvGow5z6",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "143 APT Road, Near CD Building",
    addressLocality: "Erode",
    addressRegion: "Tamil Nadu",
    postalCode: "638001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.349772,
    longitude: 77.723527,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "20:30",
    },
  ],
};

/* ── Data ─────────────────────────────────────────────────── */

const stations = [
  {
    num: "01",
    stage: "Source",
    title: "Pumps & Motors",
    text: "Domestic, agricultural and industrial pumps that lift water from borewell to building.",
    brands: ["Suguna", "Texmo", "Piller", "Turbo Leader", "Bindhu"],
  },
  {
    num: "02",
    stage: "Supply",
    title: "Pipes & Fittings",
    text: "PVC, CPVC and UPVC pipe systems — with every elbow, coupling and solvent in stock.",
    brands: ["Finolex", "Ashirvad", "Avonplast", "Oxford"],
  },
  {
    num: "03",
    stage: "Storage",
    title: "Water Tanks",
    text: "Triple-layer overhead and underground tanks in every capacity, home to commercial.",
    brands: ["Ashirvad", "Oxford", "Aquatech", "Avonplast"],
  },
  {
    num: "04",
    stage: "Delivery",
    title: "Bath, Sanitaryware & Showers",
    text: "Taps, wash basins, WCs, rain showers and jacuzzis — running live on the showroom floor.",
    brands: ["Jaquar", "Kohler", "Parryware", "Plato", "Gravity", "Neelkund"],
  },
];

/* ── Hero schematic (signature) ──────────────────────────── */

function HeroSchematic() {
  return (
    <svg
      className="schematic"
      viewBox="0 0 440 520"
      role="img"
      aria-label="Plumbing plan: water flows from a borewell pump through pipes and a tank to a shower and bathtub"
    >
      {/* Plan sheet label */}
      <text className="plan-label" x="6" y="16">SUPPLY LINE — DWG 01</text>

      {/* Ground + borewell */}
      <line x1="20" y1="470" x2="204" y2="470" stroke="var(--pipe)" strokeWidth="2.5" strokeLinecap="round" />
      {[36, 60, 84, 108, 132, 156, 180].map((x) => (
        <line key={x} x1={x} y1="470" x2={x - 10} y2="482" stroke="var(--pipe)" strokeWidth="1.4" opacity="0.45" />
      ))}
      <text className="plan-label" x="122" y="504">BOREWELL</text>

      {/* Tank water */}
      <rect x="236" y="140" width="80" height="32" fill="var(--water-soft)" />
      <path d="M236 140 q10 -7 20 0 t20 0 t20 0 t20 0" fill="none" stroke="var(--water)" strokeWidth="2" />

      {/* Main pipe run: borewell → pump → tank → shower, plus a valve branch */}
      <path
        className="pipe-line draw"
        pathLength={1}
        d="M82 508 L82 160 Q82 148 94 148 L230 148
           M322 148 L348 148 Q360 148 360 160 L360 234
           M82 330 L116 330 M152 330 L168 330"
      />
      {/* Animated water inside the pipe */}
      <path
        className="flow"
        d="M82 460 L82 160 Q82 148 94 148 L230 148
           M322 148 L348 148 Q360 148 360 160 L360 234"
      />

      {/* Couplings */}
      <rect className="fixture" x="74" y="240" width="16" height="8" rx="1.5" />
      <rect className="fixture" x="156" y="140" width="8" height="16" rx="1.5" />

      {/* Pump */}
      <circle className="fixture" cx="82" cy="428" r="18" />
      <path d="M75 436 L82 419 L89 436 Z" fill="var(--pipe)" />
      <text className="plan-label" x="110" y="432">PUMP</text>

      {/* Valve on the branch */}
      <path d="M118 322 L118 338 L134 330 Z M150 322 L150 338 L134 330 Z" fill="var(--paper)" stroke="var(--pipe)" strokeWidth="2" strokeLinejoin="round" />
      <text className="plan-label" x="112" y="356">VALVE</text>

      {/* Tank */}
      <rect className="fixture" fill="none" x="230" y="118" width="92" height="60" rx="6" />
      <text className="plan-label" x="232" y="108">TANK</text>

      {/* Shower head + droplets */}
      <path className="fixture" d="M344 234 L376 234 L370 248 L350 248 Z" />
      <text className="plan-label" x="268" y="244" textAnchor="end">SHOWER</text>
      <circle className="drop" cx="348" cy="262" r="2.6" />
      <circle className="drop" cx="368" cy="262" r="2.6" />
      <circle className="drop" cx="358" cy="262" r="2.6" />
      <circle className="drop" cx="376" cy="262" r="2.6" />

      {/* Bathtub */}
      <rect x="302" y="404" width="112" height="16" fill="var(--water-soft)" />
      <rect className="fixture" fill="none" x="296" y="396" width="124" height="44" rx="14" />
      <line x1="312" y1="440" x2="312" y2="454" stroke="var(--pipe)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="404" y1="440" x2="404" y2="454" stroke="var(--pipe)" strokeWidth="2.5" strokeLinecap="round" />
      <text className="plan-label" x="330" y="474">BATHTUB</text>
    </svg>
  );
}

/* ── CSS-3D cylinder builder (tank / pipe) ───────────────── */

/* Company mark repeated on every experience band — brand recall */
function ExpWatermark() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <div className="exp-watermark">
      <span className="brand-disc">
        <Image
          src={`${basePath}/logo.png`}
          alt=""
          width={56}
          height={56}
          loading="lazy"
          className="h-10 w-10 object-contain"
        />
      </span>
      <span>Anand Pipe Agencies</span>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────── */

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />

      {/* ══ HERO — walk into a luxury bathroom (drawn, not stock) ══ */}
      <section className="hero-water">
        <Image
          src={`${basePath}/luxury-bathroom-jacuzzi-hero.png`}
          alt="Luxury bathroom jacuzzi showroom display"
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="fx-shimmer" aria-hidden />
        <div className="hero-water-grade" aria-hidden />

        <div className="container-shell relative z-10 flex min-h-[min(92svh,860px)] items-end pb-16 pt-36">
          <div>
            <div className="flex items-center gap-3">
              <span className="brand-disc brand-disc--hero">
                <Image
                  src={`${basePath}/logo.png`}
                  alt="Anand Pipe Agencies logo"
                  width={96}
                  height={96}
                  priority
                  className="h-20 w-20 object-contain"
                />
              </span>
              <div>
                <p className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-3xl">
                  Anand Pipe Agencies
                </p>
                <p className="eyebrow eyebrow--water mt-1.5">Erode · Luxury Bath Showroom</p>
              </div>
            </div>
            <h1 className="display-1 mt-7">
              Step into<br />
              the water.
            </h1>
            <p className="lede mt-6">
              Erode&apos;s luxury bath showroom — Jaquar, Kohler and Parryware
              running live, plus every pipe, tank and pump behind them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="tel:+917305400590" className="btn btn-primary">
                <PhoneIcon className="h-4 w-4" />
                Call +91 73054 00590
              </Link>
              <Link
                href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
                target="_blank"
                className="btn btn-wa"
              >
                WhatsApp us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fact strip */}
      <div className="border-b border-[var(--line)]">
        <div className="container-shell py-6">
          <div className="fact-strip" style={{ borderTop: "none", borderBottom: "none", padding: 0 }}>
            <span><strong>3,500</strong> sq ft showroom</span>
            <span><strong>20+</strong> brands</span>
            <span><strong>Live</strong> jacuzzi demos</span>
            <span>Mon–Sat <strong>9:30–8:30</strong></span>
          </div>
        </div>
      </div>

      {/* ══ THE EXPERIENCE — feel the products (drawn scenes) ═ */}
      <section id="experience" className="spa-section" aria-label="Bath experiences">
        <div className="fx-shimmer" aria-hidden />
        <div className="container-shell relative">
          <RevealOnScroll>
            <p className="eyebrow eyebrow--water">The Anand Pipe Agencies Experience</p>
            <h2 className="h2 mt-3" style={{ color: "#F2FAFC" }}>
              Feel it before you fit it.
            </h2>
          </RevealOnScroll>

          {/* Jaquar — rain shower */}
          <div className="exp-row">
            <div className="exp-row-art">
              <div className="vignette-card">
                <Image
                  src={`${basePath}/showroom-shower-realistic.png`}
                  alt="Realistic rain shower display running in a premium showroom"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="experience-photo"
                />
                <ExpWatermark />
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow--water">Jaquar · Rain Showers &amp; Taps</p>
              <h3 className="exp-title">Stand under the rain.</h3>
              <p className="exp-text">
                Thermostatic rain showers and designer taps — running live in
                our demo bays, so you feel the flow before you choose.
              </p>
              <span className="exp-brand-chip">Jaquar</span>
            </div>
          </div>

          {/* Kohler — tub */}
          <div className="exp-row exp-row--flip">
            <div className="exp-row-art">
              <div className="vignette-card">
                <Image
                  src={`${basePath}/showroom-tub-realistic.png`}
                  alt="Realistic freestanding bathtub display with a chrome floor-mounted faucet"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="experience-photo"
                />
                <ExpWatermark />
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow--water">Kohler · Tubs &amp; Faucets</p>
              <h3 className="exp-title">Sink into stillness.</h3>
              <p className="exp-text">
                Freestanding tubs and sculpted faucets — quiet, warm and deep
                enough to end any day in.
              </p>
              <span className="exp-brand-chip">Kohler</span>
            </div>
          </div>

          {/* Parryware — basin */}
          <div className="exp-row">
            <div className="exp-row-art">
              <div className="vignette-card">
                <Image
                  src={`${basePath}/showroom-basin-realistic.png`}
                  alt="Realistic premium basin and faucet display in a showroom"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="experience-photo"
                />
                <ExpWatermark />
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow--water">Parryware · Basins &amp; Sanitaryware</p>
              <h3 className="exp-title">Begin every morning here.</h3>
              <p className="exp-text">
                Designer basins and coordinated sanitaryware that make the
                first splash of the day feel considered.
              </p>
              <span className="exp-brand-chip">Parryware</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BEYOND THE BATHROOM (3D showcase) ═════════════════ */}
      <section id="featured" className="hidden">
        <div className="container-shell">
          <div className="hidden">
            {/* Pipes — CSS-3D pipe, rotates 360° as you scroll */}
            <RevealOnScroll delayMs={80}>
              <div className="feature-panel">
                <div className="scene">
                  <div className="pipe-tilt">
                    <div className="hidden">
                      <div className="pipe-cap pipe-cap--top" style={{ width: 60, height: 60 }} />
                      <div className="pipe-cap pipe-cap--bottom" style={{ width: 60, height: 60 }} />
                    </div>
                    <div className="pipe-sheen" aria-hidden />
                  </div>
                </div>
                <div className="feature-cap">
                  <p className="eyebrow eyebrow--water">Pipes & Fittings</p>
                  <h3 className="feature-title">PVC, CPVC & UPVC systems</h3>
                  <p className="feature-text">
                    Full pipe ranges with every fitting, always in stock.
                  </p>
                  <div className="chips">
                    <span className="chip">Finolex</span>
                    <span className="chip">Ashirvad</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Tanks — CSS-3D tank, rotates 360° as you scroll */}
            <RevealOnScroll delayMs={160}>
              <div className="feature-panel">
                <div className="scene">
                  <div className="tank-tilt">
                    <div className="hidden">
                      <div className="tank-cap" style={{ width: 136, height: 136 }} />
                    </div>
                  </div>
                  <div className="tank-sheen" aria-hidden />
                </div>
                <div className="feature-cap">
                  <p className="eyebrow eyebrow--water">Water Tanks</p>
                  <h3 className="feature-title">Triple-layer storage tanks</h3>
                  <p className="feature-text">
                    Overhead and underground, in every capacity.
                  </p>
                  <div className="chips">
                    <span className="chip">Ashirvad</span>
                    <span className="chip chip--red">Oxford</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ══ THE WATER LINE ════════════════════════════════════ */}
      <section id="products" className="section-pad">
        <div className="container-shell">
          <RevealOnScroll className="mb-10">
            <p className="eyebrow">The Water Line</p>
            <h2 className="h2 mt-3">
              One shop for the whole journey.
            </h2>
          </RevealOnScroll>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_440px] xl:grid-cols-[minmax(0,1fr)_500px]">
          <div className="journey">
            <div className="spine" aria-hidden>
              <div className="spine-fill" />
            </div>
            {stations.map((s, i) => (
              <RevealOnScroll key={s.num} delayMs={i * 60}>
                <div className="station">
                  <div className="station-node">
                    <span className="font-mono text-[0.7rem] font-bold">{s.num}</span>
                  </div>
                  <div>
                    <p className="eyebrow eyebrow--water">{s.stage}</p>
                    <h3 className="station-title">{s.title}</h3>
                    <p className="station-text">{s.text}</p>
                    <div className="chips">
                      {s.brands.map((b) => (
                        <span key={b} className="chip">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="schematic-panel sticky top-24">
              <HeroSchematic />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ══ BRANDS ════════════════════════════════════════════ */}
      <section id="brands" className="section-pad border-y border-[var(--line)] bg-[var(--paper-2)]">
        <div className="container-shell">
          <RevealOnScroll className="mb-8">
            <p className="eyebrow">Brand Partners</p>
            <h2 className="h2 mt-3">Every brand, verified.</h2>
          </RevealOnScroll>
          <RevealOnScroll delayMs={80}>
            <BrandGrid />
          </RevealOnScroll>
        </div>
      </section>

      {/* ══ SHOWROOM ══════════════════════════════════════════ */}
      <section id="showroom" className="section-pad">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="parallax">
              <Image
                src={`${basePath}/showroom-hero-realistic.png`}
                alt="Realistic view of bath fittings, bathtub and shower displays in a premium showroom"
                width={1536}
                height={864}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="showroom-photo"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delayMs={100}>
            <p className="eyebrow">The Showroom</p>
            <h2 className="h2 mt-3">See it running before you buy.</h2>
            <p className="lede mt-5">
              Working demo zones on a 3,500 sq ft floor — test a rain shower,
              watch a jacuzzi run, compare full pipe ranges side by side.
            </p>
            <div className="mt-6">
              <div className="tick-row">
                <span className="tick-key">Demos</span>
                <span className="tick-val">Live jacuzzi, rain shower and tap displays</span>
              </div>
              <div className="tick-row">
                <span className="tick-key">Range</span>
                <span className="tick-val">Six categories, standard to luxury pricing</span>
              </div>
              <div className="tick-row">
                <span className="tick-key">Help</span>
                <span className="tick-val">Guidance for homeowners, designers and contractors</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══ VISIT (basin) ═════════════════════════════════════ */}
      <svg className="wave-top" viewBox="0 0 1440 44" preserveAspectRatio="none" aria-hidden>
        <path
          d="M0 44 L0 24 C240 4 480 4 720 20 C960 36 1200 36 1440 16 L1440 44 Z"
          fill="var(--basin)"
        />
      </svg>
      <section id="visit" className="basin pb-10 pt-16">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <RevealOnScroll>
              <p className="eyebrow eyebrow--water">End of the Line</p>
              <h2 className="h2 mt-3">Plan your visit.</h2>
              <p className="basin-muted mt-5 max-w-sm text-[0.95rem] leading-7">
                Ask about stock, get a quote, or walk the floor —
                we&apos;re near CD Building on APT Road.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="tel:+917305400590" className="btn btn-wa">
                  <PhoneIcon className="h-4 w-4" />
                  Call now
                </Link>
                <Link
                  href="https://maps.app.goo.gl/3uA7K8H7PvvGow5z6"
                  target="_blank"
                  className="btn btn-light"
                >
                  <MapPinIcon className="h-4 w-4" />
                  Open in Maps
                </Link>
              </div>

              <div className="basin-card mt-8">
                <p className="text-sm font-semibold text-white">Anand Pipe Agencies</p>
                <p className="basin-muted mt-1 text-sm leading-6">
                  143 APT Road, Near CD Building,<br />
                  Erode – 638001, Tamil Nadu
                </p>
                <div className="mt-4">
                  <div className="hours-row">
                    <span className="basin-muted">Monday – Saturday</span>
                    <span className="font-semibold text-white">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="basin-muted">Sunday</span>
                    <span className="font-semibold text-white">Holiday</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100}>
              <MapEmbed />
            </RevealOnScroll>
          </div>

          {/* Footer */}
          <footer className="mt-14 flex flex-col gap-3 border-t border-[rgba(234,246,250,0.12)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={`${basePath}/logo.png`}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 object-contain"
              />
              <p className="text-xs text-[rgba(234,246,250,0.5)]">
                © {new Date().getFullYear()} Anand Pipe Agencies
              </p>
            </div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[rgba(234,246,250,0.4)]">
              Pumps · Pipes · Tanks · Bath — Erode
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
