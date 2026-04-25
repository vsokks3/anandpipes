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
    <div className="card-white rounded-2xl p-4 sm:p-6 lg:rounded-3xl lg:p-8">
      <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-gray-900 lg:text-xl">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
        {brands.map((brand, index) => (
          <RevealOnScroll key={brand.name} delayMs={index * 55}>
            <div className="group flex h-20 cursor-default items-center justify-center rounded-xl border border-gray-100 bg-gray-50/60 px-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-white hover:shadow-md sm:h-24 sm:px-3 lg:h-28 lg:rounded-2xl">
              {brand.image ? (
                <div
                  className={`flex w-full items-center justify-center rounded-lg px-2 py-1 ${
                    brand.tone === "dark"
                      ? "bg-gray-900"
                      : brand.tone === "soft"
                        ? "bg-linear-to-br from-white to-blue-50"
                        : "bg-transparent"
                  }`}
                >
                  <Image
                    src={brand.image}
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
                      ? "bg-gray-900 text-white"
                      : brand.badgeStyle === "teal"
                        ? "border border-cyan-200 bg-cyan-50 text-cyan-800"
                        : brand.badgeStyle === "slate"
                          ? "border border-gray-200 bg-gray-100 text-gray-700"
                          : "border border-blue-100 bg-blue-50 text-blue-800"
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
