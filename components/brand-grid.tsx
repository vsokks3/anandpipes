import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Brand = {
  name: string;
  image?: string;
  dark?: boolean; // for light-on-transparent logos
  big?: boolean;  // for compact logos that read too small at default size
};

const brands: Brand[] = [
  { name: "Kohler",       image: "/kohler.webp" },
  { name: "Jaquar",       image: "/jaquar.svg" },
  { name: "Parryware",    image: "/parryware.webp" },
  { name: "Plato",        image: "/plato.webp", dark: true },
  { name: "Gravity",      image: "/gravity.webp" },
  { name: "Neelkund",     image: "/neelkund.webp" },
  { name: "Finolex",      image: "/finolex.webp" },
  { name: "Ashirvad",     image: "/ashirvad.webp" },
  { name: "Avonplast",    image: "/avonplast.webp" },
  { name: "Oxford",       image: "/oxford.svg" },
  { name: "Aquatech",     image: "/aquatech.webp" },
  { name: "Suguna",       image: "/suguna.webp" },
  { name: "Texmo",        image: "/texmo.webp", big: true },
  { name: "Piller Pumps", image: "/piller-pumps.svg" },
  { name: "Turbo Leader Pumps", image: "/turbo-leader.webp", big: true },
  { name: "Bindhu Pumps" },
];

export function BrandGrid() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-5">
      {brands.map((brand) =>
        brand.image ? (
          <div key={brand.name} className={`brand-tile${brand.dark ? " brand-tile--dark" : ""}`}>
            <Image
              src={`${basePath}${brand.image}`}
              alt={`${brand.name} logo`}
              width={200}
              height={80}
              loading="lazy"
              className={brand.big ? "brand-img--lg" : undefined}
            />
          </div>
        ) : (
          <div key={brand.name} className="brand-tile brand-tile--text">
            {brand.name}
          </div>
        )
      )}
    </div>
  );
}
