"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#products",   label: "Products" },
  { href: "#brands",     label: "Brands" },
  { href: "#showroom",   label: "Showroom" },
  { href: "#visit",      label: "Visit" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-[var(--line)] bg-[rgba(247,250,251,0.97)] shadow-[0_8px_28px_rgba(11,43,60,0.14)] backdrop-blur-md"
    >
      <div className="container-shell flex items-center justify-between gap-4 py-3.5">

        <Link href="#top" className="flex shrink-0 items-center gap-3">
          <Image
            src={`${basePath}/logo.png`}
            alt="Anand Pipe Agencies"
            width={64}
            height={64}
            priority
            className="h-12 w-12 object-contain"
          />
          <span className="text-base font-extrabold tracking-tight text-[var(--ink)] sm:text-lg">
            Anand Pipe Agencies
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border border-[var(--line)] bg-white px-3 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm transition-colors hover:border-[var(--water)] hover:bg-[var(--water-soft)] hover:text-[var(--pipe)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="tel:+917305400590"
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--pipe)] bg-white px-3.5 py-2 text-sm font-semibold text-[var(--pipe)] transition-colors hover:border-[var(--water)] hover:bg-[var(--water-soft)]"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            Call
          </Link>
          <Link
            href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
            target="_blank"
            className="rounded-md bg-[var(--wa)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#157F41]"
          >
            WhatsApp
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="https://wa.me/917305400590?text=Hi%20Anand%20Pipe%20Agencies"
            target="_blank"
            className="rounded-md bg-[var(--wa)] px-3 py-1.5 text-xs font-semibold text-white"
          >
            WhatsApp
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-md p-2 text-[var(--ink)] hover:bg-[var(--water-soft)]"
          >
            {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-[var(--line)] bg-[var(--paper)] md:hidden">
          <nav className="container-shell flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--water-soft)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="tel:+917305400590"
              className="mt-1 flex items-center gap-2 rounded-md border-t border-[var(--line)] px-3 py-3 text-sm font-semibold text-[var(--pipe)]"
            >
              <PhoneIcon className="h-4 w-4" />
              Call +91 73054 00590
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
