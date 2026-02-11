import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-8G9H5Y007E";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
