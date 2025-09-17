'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <html lang="en">
      <head>
        <title>Kabo Billiards - The Game Haven</title>
        <meta name="description" content="Premium billiards equipment supplier in Zimbabwe. Pool tables, snooker tables, table tennis, foosball tables, game room design & accessories." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
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
        {!isAdminRoute && <Navbar />}
        <main className={isAdminRoute ? "min-h-screen" : "min-h-screen pt-20"}>
          {children}
        </main>
        {!isAdminRoute && <Footer />}
        {!isAdminRoute && <Chatbot />}
      </body>
    </html>
  );
}
