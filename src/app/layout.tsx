import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-consent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aspiroai.digital"),
  title: {
    default: "Aspiro AI | AI Consulting for UK SMEs",
    template: "%s | Aspiro AI",
  },
  description:
    "We help small and medium businesses harness AI to work smarter, not harder. Practical AI solutions that actually ship.",
  keywords: ["AI consultancy", "AI for SME", "AI automation", "AI personal assistant", "business AI"],
  openGraph: {
    title: "Aspiro AI | AI Consulting for UK SMEs",
    description:
      "We help small and medium businesses harness AI to work smarter, not harder. Practical AI solutions that actually ship.",
    url: "https://aspiroai.digital",
    siteName: "Aspiro AI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aspiro AI | AI Consulting for UK SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspiro AI | AI Consulting for UK SMEs",
    description:
      "We help small and medium businesses harness AI to work smarter, not harder. Practical AI solutions that actually ship.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aspiro AI",
  url: "https://aspiroai.digital",
  description:
    "We help small and medium businesses harness AI to work smarter, not harder. Practical AI solutions that actually ship.",
  foundingDate: "2024",
  areaServed: "GB",
  serviceType: [
    "AI Consulting",
    "AI Automation",
    "AI Personal Assistant",
    "Web Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aspiro AI",
  url: "https://aspiroai.digital",
  description:
    "AI consulting for UK SMEs — practical AI solutions that actually ship.",
  publisher: {
    "@type": "Organization",
    name: "Aspiro AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
