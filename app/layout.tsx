import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

// Keywords derived from product categories, brand partners, and location data in page.tsx
const siteKeywords = [
  // Product categories
  "bath fittings Erode", "taps Erode", "sanitaryware Erode",
  "showers Erode", "jacuzzi Erode", "rain shower Erode",
  "PVC pipes Erode", "CPVC pipes Erode", "UPVC pipes Erode",
  "plumbing fittings Erode", "water tanks Erode",
  "water pumps Erode", "motors Erode",
  // Specific products
  "mixers faucets Erode", "wash basins Erode", "wall hung WC Erode",
  "overhead tanks Erode", "underground tanks Erode",
  "concealed fittings Erode", "bath accessories Erode",
  // Bath & sanitaryware brands
  "Kohler dealer Erode", "Jaquar dealer Erode", "Parryware dealer Erode",
  "American Standard Erode", "Gravity fittings Erode",
  // Pipe brands
  "Finolex pipes Erode", "Ashirvad pipes Erode", "Avonplast pipes Erode",
  // Tank brands
  "Aquatech tanks Erode",
  // Pump brands
  "Suguna pumps Erode",
  // Business / location
  "pipe shop Erode", "bathroom showroom Erode",
  "plumbing supplies Erode", "plumbing supplies Tamil Nadu",
  "bathroom fittings showroom Erode Tamil Nadu",
  "Anand Pipe Agencies", "Anand Pipes Erode",
  "APT Road Erode", "638001",
];

const siteTitle = "Anand Pipe Agencies Erode | PVC, CPVC, UPVC Pipes, Bath Fittings, Pumps";
const siteDescription =
  "Premium showroom in Erode for PVC, CPVC, UPVC pipes and fittings, bath fittings, sanitaryware, water tanks, pumps and motors.";

export const metadata: Metadata = {
  metadataBase: new URL("https://anandpipes.in"),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Anand Pipe Agencies",
    title: siteTitle,
    description: siteDescription,
    url: "https://anandpipes.in",
    images: [
      {
        url: "/anand_logo.png",
        width: 1200,
        height: 630,
        alt: "Anand Pipe Agencies logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/anand_logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
