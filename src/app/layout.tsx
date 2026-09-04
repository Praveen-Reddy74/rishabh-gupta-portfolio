import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

const siteUrl = "https://rishabhgupta.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rishabh Gupta — Market Research & Brand Strategy",
    template: "%s — Rishabh Gupta",
  },
  description: profile.headline,
  keywords: [
    "Rishabh Gupta",
    "Market Research",
    "Brand Strategy",
    "Business Analytics",
    "Great Lakes Institute of Management",
    "PGDM",
    "Power BI",
    "Marketing Analytics",
  ],
  authors: [{ name: "Rishabh Gupta" }],
  creator: "Rishabh Gupta",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Rishabh Gupta — Market Research & Brand Strategy",
    description: profile.headline,
    siteName: "Rishabh Gupta",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Rishabh Gupta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Gupta — Market Research & Brand Strategy",
    description: profile.headline,
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
