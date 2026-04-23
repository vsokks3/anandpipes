import Image from "next/image";
import Link from "next/link";
import {
  ArrowTrendingUpIcon,
  BuildingStorefrontIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  CubeTransparentIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
  SwatchIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

import { BrandGrid } from "@/components/brand-grid";
import type { Brand } from "@/components/brand-grid";
import { Navbar } from "@/components/navbar";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const bathBrands: Brand[] = [
  { name: "Kohler", image: "/Kohler.png" },
  { name: "Parryware", image: "/parryware.png", size: "large" },
  { name: "American Standard", image: "/american-standard.png", tone: "soft", size: "xl" },
  { name: "Jaquar ESSCO", image: "/Jaguar-ESSCO.jpg", size: "large" },
  { name: "Plato", image: "/plato.png", tone: "dark" },
  { name: "Gravity", image: "/Gravity.png" },
  { name: "Neelkund", image: "/Neelkund.png" },
  { name: "Premium Collections" }
];

const pipeBrands: Brand[] = [
  { name: "Finolex", image: "/finolex.png" },
  { name: "Ashirvad", image: "/ashirvad.png" },
  { name: "Avonplast", image: "/Avonplast.png" },
  { name: "Trusted Pipe Systems" }
];

const tankBrands: Brand[] = [
  { name: "Aquatech", image: "/aquatech.png" },
  { name: "Ashirvad", image: "/ashirvad.png" },
  { name: "Avonplast", image: "/Avonplast.png" },
  { name: "Smart Storage Range" }
];

const pumpBrands: Brand[] = [
  { name: "Suguna", image: "/Suguna.png" },
  { name: "Piller Pumps", badgeStyle: "navy" },
  { name: "Leader Pumps", badgeStyle: "teal" },
  { name: "Bindhu Pumps", badgeStyle: "slate" }
];

const whyChooseUs = [
  {
    title: "3500 sq ft showroom",
    description: "A large showroom that makes product selection easy.",
    icon: BuildingStorefrontIcon
  },
  {
    title: "Live demo experience",
    description: "See jacuzzi and bath fittings in live setup.",
    icon: SparklesIcon
  },
  {
    title: "Trusted brands only",
    description: "Trusted brands across bath, plumbing, tanks and pumps.",
    icon: CheckBadgeIcon
  },
  {
    title: "Guided product selection",
    description: "Helpful support for homeowners, builders and contractors.",
    icon: ChatBubbleBottomCenterTextIcon
  }
];

const quickLinks = [
  { href: "#products", label: "Products" },
  { href: "#showroom", label: "Showroom" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
  { href: "#location", label: "Location" }
];

export default function Home() {
  return (
    <main id="top" className="water-shell">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="hero-aura" />
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.18)),radial-gradient(circle_at_20%_15%,rgba(125,211,252,0.18),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.08),transparent_24%)]" />
        <div className="container-shell section-pad relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <RevealOnScroll className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-800 shadow-sm lg:px-4 lg:text-xs lg:tracking-[0.24em]">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Bath & Plumbing Store
            </div>
            <p className="mt-5 text-3xl font-semibold tracking-tight text-sky-700 lg:mt-6 lg:text-4xl">Anand Pipes</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 lg:mt-7 lg:text-6xl">
              Pipes, Bath Fittings, Tanks and Motors in One Place.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 lg:mt-6 lg:text-lg lg:leading-8">
              Anand Pipes offers bath fittings, PVC, CPVC and UPVC pipes and fittings, tanks and pumps in Erode.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 lg:mt-4 lg:text-base lg:leading-7">
              Visit with your family, compare many brands and choices, and pick what feels right for your home.
            </p>

            <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-row md:flex-wrap md:gap-4">
              <Link
                href="tel:+91XXXXXXXXXX"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 md:w-auto"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now
              </Link>
              <Link
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20Anand%20Pipe%20Agencies"
                target="_blank"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sky-100 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-sky-200 hover:bg-sky-50 md:w-auto"
              >
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
                WhatsApp
              </Link>
            </div>

            <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-4">
              {[
                { label: "Showroom", value: "3500 sq ft" },
                { label: "Location", value: "APT Road, Erode" },
                { label: "Experience", value: "Live Demo Zones" }
              ].map((stat) => (
                <div key={stat.label} className="water-card rounded-2xl border border-sky-100/80 p-4 backdrop-blur">
                  <div className="text-xs text-slate-500 lg:text-sm">{stat.label}</div>
                  <div className="mt-2 text-base font-semibold text-slate-950 lg:text-lg">{stat.value}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={160}>
            <div className="liquid-panel relative mx-auto w-full max-w-[30rem] rounded-[1.5rem] p-3 lg:max-w-[34rem] lg:rounded-[2rem] lg:p-4">
              <div className="absolute -left-4 top-10 h-16 w-16 rounded-full bg-cyan-100/60 blur-3xl lg:h-24 lg:w-24" />
              <div className="absolute -right-3 bottom-10 h-14 w-14 rounded-full bg-sky-100/55 blur-3xl lg:h-20 lg:w-20" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white">
                <Image
                  src="/bg-image-actual-size.png"
                  alt="Anand Pipe Agencies premium showroom products"
                  width={720}
                  height={780}
                  priority
                  className="h-full min-h-[240px] w-full object-cover md:min-h-[340px] lg:min-h-[390px]"
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 70vw, 34rem"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(15,23,42,0.08))]" />
              </div>
              <div className="relative mt-3 grid gap-3 rounded-[1.2rem] border border-sky-100 bg-white/70 p-4 backdrop-blur md:mt-4 md:grid-cols-2 lg:rounded-[1.4rem]">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-sky-700">Featured Focus</p>
                  <p className="mt-2 text-base font-semibold text-slate-950 lg:text-lg">Easy product selection</p>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  Clean display areas to help customers choose products easily.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="products" className="section-pad pt-0">
        <div className="container-shell">
          <RevealOnScroll className="section-heading mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Our Products</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
              Products for bath, plumbing and water storage
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Good brands across the main categories customers need.
            </p>
          </RevealOnScroll>

          <div className="space-y-6">
            <BrandGrid
              title="Bath Fittings & Sanitaryware"
              description="Bath fittings and sanitaryware for homes, shops and building projects."
              brands={bathBrands}
            />
            <BrandGrid
              title="Pipes & Fittings"
              description="PVC, CPVC and UPVC pipes and fittings for daily use and building work."
              brands={pipeBrands}
            />
            <BrandGrid
              title="Water Tanks"
              description="Water tanks for home and commercial use."
              brands={tankBrands}
            />
            <BrandGrid
              title="Pumps & Motors"
              description="Pumps and motors for home, farm and business needs."
              brands={pumpBrands}
            />
          </div>
        </div>
      </section>

      <section id="showroom" className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealOnScroll className="liquid-panel rounded-[1.5rem] p-5 lg:rounded-[2rem] lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Showroom Experience</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
              A showroom made for easy selection
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Our showroom is spacious and simple to explore. Customers can compare bath products, PVC, CPVC and
              UPVC pipe systems before buying.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              It is not just about buying products. It is about seeing, feeling and choosing what suits your space best.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="liquid-panel rounded-2xl p-5">
                <div className="text-2xl font-semibold text-slate-950 lg:text-3xl">3500</div>
                <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">Sq ft showroom</div>
              </div>
              <div className="liquid-panel rounded-2xl p-5">
                <div className="text-2xl font-semibold text-slate-950 lg:text-3xl">Live</div>
                <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">Jacuzzi & fittings demo</div>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <div className="flex items-start gap-3">
                <SwatchIcon className="mt-1 h-5 w-5 shrink-0 text-slate-500" />
                <p>Thoughtfully displayed bath fittings and sanitaryware collections with a refined visual layout.</p>
              </div>
              <div className="flex items-start gap-3">
                <WrenchScrewdriverIcon className="mt-1 h-5 w-5 shrink-0 text-slate-500" />
                <p>Practical product guidance for contractors, homeowners and interior-driven projects alike.</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={140}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.5rem] border border-sky-100 bg-white shadow-sm sm:col-span-2 lg:rounded-[1.75rem]">
                <Image
                  src="/bg-image-actual-size.png"
                  alt="Interior view representing Anand Pipe Agencies showroom collection"
                  width={1200}
                  height={720}
                  loading="lazy"
                  className="h-56 w-full object-cover md:h-72"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="water-tint water-grid flex min-h-44 items-end overflow-hidden rounded-[1.5rem] border border-dashed border-sky-200 p-5 md:min-h-56 md:p-6 lg:rounded-[1.75rem]">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 lg:text-xl">Live Fitting Demonstration</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Display areas help customers see products in use.
                  </p>
                </div>
              </div>
              <div className="water-tint water-grid flex min-h-44 items-end overflow-hidden rounded-[1.5rem] border border-dashed border-sky-200 p-5 md:min-h-56 md:p-6 lg:rounded-[1.75rem]">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 lg:text-xl">Product Comparison Zones</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Compare designs, sizes and product options easily.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="why-us" className="section-pad">
        <div className="container-shell">
          <RevealOnScroll className="section-heading mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Why Choose Us</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
              Why customers choose us
            </h2>
          </RevealOnScroll>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <RevealOnScroll key={item.title} delayMs={index * 80}>
                  <div className="water-card h-full rounded-[1.5rem] border border-sky-100 p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-950/5 lg:rounded-[1.75rem] lg:p-6">
                    <div className="inline-flex rounded-2xl border border-sky-100 bg-white/80 p-3">
                      <Icon className="h-6 w-6 text-sky-700" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-950 lg:mt-5 lg:text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-shell">
          <RevealOnScroll className="rounded-[1.5rem] border border-sky-100 bg-[linear-gradient(135deg,#f4fbff,#ffffff_52%,#eef7fb)] p-5 shadow-[0_20px_60px_rgba(2,132,199,0.05)] lg:rounded-[2rem] lg:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="liquid-badge rounded-2xl p-3 text-white">
                  <CubeTransparentIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">Flow of Products</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Bath, pipe, tank and pump products in one place.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="liquid-badge rounded-2xl p-3 text-white">
                  <ArrowTrendingUpIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">Premium Presentation</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Clean layout with clear product sections.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="liquid-badge rounded-2xl p-3 text-white">
                  <SparklesIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">Showroom Feel</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">A neat showroom look with simple styling.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealOnScroll className="rounded-[1.5rem] bg-[linear-gradient(160deg,#082f49,#0f172a_55%,#075985)] p-5 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] lg:rounded-[2rem] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Contact Us</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight lg:text-4xl">
              Plan your visit or connect instantly
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Contact us for product details, showroom visit or brand availability.
            </p>

            <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
              <Link
                href="tel:+91XXXXXXXXXX"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-50 md:w-auto"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now
              </Link>
              <Link
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20Anand%20Pipe%20Agencies"
                target="_blank"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 md:w-auto"
              >
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
                WhatsApp
              </Link>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
              Replace <span className="font-semibold text-white">+91XXXXXXXXXX</span> with your active sales number
              in the CTA links before launch.
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={120} className="water-card rounded-[1.5rem] border border-sky-100 p-5 lg:rounded-[2rem] lg:p-10">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950 lg:text-2xl">Visit the showroom</h3>
            <div className="mt-5 flex items-start gap-3 text-slate-600">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-sky-700" />
              <p className="text-base leading-7">
                Anand Pipe Agencies
                <br />
                143 APT Road, Near CD Building,
                <br />
                Erode - 638001
              </p>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              Easy to reach in Erode for bath and plumbing needs.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section id="location" className="section-pad pt-0">
        <div className="container-shell">
          <RevealOnScroll className="overflow-hidden rounded-[1.5rem] border border-sky-100 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.07)] lg:rounded-[2rem]">
            <div className="overflow-hidden rounded-[1.2rem] lg:rounded-[1.5rem]">
              <iframe
                title="Google Maps location of Anand Pipe Agencies, Erode"
                src="https://www.google.com/maps?q=143%20APT%20Road%2C%20Near%20CD%20Building%2C%20Erode%20-%20638001&z=16&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 lg:h-[420px]"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <footer className="border-t border-sky-100/80 bg-white/80 py-8 sm:py-10">
        <div className="container-shell grid gap-8 md:grid-cols-[1.1fr_0.7fr_0.9fr]">
          <div>
            <Image
              src="/anand_logo.png"
              alt="Anand Pipe Agencies logo"
              width={220}
              height={72}
              loading="lazy"
              className="h-12 w-auto object-contain drop-shadow-[0_8px_20px_rgba(15,23,42,0.1)] lg:h-14"
            />
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Bath fittings, sanitaryware, PVC, CPVC, UPVC pipes and fittings, water tanks, pumps and motors in Erode.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Quick Links</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block transition hover:text-slate-950">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Address</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              143 APT Road, Near CD Building,
              <br />
              Erode - 638001
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
