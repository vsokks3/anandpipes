"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { href: "#products",  label: "Products" },
  { href: "#showroom",  label: "Showroom" },
  { href: "#why-us",    label: "Why Us" },
  { href: "#reviews",   label: "Reviews" },
  { href: "#contact",   label: "Contact" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [overHeroImage, setOverHeroImage] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => {
      const hero = document.querySelector<HTMLElement>(".hero-bg");

      setScrolled(window.scrollY > 56);
      setOverHeroImage(hero ? hero.getBoundingClientRect().bottom > 0 : false);
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const lightNav = scrolled && !overHeroImage;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        lightNav
          ? "bg-[#FAF8F3] shadow-[0_2px_20px_rgba(26,20,16,0.12)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell flex items-center justify-between gap-4 py-4 md:py-4">

        {/* Logo */}
        <Link href="#top" className="flex shrink-0 items-center gap-3">
          <Image
            src={`${basePath}/anand_logo.png`}
            alt="Anand Pipe Agencies"
            width={256}
            height={256}
            priority
            className="logo-gold-glow h-10 w-10 object-contain lg:h-12 lg:w-12"
          />
        </Link>

        {/* Desktop nav pill — dark over hero, light over content */}
        <nav
          className={`hidden items-center gap-0.5 rounded-full border px-2 py-1.5 backdrop-blur-xl transition-all duration-500 md:flex ${
            lightNav
              ? "border-[rgba(196,150,58,0.40)] bg-white shadow-[0_2px_12px_rgba(26,20,16,0.10)]"
              : "border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.10)] shadow-[0_4px_20px_rgba(0,0,0,0.20)]"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={!lightNav ? { color: "#ffffff" } : undefined}
              className={`group relative rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                lightNav
                  ? "text-[#1A1410] hover:bg-[rgba(196,150,58,0.10)] hover:text-[#9A7428]"
                  : "text-white hover:bg-[rgba(255,255,255,0.15)] hover:text-white"
              }`}
            >
              {item.label}
              <span className={`absolute bottom-1.5 left-4 right-4 h-px scale-x-0 rounded-full transition-transform duration-200 group-hover:scale-x-100 ${
                lightNav ? "bg-[#C4963A]" : "bg-[#FAD97A]"
              }`} />
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Link
            href="tel:+917305400590"
            style={!lightNav ? { color: "#ffffff" } : undefined}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              lightNav
                ? "border border-[#E2D8CC] bg-white text-[#2D261D] hover:border-[#C4963A] hover:text-[#9A7428]"
                : "border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.10)] text-white hover:bg-[rgba(255,255,255,0.20)]"
            }`}
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            Call
          </Link>
          <Link
            href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9A7428] to-[#C4963A] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[rgba(196,150,58,0.35)] transition-all hover:from-[#7A5A1E] hover:to-[#9A7428] hover:shadow-[rgba(196,150,58,0.55)]"
          >
            WhatsApp
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
            target="_blank"
            className="rounded-full bg-gradient-to-r from-[#9A7428] to-[#C4963A] px-3.5 py-2 text-xs font-semibold text-white shadow shadow-[rgba(196,150,58,0.40)]"
          >
            WhatsApp
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`rounded-lg p-2 transition-colors ${
              lightNav
                ? "text-[#2D261D] hover:bg-[#F2EAE0]"
                : "text-[#FFF8E8] hover:bg-[rgba(255,248,232,0.15)]"
            }`}
          >
            {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className={`shadow-2xl md:hidden ${
            lightNav
              ? "border-t border-[#E2D8CC] bg-[#FAF8F3]"
              : "border-t border-[rgba(196,150,58,0.45)] bg-[rgba(12,9,6,0.88)] backdrop-blur-xl"
          }`}
        >
          <nav className="container-shell flex flex-col gap-0.5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={!lightNav ? { color: "#ffffff" } : undefined}
                className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                  lightNav
                    ? "text-[#2D261D] hover:bg-[rgba(196,150,58,0.10)] hover:text-[#9A7428]"
                    : "text-[#FFF8E8] hover:bg-[rgba(196,150,58,0.18)] hover:text-[#FAD97A]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className={`mt-2 border-t pt-3 ${lightNav ? "border-[#E2D8CC]" : "border-[rgba(196,150,58,0.25)]"}`}>
              <Link
                href="tel:+917305400590"
                style={!lightNav ? { color: "#ffffff" } : undefined}
                className={`flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold ${
                  lightNav
                    ? "text-[#9A7428] hover:bg-[#FBF5E6]"
                    : "text-[#C4963A] hover:bg-[rgba(196,150,58,0.14)]"
                }`}
              >
                <PhoneIcon className="h-4 w-4" />
                Call Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
