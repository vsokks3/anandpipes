import Image from "next/image";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
    <div className="rounded-2xl border border-[#E2D8CC] bg-white p-5 sm:p-7 lg:rounded-3xl lg:p-8">
      <div className="mb-6 flex items-start gap-4">
        <div>
          <h3 className="font-display text-xl italic font-semibold tracking-tight text-[#1A1410] lg:text-2xl">
            {title}
          </h3>
          <p className="mt-1.5 text-sm text-[#7B6F61] leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
        {brands.map((brand, index) => (
          <RevealOnScroll key={brand.name} delayMs={index * 55}>
            <div className="brand-logo-card group flex h-20 cursor-default items-center justify-center rounded-xl px-2.5 sm:h-24 sm:px-3 lg:h-28 lg:rounded-2xl">
              {brand.image ? (
                <div
                  className={`flex w-full items-center justify-center rounded-lg px-2 py-1.5 ${
                    brand.tone === "dark"
                      ? "bg-[#1A1410]"
                      : brand.tone === "soft"
                        ? "bg-gradient-to-br from-white to-[#EBF1F7]"
                        : "bg-transparent"
                  }`}
                >
                  <Image
                    src={`${basePath}${brand.image}`}
                    alt={`${brand.name} logo`}
                    width={brand.size === "xl" ? 320 : brand.size === "large" ? 190 : 160}
                    height={brand.size === "xl" ? 120 : brand.size === "large" ? 72 : 60}
                    loading="lazy"
                    className={`brand-logo h-auto w-auto object-contain ${
                      brand.size === "xl"
                        ? "max-h-14 sm:max-h-16 lg:max-h-20"
                        : brand.size === "large"
                          ? "max-h-10 sm:max-h-12 lg:max-h-16"
                          : "max-h-9 sm:max-h-10 lg:max-h-13"
                    }`}
                  />
                </div>
              ) : (
                <span
                  className={`max-w-full rounded-full px-2.5 py-1.5 text-center text-[11px] font-semibold leading-snug sm:px-3 sm:text-xs ${
                    brand.badgeStyle === "navy"
                      ? "bg-[#1A1410] text-white"
                      : brand.badgeStyle === "teal"
                        ? "border border-[#2C4B6A]/20 bg-[#EBF1F7] text-[#2C4B6A]"
                        : brand.badgeStyle === "slate"
                          ? "border border-[#E2D8CC] bg-[#F2EAE0] text-[#7B6F61]"
                          : "border border-[rgba(196,150,58,0.25)] bg-[#FBF5E6] text-[#9A7428]"
                  }`}
                >
                  {brand.name}
                </span>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
