import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anandpipes.in"),
  title: "Anand Pipe Agencies Erode | PVC, CPVC, UPVC Pipes, Bath Fittings, Pumps",
  description:
    "Premium showroom in Erode for PVC, CPVC, UPVC pipes and fittings, bath fittings, sanitaryware, water tanks, pumps and motors.",
  openGraph: {
    title: "Anand Pipe Agencies Erode | PVC, CPVC, UPVC Pipes, Bath Fittings, Pumps",
    description:
      "Premium showroom in Erode for PVC, CPVC, UPVC pipes and fittings, bath fittings, sanitaryware, water tanks, pumps and motors.",
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
    title: "Anand Pipe Agencies Erode | PVC, CPVC, UPVC Pipes, Bath Fittings, Pumps",
    description:
      "Premium showroom in Erode for PVC, CPVC, UPVC pipes and fittings, bath fittings, sanitaryware, water tanks, pumps and motors.",
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
