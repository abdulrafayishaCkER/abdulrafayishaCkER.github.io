import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { CyberBackground } from "@/components/cyber/background";

// Distinctive fonts: Syne for display, JetBrains Mono for terminal/code
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap", weight: ["400", "500", "600", "700", "800"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  metadataBase: new URL(site.seo.url),
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.url,
    siteName: site.seo.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${syne.variable} ${jetbrains.variable}`}>
      <body>
        <CyberBackground />
        {children}
      </body>
    </html>
  );
}
