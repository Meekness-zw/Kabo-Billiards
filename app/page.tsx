import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kabo Billiards",
  description: "Discover premium pool tables, snooker tables, table tennis, and foosball tables at Kabo Billiards. Professional game room design and installation services in Harare, Zimbabwe.",
  keywords: "pool tables, snooker tables, billiards, table tennis, foosball, game rooms, Brunswick pool tables, Butterfly table tennis, Tornado foosball, billiards equipment Zimbabwe, Harare game rooms",
  openGraph: {
    title: "Premium Pool Tables & Billiards Equipment | Kabo Billiards",
    description: "Discover premium pool tables, snooker tables, table tennis, and foosball tables at Kabo Billiards Zimbabwe.",
    images: ["/images/modern game room with bar.jpg"],
  },
};

export default function Home() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/modern game room with bar.jpg"
            alt="Luxury Game Room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to KABO BILLIARDS
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Your Premier Destination for Game Room Excellence
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/products/pool-tables" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/game-rooms" className="btn-secondary">
                View Game Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/Brunswick Pool Table .jpg"
                  alt="Brunswick Pool Table"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Brunswick Pool Table</h3>
              <p className="text-gray-600 mb-4">Professional-grade pool table with premium features.</p>
              <Link href="/products/pool-tables" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="card p-6">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/Butterfly table tennis.jpg"
                  alt="Butterfly Table Tennis"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Butterfly Table Tennis</h3>
              <p className="text-gray-600 mb-4">Tournament-grade table tennis table.</p>
              <Link href="/products/table-tennis" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="card p-6">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/Tornado foosball table.jpg"
                  alt="Tornado Foosball Table"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tornado Foosball Table</h3>
              <p className="text-gray-600 mb-4">Professional foosball table for serious players.</p>
              <Link href="/products/soccer-tables" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Room Design Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Game Room Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/game room seating.jpg"
                  alt="Game Room Seating"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Comfortable Seating</h3>
              <p className="text-gray-600 mb-4">Premium seating solutions for your game room.</p>
              <Link href="/game-rooms" className="btn-primary">
                View Designs
              </Link>
            </div>
            <div className="card p-6">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/game room lighting fixtures.jpg"
                  alt="Game Room Lighting"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Lighting</h3>
              <p className="text-gray-600 mb-4">Enhance your game room with premium lighting.</p>
              <Link href="/game-rooms" className="btn-primary">
                View Designs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
