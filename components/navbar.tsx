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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 48);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 bg-white/96 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell flex items-center justify-between gap-2 py-3 md:gap-4 md:py-4">

        {/* Logo */}
        <Link href="#top" className="flex shrink-0 items-center gap-3">
          <Image
            src="/anand_logo.png"
            alt="Anand Pipe Agencies"
            width={220}
            height={72}
            priority
            className="h-10 w-auto object-contain lg:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className={`hidden items-center gap-2 rounded-full px-2 py-1.5 transition-all duration-300 md:flex ${
            scrolled
              ? "bg-transparent"
              : "border border-amber-100/70 bg-amber-50/72 shadow-[0_14px_34px_rgba(15,23,42,0.18)] backdrop-blur-md"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-bold transition-colors duration-200 ${
                scrolled
                  ? "px-0 text-gray-600 hover:text-gray-900"
                  : "rounded-full px-3 py-1.5 text-[#10233f] hover:bg-white/50 hover:text-[#7c4a03]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Link
            href="tel:+917305400590"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              scrolled
                ? "border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                : "border border-amber-100/70 bg-amber-50/72 text-[#10233f] shadow-[0_8px_24px_rgba(15,23,42,0.16)] backdrop-blur-md hover:border-amber-200 hover:bg-white/80 hover:text-[#7c4a03]"
            }`}
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            Call
          </Link>
          <Link
            href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-500 to-amber-400 px-4 py-2 text-sm font-bold text-white shadow-md shadow-amber-500/25 transition-all hover:from-amber-600 hover:to-amber-500 hover:shadow-amber-500/40 lg:px-5"
          >
            WhatsApp
          </Link>
        </div>

        {/* Mobile: WhatsApp + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
            target="_blank"
            className="rounded-full bg-linear-to-r from-amber-500 to-amber-400 px-3 py-2 text-xs font-bold text-white shadow shadow-amber-500/30 sm:px-3.5"
          >
            WhatsApp
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`rounded-lg p-2 transition ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "bg-amber-50/72 text-[#10233f] shadow-[0_8px_24px_rgba(15,23,42,0.16)] backdrop-blur-md hover:bg-white/80"
            }`}
          >
            {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-gray-100 bg-white shadow-lg md:hidden">
          <nav className="container-shell flex flex-col gap-0.5 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-gray-100 pt-3">
              <Link
                href="tel:+917305400590"
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
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
