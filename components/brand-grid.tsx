import Image from "next/image";

import { RevealOnScroll } from "@/components/reveal-on-scroll";

type Brand = {
  name: string;
  image?: string;
  tone?: "default" | "dark" | "soft";
  size?: "default" | "large" | "xl";
  badgeStyle?: "default" | "navy" | "teal" | "slate";
};

export type { Brand };

type BrandGridProps = {
  title: string;
  description: string;
  brands: Brand[];
};

export function BrandGrid({ title, description, brands }: BrandGridProps) {
  return (
    <section className="water-card water-outline rounded-[1.5rem] p-5 lg:rounded-[2rem] lg:p-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-950 lg:text-2xl">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {brands.map((brand, index) => (
          <RevealOnScroll key={brand.name} delayMs={index * 60}>
            <div className="group flex h-24 items-center justify-center rounded-xl border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(233,245,252,0.92))] px-3 text-center transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-950/5 lg:h-28 lg:rounded-2xl lg:px-4">
              {brand.image ? (
                <div
                  className={`flex w-full items-center justify-center rounded-xl px-2 py-2 lg:px-3 lg:py-3 ${
                    brand.tone === "dark"
                      ? "bg-slate-900"
                      : brand.tone === "soft"
                        ? "bg-[linear-gradient(135deg,#ffffff,#eff6ff_45%,#dbeafe)] border border-sky-100 shadow-sm"
                        : "bg-transparent"
                  }`}
                >
                  <Image
                    src={brand.image}
                    alt={`${brand.name} brand logo`}
                    width={brand.size === "xl" ? 320 : brand.size === "large" ? 190 : 160}
                    height={brand.size === "xl" ? 120 : brand.size === "large" ? 72 : 60}
                    loading="lazy"
                    className={`brand-logo h-auto w-auto object-contain ${
                      brand.size === "xl"
                        ? "max-h-16 lg:max-h-24"
                        : brand.size === "large"
                          ? "max-h-12 lg:max-h-16"
                          : "max-h-11 lg:max-h-14"
                    }`}
                  />
                </div>
              ) : (
                <span
                  className={`rounded-full px-3 py-2 text-xs font-medium lg:px-4 lg:text-sm ${
                    brand.badgeStyle === "navy"
                      ? "border border-slate-800 bg-slate-900 text-white shadow-sm"
                      : brand.badgeStyle === "teal"
                        ? "border border-cyan-200 bg-cyan-50 text-cyan-900"
                        : brand.badgeStyle === "slate"
                          ? "border border-slate-200 bg-slate-100 text-slate-800"
                          : "border border-sky-100 bg-white/90 text-slate-700"
                  }`}
                >
                  {brand.name}
                </span>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
