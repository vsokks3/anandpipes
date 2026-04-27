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
  image: "https://anandpipes.in/anand_logo.png",
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

const categories = [
  {
    num: "01",
    title: "Bath Fittings & Taps",
    description:
      "Premium mixers, single-lever faucets, concealed bodies and coordinated bath accessories for every style.",
    Icon: HomeModernIcon,
    brands: ["Kohler", "Jaquar", "Parryware", "Gravity"],
  },
  {
    num: "02",
    title: "Sanitaryware",
    description:
      "Designer wash basins, wall-hung WCs, cisterns and matching suite pieces for contemporary bathrooms.",
    Icon: SwatchIcon,
    brands: ["Kohler", "Parryware", "American Standard", "Gravity"],
  },
  {
    num: "03",
    title: "Showers & Jacuzzi",
    description:
      "Rain shower heads, thermostatic panels, steam units and fully-fitted luxury jacuzzi systems on live display.",
    Icon: CloudArrowDownIcon,
    brands: [],
  },
  {
    num: "04",
    title: "Pipes & Fittings",
    description:
      "PVC, CPVC and UPVC pipe systems, solvent cements, compression fittings and all plumbing accessories.",
    Icon: WrenchScrewdriverIcon,
    brands: ["Finolex", "Ashirvad", "Avonplast"],
  },
  {
    num: "05",
    title: "Water Storage Tanks",
    description:
      "Triple-layer overhead and underground tanks in all capacities for residential and commercial use.",
    Icon: CubeIcon,
    brands: ["Aquatech", "Ashirvad", "Avonplast"],
  },
  {
    num: "06",
    title: "Pumps & Motors",
    description:
      "High-efficiency water pumps and motors for domestic, agricultural and industrial applications.",
    Icon: BoltIcon,
    brands: ["Suguna", "Piller", "Leader", "Bindhu"],
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

/* ── Thin ruled divider ────────────────────────────────── */
function RuledDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-[#E2D8CC]" />
      <div className="h-1 w-1 rounded-full bg-[#C4963A] opacity-60" />
      <div className="h-px flex-1 bg-[#E2D8CC]" />
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

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section
        className="hero-bg"
        style={{ "--hero-bg-image": `url("${basePath}/luxury-bathroom-jacuzzi-hero.png")` } as React.CSSProperties}
      >
        <div className="hero-image-bg" aria-hidden />
        <div className="hero-overlay" aria-hidden />

        <div className="container-shell relative z-10 flex min-h-[calc(100svh-4.5rem)] items-center py-16 sm:py-20 lg:py-36">
          <RevealOnScroll>
            <div className="hero-content">

              {/* Eyebrow */}
              <div className="hero-eyebrow mb-6">
                Erode&apos;s Premium Showroom
              </div>

              {/* Logo + Brand name */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="hero-logo-ring">
                  <Image
                    src={`${basePath}/anand_logo.png`}
                    alt="Anand Pipes logo"
                    width={256}
                    height={256}
                    priority
                    className="logo-gold-glow h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="hero-brand-line">Anand Pipes</p>
                  <div className="hero-gold-rule" />
                </div>
              </div>

              {/* Headline */}
              <h1 className="hero-display mt-8 text-4xl sm:text-5xl lg:text-[3.6rem]">
                Curated Luxury<br className="hidden sm:block" />
                <em> for Beautiful Bathrooms</em>
              </h1>

              <p className="hero-body mt-5">
                Explore premium sanitaryware, faucets, showers, pipes, tanks and pumps
                in a 3,500&nbsp;sq&nbsp;ft Erode showroom with live jacuzzi demos, trusted
                brands and practical guidance before you buy.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="tel:+917305400590" className="btn-gold">
                  <PhoneIcon className="h-4 w-4" />
                  Call Now
                </Link>
                <Link
                  href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
                  target="_blank"
                  className="btn-ghost-light"
                >
                  <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                  WhatsApp Us
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { value: "3,500", label: "Sq ft Display" },
                  { value: "20+",   label: "Trusted Brands" },
                  { value: "Live",  label: "Jacuzzi Demos" },
                ].map((s) => (
                  <div key={s.label} className="hero-stat">
                    <div className="hero-stat-value">{s.value}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══ TRUST BAR ═════════════════════════════════════════ */}
      <div className="trust-bar">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BuildingStorefrontIcon, value: "3,500 sq ft", label: "Dedicated Showroom" },
              { icon: SparklesIcon,           value: "Live Demos",  label: "Jacuzzi & Shower Displays" },
              { icon: CheckBadgeIcon,         value: "20+ Brands",  label: "Verified Premium Brands" },
              { icon: SwatchIcon,             value: "Free Guidance", label: "Expert Design Support" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={value} className="trust-item">
                <div className="trust-icon-box">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="trust-value">{value}</p>
                  <p className="trust-label">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ PRODUCTS ══════════════════════════════════════════ */}
      <section id="products" className="section-pad section-cream">
        <div className="container-shell">

          <RevealOnScroll className="mb-14">
            <span className="section-label">Our Products</span>
            <h2 className="section-heading mt-4 text-4xl lg:text-5xl">
              Complete home water solutions
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#7B6F61]">
              From luxury showers to plumbing essentials — six product categories covering
              every need for home, building and commercial projects.
            </p>
          </RevealOnScroll>

          {/* Category cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => {
              const { Icon } = cat;
              return (
                <RevealOnScroll key={cat.title} delayMs={i * 70}>
                  <div className="cat-card h-full rounded-2xl p-6 lg:rounded-3xl lg:p-7">
                    <div className="flex items-start justify-between gap-2">
                      <div className="cat-icon-box">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="cat-number">{cat.num}</span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#1A1410]">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#7B6F61]">{cat.description}</p>
                    {cat.brands.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {cat.brands.map((brand) => (
                          <span
                            key={brand}
                            className="rounded-full border border-[rgba(196,150,58,0.20)] bg-[#FBF5E6] px-2.5 py-0.5 text-[10px] font-semibold text-[#9A7428]"
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

          {/* Brand grids */}
          <RevealOnScroll>
            <RuledDivider className="my-16" />
            <div className="mb-3 text-center">
              <span className="section-label mx-auto">Our Brand Partners</span>
            </div>
          </RevealOnScroll>

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

      {/* ══ SHOWROOM ══════════════════════════════════════════ */}
      <section id="showroom" className="section-pad section-white">
        <div className="container-shell">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <RevealOnScroll>
              <span className="section-label">Showroom Experience</span>
              <h2 className="section-heading mt-4 text-4xl lg:text-5xl">
                See it working<br />
                <em>before you buy</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#7B6F61]">
                Our 3,500&nbsp;sq&nbsp;ft showroom is designed so customers can explore at their
                own pace. Browse coordinated bath collections, compare PVC and CPVC pipe ranges,
                and watch fittings work in live display zones — all before making a decision.
              </p>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { value: "3,500", label: "Sq ft floor area" },
                  { value: "Live",  label: "Jacuzzi & bath demo" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-[#E2D8CC] bg-[#FAF8F3] p-5"
                  >
                    <div className="showroom-stat-value">{s.value}</div>
                    <div className="showroom-stat-label"
                      dangerouslySetInnerHTML={{ __html: s.label }}
                    />
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100}>
              <div className="flex flex-col gap-4">
                {[
                  {
                    Icon: SparklesIcon,
                    title: "Live Demonstrations",
                    text: "Live jacuzzi, rain shower and bath fitting demonstrations in a dedicated display zone.",
                  },
                  {
                    Icon: SwatchIcon,
                    title: "Curated Collections",
                    text: "Thoughtfully arranged sanitaryware and bath collections for easy visual comparison.",
                  },
                  {
                    Icon: WrenchScrewdriverIcon,
                    title: "Expert Guidance",
                    text: "Expert guidance for homeowners, contractors and interior-driven renovation projects.",
                  },
                ].map(({ Icon, title, text }) => (
                  <div
                    key={title}
                    className="card-warm flex items-start gap-4 rounded-2xl p-5"
                  >
                    <div className="icon-box mt-0.5 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1410]">{title}</p>
                      <p className="mt-1.5 text-sm leading-7 text-[#7B6F61]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ════════════════════════════════════ */}
      <section id="why-us" className="section-pad section-cream-alt">
        <div className="container-shell">
          <RevealOnScroll className="mb-14 text-center">
            <span className="section-label mx-auto">Why Choose Us</span>
            <h2 className="section-heading mt-4 text-4xl lg:text-5xl">
              What makes us Erode&apos;s first choice
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#7B6F61]">
              Built for customers who want quality products, trusted brands and a comfortable,
              informed buying experience from start to finish.
            </p>
          </RevealOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.title} delayMs={i * 80}>
                  <div className="card-warm flex h-full flex-col rounded-2xl p-6 lg:rounded-3xl lg:p-8">
                    <div className="icon-box">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-6">
                      <div className="why-stat">{item.stat}</div>
                      <div className="why-unit">{item.unit}</div>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#1A1410]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#7B6F61]">{item.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════ */}
      <section className="section-white py-8">
        <div className="container-shell">
          <RevealOnScroll>
            <div className="card-dark relative overflow-hidden rounded-2xl p-8 lg:rounded-3xl lg:p-12">
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="orb-pulse absolute -left-12 top-0 h-56 w-56 rounded-full bg-[#C4963A]/15 blur-[64px]" />
                <div className="orb-pulse-slow absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-[#2C4B6A]/20 blur-[52px]" />
              </div>

              <div className="relative grid gap-10 md:grid-cols-3">
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
                ].map(({ Icon, title, body }, i) => (
                  <div key={title} className={`flex items-start gap-4 ${i > 0 ? "md:border-l md:border-[rgba(196,150,58,0.12)] md:pl-10" : ""}`}>
                    <div className="icon-box-dark shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#FAF5EB]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[rgba(250,245,235,0.60)]">{body}</p>
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
          <RevealOnScroll className="mb-14 text-center">
            <span className="section-label mx-auto">Customer Reviews</span>
            <h2 className="section-heading mt-4 text-4xl lg:text-5xl">
              Trusted by homeowners &amp; builders
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#7B6F61]">
              From first-time renovators to experienced contractors — see what customers say
              about shopping with us.
            </p>
          </RevealOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delayMs={i * 90}>
                <div className="testimonial-card flex h-full flex-col">
                  {/* Stars */}
                  <div className="mb-3 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <StarIcon key={s} className="h-4 w-4 text-[#C4963A]" />
                    ))}
                  </div>

                  {/* Large quote mark */}
                  <div className="testimonial-quote-mark mb-1">&ldquo;</div>

                  {/* Quote */}
                  <p className="testimonial-text flex-1">{t.text}</p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#E2D8CC] pt-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FBF5E6] text-sm font-semibold text-[#9A7428]">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1410]">{t.name}</p>
                      <p className="text-xs text-[#7B6F61]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════ */}
      <section id="contact" className="section-pad section-cream-alt pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Dark card — Contact + Hours */}
          <RevealOnScroll>
            <div className="card-dark relative h-full overflow-hidden rounded-2xl p-7 lg:rounded-3xl lg:p-10">
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="orb-pulse absolute -left-10 top-0 h-56 w-56 rounded-full bg-[#C4963A]/12 blur-[64px]" />
                <div className="orb-pulse-slow absolute bottom-0 right-0 h-44 w-44 rounded-full bg-[#2C4B6A]/18 blur-[52px]" />
              </div>

              <div className="relative flex h-full flex-col">
                <span className="section-label" style={{ color: "var(--gold)" }}>Contact Us</span>

                <h2 className="section-heading mt-5 text-2xl text-[#FAF5EB] lg:text-3xl">
                  Plan your visit<br />
                  <em>or get in touch</em>
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[rgba(250,245,235,0.65)]">
                  Ask about product availability, get a quote or simply come visit the showroom.
                  Our team is here to help you choose right.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="tel:+917305400590" className="btn-gold">
                    <PhoneIcon className="h-4 w-4" />
                    Call Now
                  </Link>
                  <Link
                    href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
                    target="_blank"
                    className="btn-ghost-light"
                  >
                    <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                    WhatsApp
                  </Link>
                </div>

                {/* Showroom hours */}
                <div className="mt-8 rounded-xl border border-[rgba(196,150,58,0.18)] bg-[rgba(196,150,58,0.06)] p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-[#C4963A]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4963A]">
                      Showroom Hours
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { day: "Monday – Saturday", hours: "9:30 AM – 8:30 PM" },
                      { day: "Sunday",            hours: "Holiday" },
                    ].map(({ day, hours }) => (
                      <div key={day} className="hours-row">
                        <span className="text-[rgba(250,245,235,0.60)]">{day}</span>
                        <span className="font-semibold text-[#FAF5EB]">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-[rgba(196,150,58,0.15)] bg-[rgba(196,150,58,0.05)] p-4 text-xs leading-6 text-[rgba(196,150,58,0.75)]">
                  Sales support:{" "}
                  <span className="font-semibold text-[#FAF5EB]">+91 7305400590</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Address card */}
          <RevealOnScroll delayMs={120}>
            <div className="card-warm flex h-full flex-col rounded-2xl p-7 lg:rounded-3xl lg:p-10">
              <span className="section-label">Visit Us</span>

              <h3 className="section-heading mt-5 text-2xl lg:text-3xl">
                Come see us<br />
                <em>in Erode</em>
              </h3>

              <div className="mt-6 flex items-start gap-3.5">
                <div className="icon-box mt-0.5">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1410]">Anand Pipe Agencies</p>
                  <p className="mt-1.5 text-sm leading-7 text-[#7B6F61]">
                    143 APT Road, Near CD Building,<br />
                    Erode – 638001, Tamil Nadu
                  </p>
                </div>
              </div>

              <hr className="soft-divider my-6" />

              <p className="text-sm leading-7 text-[#7B6F61]">
                Centrally located in Erode — easy to reach for homeowners, builders and
                contractors from across the region. Ample space for parking.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Near CD Building", "APT Road", "Erode City"].map((loc) => (
                  <span
                    key={loc}
                    className="rounded-full border border-[rgba(196,150,58,0.22)] bg-[#FBF5E6] px-3 py-1 text-xs font-semibold text-[#9A7428]"
                  >
                    {loc}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8 flex flex-wrap gap-3">
                <Link
                  href="https://maps.app.goo.gl/3uA7K8H7PvvGow5z6"
                  target="_blank"
                  className="btn-outline-dark"
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
      <section id="location" className="pb-12 pt-0 section-cream-alt">
        <div className="container-shell">
          <RevealOnScroll>
            <div className="overflow-hidden rounded-2xl border border-[#E2D8CC] shadow-sm lg:rounded-3xl">
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
      <footer style={{ background: "var(--warm-dark)" }}>
        <div className="container-shell py-12 md:py-16">

          {/* Top ruled line */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[rgba(196,150,58,0.18)]" />
            <div className="font-display text-sm italic text-[rgba(196,150,58,0.50)]">
              Anand Pipe Agencies
            </div>
            <div className="h-px flex-1 bg-[rgba(196,150,58,0.18)]" />
          </div>

          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr_0.9fr]">

            {/* Brand */}
            <div>
              <Image
                src={`${basePath}/anand_logo.png`}
                alt="Anand Pipe Agencies"
                width={256}
                height={256}
                loading="lazy"
                className="h-14 w-14 object-contain opacity-95"
              />
              <p className="mt-4 max-w-xs text-sm leading-7 text-[rgba(250,245,235,0.45)]">
                Erode&apos;s complete destination for bath fittings, sanitaryware, PVC &amp; CPVC pipes,
                water tanks and pumps.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="tel:+917305400590"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(250,245,235,0.12)] bg-[rgba(250,245,235,0.06)] px-4 py-2 text-xs font-medium text-[rgba(250,245,235,0.60)] transition hover:bg-[rgba(250,245,235,0.12)] hover:text-[rgba(250,245,235,0.90)]"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  Call
                </Link>
                <Link
                  href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9A7428] to-[#C4963A] px-4 py-2 text-xs font-semibold text-white shadow shadow-[rgba(196,150,58,0.22)]"
                >
                  WhatsApp
                </Link>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(196,150,58,0.60)]">
                Quick Links
              </h3>
              <nav className="mt-4 flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[rgba(250,245,235,0.45)] transition hover:text-[rgba(250,245,235,0.90)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Product categories */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(196,150,58,0.60)]">
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
                    className="text-sm text-[rgba(250,245,235,0.45)] transition hover:text-[rgba(250,245,235,0.90)]"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            {/* Address + hours */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(196,150,58,0.60)]">
                Address
              </h3>
              <div className="mt-4 flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#C4963A] opacity-70" />
                <p className="text-sm leading-7 text-[rgba(250,245,235,0.45)]">
                  143 APT Road, Near CD Building,<br />
                  Erode – 638001, Tamil Nadu
                </p>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#C4963A] opacity-70" />
                <div className="text-sm leading-7 text-[rgba(250,245,235,0.45)]">
                  <p>Mon–Sat: 9:30 AM – 8:30 PM</p>
                  <p>Sunday: Holiday</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-[rgba(196,150,58,0.12)] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[rgba(250,245,235,0.30)]">
              © {new Date().getFullYear()} Anand Pipe Agencies. All rights reserved.
            </p>
            <p className="text-xs text-[rgba(250,245,235,0.20)]">
              Bath Fittings · Pipes · Tanks · Pumps — Erode
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
