import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BoltIcon,
  BuildingStorefrontIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  ClockIcon,
  CloudArrowDownIcon,
  CubeIcon,
  HomeModernIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import { BrandGrid } from "@/components/brand-grid";
import type { Brand } from "@/components/brand-grid";
import { Navbar } from "@/components/navbar";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

/* ── Data ─────────────────────────────────────────────────── */

const categories = [
  {
    title: "Bath Fittings & Taps",
    description:
      "Premium mixers, single-lever faucets, concealed bodies and coordinated bath accessories for every style.",
    Icon: HomeModernIcon,
    brands: ["Kohler", "Jaquar", "Parryware", "Gravity"],
    bg: "bg-teal-50/80",
    border: "border-teal-100",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    pillBg: "bg-white/80",
  },
  {
    title: "Sanitaryware",
    description:
      "Designer wash basins, wall-hung WCs, cisterns and matching suite pieces for contemporary bathrooms.",
    Icon: SwatchIcon,
    brands: ["Kohler", "Parryware", "American Standard", "Gravity"],
    bg: "bg-blue-50/80",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    pillBg: "bg-white/80",
  },
  {
    title: "Showers & Jacuzzi",
    description:
      "Rain shower heads, thermostatic panels, steam units and fully-fitted luxury jacuzzi systems on live display.",
    Icon: CloudArrowDownIcon,
    brands: [],
    bg: "bg-indigo-50/80",
    border: "border-indigo-100",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    pillBg: "bg-white/80",
  },
  {
    title: "Pipes & Fittings",
    description:
      "PVC, CPVC and UPVC pipe systems, solvent cements, compression fittings and all plumbing accessories.",
    Icon: WrenchScrewdriverIcon,
    brands: ["Finolex", "Ashirvad", "Avonplast"],
    bg: "bg-slate-50/80",
    border: "border-slate-200",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    pillBg: "bg-white/80",
  },
  {
    title: "Water Storage Tanks",
    description:
      "Triple-layer overhead and underground tanks in all capacities for residential and commercial use.",
    Icon: CubeIcon,
    brands: ["Aquatech", "Ashirvad", "Avonplast"],
    bg: "bg-cyan-50/80",
    border: "border-cyan-100",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    pillBg: "bg-white/80",
  },
  {
    title: "Pumps & Motors",
    description:
      "High-efficiency water pumps and motors for domestic, agricultural and industrial applications.",
    Icon: BoltIcon,
    brands: ["Suguna", "Piller", "Leader", "Bindhu"],
    bg: "bg-amber-50/80",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    pillBg: "bg-white/80",
  },
];

const bathBrands: Brand[] = [
  { name: "Kohler",            image: "/Kohler.png" },
  { name: "Parryware",         image: "/parryware.png",          size: "large" },
  { name: "American Standard", image: "/american-standard.png",  tone: "soft", size: "xl" },
  { name: "Jaquar ESSCO",      image: "/Jaguar-ESSCO.jpg",        size: "large" },
  { name: "Plato",             image: "/plato.png",               tone: "dark" },
  { name: "Gravity",           image: "/Gravity.png" },
  { name: "Neelkund",          image: "/Neelkund.png" },
  { name: "Premium Collections" },
];

const pipeBrands: Brand[] = [
  { name: "Finolex",   image: "/finolex.png" },
  { name: "Ashirvad",  image: "/ashirvad.png" },
  { name: "Avonplast", image: "/Avonplast.png" },
  { name: "Trusted Pipe Systems" },
];

const tankBrands: Brand[] = [
  { name: "Aquatech",  image: "/aquatech.png" },
  { name: "Ashirvad",  image: "/ashirvad.png" },
  { name: "Avonplast", image: "/Avonplast.png" },
  { name: "Smart Storage Range" },
];

const pumpBrands: Brand[] = [
  { name: "Suguna",        image: "/Suguna.png" },
  { name: "Piller Pumps",  badgeStyle: "navy" },
  { name: "Leader Pumps",  badgeStyle: "teal" },
  { name: "Bindhu Pumps",  badgeStyle: "slate" },
];

const whyChooseUs = [
  {
    icon: BuildingStorefrontIcon,
    stat: "3,500",
    unit: "sq ft",
    title: "Spacious Showroom",
    description:
      "Browse and compare products in a large, thoughtfully organised display space — no pressure, at your own pace.",
  },
  {
    icon: SparklesIcon,
    stat: "Live",
    unit: "demos",
    title: "Live Demo Zones",
    description:
      "See jacuzzis, rain showers and bath fittings working in real display setups before you decide.",
  },
  {
    icon: CheckBadgeIcon,
    stat: "20+",
    unit: "brands",
    title: "Trusted Brands Only",
    description:
      "Every product on our floor is from a verified brand — no compromise on quality or warranty.",
  },
  {
    icon: SwatchIcon,
    stat: "Free",
    unit: "guidance",
    title: "Expert Guidance",
    description:
      "Our knowledgeable staff help homeowners, interior designers and contractors choose the right products.",
  },
];

const testimonials = [
  {
    name: "Verified Customer",
    role: "Home Renovation",
    text: "Renovating our bathroom was a big decision. The team helped us select coordinated fittings and sanitaryware that matched our design vision perfectly. The live demos in the showroom were a big help.",
  },
  {
    name: "Design Professional",
    role: "Interior Projects",
    text: "The range covers every price point, from standard to luxury. The showroom display helps clients visualise products before committing, which makes consultations much smoother.",
  },
  {
    name: "Project Customer",
    role: "Building Supplies",
    text: "For building projects in Erode and surrounding areas, this is a reliable stop for pipes, bath fittings and plumbing essentials. Reliable stock, competitive pricing and a team that understands project timelines.",
  },
];

const quickLinks = [
  { href: "#products",  label: "Products" },
  { href: "#showroom",  label: "Showroom" },
  { href: "#why-us",    label: "Why Choose Us" },
  { href: "#reviews",   label: "Reviews" },
  { href: "#contact",   label: "Contact" },
  { href: "#location",  label: "Location" },
];

/* ── Wave helpers ────────────────────────────────────────── */
function WaveDown({ fillClass }: { fillClass: string }) {
  return (
    <div className="wave-divider pointer-events-none">
      <svg
        viewBox="0 0 1440 64"
        xmlns="http://www.w3.org/2000/svg"
        className={`block w-full ${fillClass}`}
        preserveAspectRatio="none"
        style={{ height: 64, display: "block" }}
      >
        <path
          d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function WaveUp({ fillClass }: { fillClass: string }) {
  return (
    <div className="wave-divider pointer-events-none">
      <svg
        viewBox="0 0 1440 64"
        xmlns="http://www.w3.org/2000/svg"
        className={`block w-full ${fillClass}`}
        preserveAspectRatio="none"
        style={{ height: 64, display: "block" }}
      >
        <path
          d="M0,32 C240,0 480,64 720,32 C960,0 1200,64 1440,32 L1440,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <main id="top">
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section
        className="hero-bg relative overflow-hidden"
        style={
          {
            "--hero-bg-image": `url("${basePath}/luxury-bathroom-jacuzzi-hero.png")`,
          } as React.CSSProperties
        }
      >
        <div className="bathroom-live-bg" aria-hidden />

        <div className="container-shell relative flex min-h-[calc(100svh-4.5rem)] items-center py-12 sm:py-16 lg:py-36">
          <RevealOnScroll>
            <div className="hero-copy-panel">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="hero-logo-mark">
                  <Image
                    src="/anand_logo.png"
                    alt="Anand Pipes logo"
                    width={128}
                    height={128}
                    priority
                    className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                  />
                </div>
                <div className="min-w-0">
                  <div>
                    <p className="hero-brand-name text-3xl font-black leading-none sm:text-5xl lg:text-[3.45rem]">
                      Anand Pipes
                    </p>
                    <div className="mt-2 h-1 w-24 rounded-full bg-linear-to-r from-amber-300 via-white to-sky-300 sm:w-32" />
                  </div>
                </div>
              </div>

              <h1 className="hero-support-headline mt-7 max-w-2xl text-2xl font-medium leading-[1.18] tracking-tight sm:text-3xl md:text-4xl lg:text-[2.6rem]">
                Complete Bathroom &amp; Plumbing Solutions
                <br className="hidden sm:block" />
                <span className="hero-headline-accent">for Homes, Builders &amp; Projects</span>
              </h1>

              <p className="hero-intro-copy mt-5 max-w-xl text-sm font-medium leading-7 sm:text-base sm:leading-8 lg:text-[1.08rem]">
                Explore premium sanitaryware, faucets, showers, pipes, tanks and pumps in a
                3,500&nbsp;sq&nbsp;ft Erode showroom with live jacuzzi demos, trusted brands and
                practical guidance before you buy.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
                <Link href="tel:+917305400590" className="btn-amber">
                  <PhoneIcon className="h-4 w-4" />
                  Call Now
                </Link>
                <Link
                  href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
                  target="_blank"
                  className="btn-ghost-white"
                >
                  <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                  WhatsApp Us
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3">
                {[
                  { value: "3,500", label: "Sq ft Display" },
                  { value: "20+",   label: "Trusted Brands" },
                  { value: "Live",  label: "Jacuzzi Demos" },
                ].map((s) => (
                  <div key={s.label} className="stat-pill">
                    <div className="text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="mt-0.5 text-xs font-semibold text-sky-100">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <WaveDown fillClass="text-[#dff0fb]" />
      </section>

      {/* ══ TRUST BAR ═════════════════════════════════════════ */}
      <div className="trust-bar">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BuildingStorefrontIcon,
                value: "3,500 sq ft",
                label: "Dedicated Showroom",
              },
              {
                icon: SparklesIcon,
                value: "Live Demos",
                label: "Jacuzzi & Shower Displays",
              },
              {
                icon: CheckBadgeIcon,
                value: "20+ Brands",
                label: "Verified Premium Brands",
              },
              {
                icon: SwatchIcon,
                value: "Free Guidance",
                label: "Expert Design Support",
              },
            ].map(({ icon: Icon, value, label }) => (
              <div key={value} className="trust-item">
                <div className="trust-icon-box">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{value}</p>
                  <p className="text-[11px] text-slate-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ PRODUCTS ══════════════════════════════════════════ */}
      <section id="products" className="section-pad section-soft">
        <div className="container-shell">

          {/* Section header */}
          <RevealOnScroll className="mb-12">
            <span className="section-label">Our Products</span>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
              Complete home water solutions
            </h2>
            <p className="mt-4 max-w-2xl text-base text-gray-600">
              From luxury showers to plumbing essentials — six product categories covering
              every need for home, building and commercial projects.
            </p>
          </RevealOnScroll>

          {/* Category cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => {
              const { Icon } = cat;
              return (
                <RevealOnScroll key={cat.title} delayMs={i * 60}>
                  <div
                    className={`cat-card h-full rounded-2xl border p-6 ${cat.bg} ${cat.border}`}
                  >
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${cat.iconBg}`}
                    >
                      <Icon className={`h-5 w-5 ${cat.iconColor}`} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-[1.65] text-gray-600">{cat.description}</p>
                    {cat.brands.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {cat.brands.map((brand) => (
                          <span
                            key={brand}
                            className="rounded-full border border-gray-200/80 bg-white/70 px-2.5 py-0.5 text-[10px] font-semibold text-gray-600"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* Sub-section divider */}
          <RevealOnScroll>
            <div className="sub-section-divider mt-16">
              <span className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Our Brand Partners
              </span>
            </div>
          </RevealOnScroll>

          {/* Brand grids */}
          <div className="flex flex-col gap-4">
            <RevealOnScroll>
              <BrandGrid
                title="Bath Fittings &amp; Sanitaryware"
                description="Premium bath fittings, showers, sanitaryware and accessories for every home and project."
                brands={bathBrands}
              />
            </RevealOnScroll>
            <RevealOnScroll delayMs={60}>
              <BrandGrid
                title="Pipes &amp; Fittings"
                description="PVC, CPVC and UPVC pipes, fittings and accessories for plumbing and construction."
                brands={pipeBrands}
              />
            </RevealOnScroll>
            <RevealOnScroll delayMs={90}>
              <BrandGrid
                title="Water Tanks"
                description="Durable water storage tanks for residential and commercial use — multiple capacities in stock."
                brands={tankBrands}
              />
            </RevealOnScroll>
            <RevealOnScroll delayMs={120}>
              <BrandGrid
                title="Pumps &amp; Motors"
                description="Water pumps and motors for home, agriculture and industrial needs."
                brands={pumpBrands}
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <WaveUp fillClass="text-[#dff0fb]" />

      {/* ══ SHOWROOM ══════════════════════════════════════════ */}
      <section id="showroom" className="section-pad section-white">
        <div className="container-shell">
          <RevealOnScroll className="max-w-3xl">
            <span className="section-label">Showroom Experience</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
              See it working before you buy
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Our 3,500&nbsp;sq&nbsp;ft showroom is designed so customers can explore at their
              own pace. Browse coordinated bath collections, compare PVC and CPVC pipe ranges, and
              watch fittings work in live display zones — all before making a decision.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-2xl">
              {[
                { value: "3,500", label: "Sq ft floor area" },
                { value: "Live",  label: "Jacuzzi &amp; bath demo" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5"
                >
                  <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
                  <div
                    className="mt-1 text-xs font-bold uppercase tracking-widest text-blue-600"
                    dangerouslySetInnerHTML={{ __html: s.label }}
                  />
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={100}>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  Icon: SparklesIcon,
                  text: "Live jacuzzi, rain shower and bath fitting demonstrations in a dedicated display zone.",
                },
                {
                  Icon: SwatchIcon,
                  text: "Thoughtfully arranged sanitaryware and bath collections for easy visual comparison.",
                },
                {
                  Icon: WrenchScrewdriverIcon,
                  text: "Expert guidance for homeowners, contractors and interior-driven renovation projects.",
                },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex min-h-40 items-start gap-3.5 rounded-2xl border border-blue-100/80 bg-blue-50/50 p-5"
                >
                  <div className="icon-box mt-0.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-7 text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <WaveDown fillClass="text-[#dff0fb]" />

      {/* ══ WHY CHOOSE US ════════════════════════════════════ */}
      <section id="why-us" className="section-pad section-soft">
        <div className="container-shell">
          <RevealOnScroll className="mb-12 text-center">
            <span className="section-label mx-auto">Why Choose Us</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
              What makes us Erode's first choice
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
              Built for customers who want quality products, trusted brands and a comfortable,
              informed buying experience from start to finish.
            </p>
          </RevealOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.title} delayMs={i * 75}>
                  <div className="card-white flex h-full flex-col rounded-2xl p-6 lg:rounded-3xl lg:p-7">
                    <div className="icon-box">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-3xl font-extrabold text-gray-900">{item.stat}</span>
                      <span className="mb-0.5 text-sm font-bold text-blue-600">{item.unit}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <WaveUp fillClass="text-[#dff0fb]" />

      {/* ══ CTA BANNER ════════════════════════════════════════ */}
      <section className="section-white py-8">
        <div className="container-shell">
          <RevealOnScroll>
            <div className="card-dark relative overflow-hidden rounded-2xl p-7 lg:rounded-3xl lg:p-10">
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="orb-pulse absolute -left-10 top-0 h-48 w-48 rounded-full bg-blue-600/22 blur-[56px]" />
                <div className="orb-pulse-slow absolute -right-6 bottom-0 h-36 w-36 rounded-full bg-cyan-500/18 blur-[48px]" />
              </div>

              <div className="relative grid gap-8 md:grid-cols-3">
                {[
                  {
                    Icon: BuildingStorefrontIcon,
                    title: "One-Stop Shop",
                    body: "Bath fittings, pipes, tanks and pumps — everything in one 3,500 sq ft showroom in Erode.",
                  },
                  {
                    Icon: CheckBadgeIcon,
                    title: "Quality You Can Trust",
                    body: "Only verified, reputable brands on our floor — no compromise on performance or warranty.",
                  },
                  {
                    Icon: SparklesIcon,
                    title: "Premium Experience",
                    body: "Clean layouts, live product demos and expert staff who understand your project needs.",
                  },
                ].map(({ Icon, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="icon-box-dark shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-sky-200">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════ */}
      <section id="reviews" className="section-pad section-white">
        <div className="container-shell">
          <RevealOnScroll className="mb-12 text-center">
            <span className="section-label mx-auto">Customer Reviews</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
              Trusted by homeowners &amp; builders
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
              From first-time renovators to experienced contractors — see what customers say
              about shopping with us.
            </p>
          </RevealOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delayMs={i * 80}>
                <div className="testimonial-card flex h-full flex-col">
                  {/* Stars */}
                  <div className="mb-4 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <StarIcon key={s} className="h-4 w-4 text-amber-400" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="flex-1 text-sm italic leading-7 text-gray-600">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════ */}
      <section id="contact" className="section-pad section-white pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Dark card — Contact + Hours */}
          <RevealOnScroll>
            <div className="card-dark relative h-full overflow-hidden rounded-2xl p-7 lg:rounded-3xl lg:p-10">
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="orb-pulse absolute -left-8 top-0 h-56 w-56 rounded-full bg-blue-600/25 blur-[64px]" />
                <div className="orb-pulse-slow absolute bottom-0 right-0 h-40 w-40 rounded-full bg-indigo-500/20 blur-[48px]" />
              </div>

              <div className="relative flex h-full flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-300">
                  Contact Us
                </p>

                <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
                  Plan your visit or get in touch
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-sky-100">
                  Ask about product availability, get a quote or simply come visit the showroom.
                  Our team is here to help you choose right.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="tel:+917305400590" className="btn-amber">
                    <PhoneIcon className="h-4 w-4" />
                    Call Now
                  </Link>
                  <Link
                    href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
                    target="_blank"
                    className="btn-ghost-white"
                  >
                    <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                    WhatsApp
                  </Link>
                </div>

                {/* Showroom hours */}
                <div className="mt-8 rounded-xl border border-white/10 bg-white/6 p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-sky-300" />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                      Showroom Hours
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { day: "Monday – Saturday", hours: "9:30 AM – 8:30 PM" },
                      { day: "Sunday",            hours: "Holiday" },
                    ].map(({ day, hours }) => (
                      <div key={day} className="hours-row">
                        <span className="text-sky-200">{day}</span>
                        <span className="font-semibold text-white">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/6 p-4 text-xs leading-6 text-sky-300">
                  Sales support: <span className="font-bold text-white">+91 7305400590</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Address card */}
          <RevealOnScroll delayMs={120}>
            <div className="card-white flex h-full flex-col rounded-2xl p-7 lg:rounded-3xl lg:p-10">
              <span className="section-label">Visit Us</span>

              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-gray-900 lg:text-2xl">
                Come see us in Erode
              </h3>

              <div className="mt-6 flex items-start gap-3.5">
                <div className="icon-box mt-0.5">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Anand Pipe Agencies</p>
                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    143 APT Road, Near CD Building,
                    <br />
                    Erode – 638001, Tamil Nadu
                  </p>
                </div>
              </div>

              <hr className="soft-divider my-6" />

              <p className="text-sm leading-7 text-gray-600">
                Centrally located in Erode — easy to reach for homeowners, builders and
                contractors from across the region. Ample space for parking.
              </p>

              {/* Quick directions chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["Near CD Building", "APT Road", "Erode City"].map((loc) => (
                  <span
                    key={loc}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                  >
                    {loc}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8 flex flex-wrap gap-3">
                <Link
                  href="https://maps.app.goo.gl/3uA7K8H7PvvGow5z6"
                  target="_blank"
                  className="btn-outline"
                >
                  <MapPinIcon className="h-4 w-4" />
                  Open in Maps
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══ LOCATION MAP ══════════════════════════════════════ */}
      <section id="location" className="pb-10 pt-0 section-white">
        <div className="container-shell">
          <RevealOnScroll>
            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm lg:rounded-3xl">
              <iframe
                title="Google Maps – Anand Pipe Agencies, Erode"
                src="https://www.google.com/maps?q=11.349772,77.723527&z=16&output=embed"
                width="100%"
                height="340"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 lg:h-[420px]"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════ */}
      <footer className="bg-[#07111f]">
        <div className="container-shell py-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr_0.9fr]">

            {/* Brand */}
            <div>
              <Image
                src="/anand_logo.png"
                alt="Anand Pipe Agencies"
                width={220}
                height={72}
                loading="lazy"
                className="h-11 w-auto object-contain brightness-0 invert"
              />
              <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
                Erode's complete destination for bath fittings, sanitaryware, PVC &amp; CPVC pipes,
                water tanks and pumps.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="tel:+917305400590"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/14 hover:text-white"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  Call
                </Link>
                <Link
                  href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-500 to-amber-400 px-4 py-2 text-xs font-bold text-white shadow shadow-amber-500/20"
                >
                  WhatsApp
                </Link>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Quick Links
              </h3>
              <nav className="mt-4 flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Product categories */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Categories
              </h3>
              <div className="mt-4 flex flex-col gap-2.5">
                {[
                  "Bath Fittings & Taps",
                  "Sanitaryware",
                  "Showers & Jacuzzi",
                  "Pipes & Fittings",
                  "Water Tanks",
                  "Pumps & Motors",
                ].map((cat) => (
                  <a
                    key={cat}
                    href="#products"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            {/* Address + hours */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Address
              </h3>
              <div className="mt-4 flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <p className="text-sm leading-7 text-slate-400">
                  143 APT Road, Near CD Building,
                  <br />
                  Erode – 638001, Tamil Nadu
                </p>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <div className="text-sm leading-7 text-slate-400">
                  <p>Mon–Sat: 9:30 AM – 8:30 PM</p>
                  <p>Sunday: Holiday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Anand Pipe Agencies. All rights reserved.
            </p>
            <p className="text-xs text-slate-600">
              Bath Fittings · Pipes · Tanks · Pumps — Erode
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
