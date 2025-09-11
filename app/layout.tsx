import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kabobilliards.com'),
  title: "Kabo Billiards",
  description: "Premium billiards equipment supplier in Zimbabwe. Pool tables, snooker tables, table tennis, foosball tables, game room design & accessories. Professional installation & service.",
  keywords: "pool tables Zimbabwe, snooker tables, billiards equipment, table tennis, foosball tables, game rooms, billiards accessories, pool table installation, snooker table repair, game room design, Brunswick pool tables, Butterfly table tennis, Tornado foosball, billiards supplies, cue sticks, pool balls, game room furniture, professional billiards, tournament tables, Harare billiards, Zimbabwe game rooms",
  authors: [{ name: "Kabo Billiards" }],
  creator: "Kabo Billiards",
  publisher: "Kabo Billiards",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kabobilliards.com",
    siteName: "Kabo Billiards",
    title: "Kabo Billiards - Premium Pool Tables & Game Room Solutions",
    description: "Zimbabwe's premier destination for pool tables, snooker tables, table tennis, and complete game room solutions. Professional installation & service.",
    images: [
      {
        url: "/images/modern game room with bar.jpg",
        width: 1200,
        height: 630,
        alt: "Kabo Billiards - Premium Game Room Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabo Billiards - Premium Pool Tables & Game Room Solutions",
    description: "Zimbabwe's premier destination for pool tables, snooker tables, table tennis, and complete game room solutions.",
    images: ["/images/modern game room with bar.jpg"],
  },
  alternates: {
    canonical: "https://kabobilliards.com",
  },
  other: {
    "geo.region": "ZW",
    "geo.placename": "Harare",
    "geo.position": "-17.8292;31.0522",
    "ICBM": "-17.8292, 31.0522",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kabo Billiards",
              "description": "Premium billiards equipment supplier in Zimbabwe. Pool tables, snooker tables, table tennis, foosball tables, game room design & accessories.",
              "url": "https://kabobilliards.com",
              "telephone": "+263 78 520 9400",
              "email": "kabobilliards@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8406 Stortford Road",
                "addressLocality": "Tywald Plots",
                "addressRegion": "Harare",
                "addressCountry": "Zimbabwe"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-17.8292",
                "longitude": "31.0522"
              },
              "openingHours": [
                "Mo-Fr 09:00-18:00",
                "Sa 10:00-16:00"
              ],
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "currenciesAccepted": "USD, ZWL",
              "founder": {
                "@type": "Person",
                "name": "Brian Kaboti"
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Brian Kaboti",
                  "jobTitle": "Founder & CEO"
                },
                {
                  "@type": "Person",
                  "name": "Maxine Kaboti",
                  "jobTitle": "Designer"
                },
                {
                  "@type": "Person",
                  "name": "Maison Kaboti",
                  "jobTitle": "Technical Director"
                }
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Pool Tables",
                    "description": "Professional and recreational pool tables"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Snooker Tables",
                    "description": "Tournament-grade snooker tables"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Table Tennis Tables",
                    "description": "Professional table tennis equipment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Game Room Design",
                    "description": "Custom game room design and installation services"
                  }
                }
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Zimbabwe"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Billiards Equipment & Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Brunswick Pool Tables"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Butterfly Table Tennis"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Tornado Foosball Tables"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
