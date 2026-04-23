"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#showroom", label: "Showroom" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sky-100/80 bg-white/85 shadow-lg shadow-sky-950/8 backdrop-blur-xl"
          : "bg-white/55"
      }`}
    >
      <div className="container-shell flex items-center justify-between gap-3 py-3 md:gap-4 md:py-4">
        <Link href="#top" className="flex min-w-0 items-center gap-3 md:gap-4">
          <Image
            src="/anand_logo.png"
            alt="Anand Pipe Agencies logo"
            width={220}
            height={72}
            priority
            className="h-10 w-auto object-contain drop-shadow-[0_8px_22px_rgba(15,23,42,0.12)] lg:h-16"
          />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold tracking-tight text-slate-950 lg:text-xl">Anand Pipes</div>
            <div className="hidden text-xs uppercase tracking-[0.2em] text-sky-700 lg:block">Water & Bath Solutions</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://wa.me/91XXXXXXXXXX?text=Hi%20Anand%20Pipe%20Agencies"
          target="_blank"
          className="shrink-0 rounded-full border border-sky-200 bg-sky-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-700 lg:px-5 lg:py-2.5 lg:text-sm"
        >
          WhatsApp
        </Link>
      </div>
    </header>
  );
}
