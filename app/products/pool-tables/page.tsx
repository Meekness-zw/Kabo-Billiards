'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PoolTablesPage() {
  const poolTables = [
    {
      name: 'Brunswick Pool Table',
      image: '/images/Brunswick Pool Table .jpg',
      description: 'Professional-grade Brunswick pool table with premium felt and solid construction.',
    },
    {
      name: 'Diamond Pool Table',
      image: '/images/Diamond pool table.jpg',
      description: 'Tournament-quality Diamond pool table with precision engineering.',
    },
    {
      name: 'Olhausen Pool Table',
      image: '/images/Olhausen pool table.jpg',
      description: 'Luxury Olhausen pool table with elegant design and superior playability.',
    },
    {
      name: 'LED Pool Table',
      image: '/images/pool table with LED lights.jpg',
      description: 'Modern pool table with integrated LED lighting for enhanced visibility.',
    },
    {
      name: 'Blue Felt Pool Table',
      image: '/images/pool table felt blue.jpg',
      description: 'Professional pool table with premium blue felt for optimal play.',
    },
    {
      name: 'Red Felt Pool Table',
      image: '/images/pool table felt red.jpg',
      description: 'Stylish pool table with vibrant red felt for a bold look.',
    },
    {
      name: 'Pool Table with Bar',
      image: '/images/pool table with bar.jpg',
      description: 'Complete game room setup with pool table and bar area.',
    },
    {
      name: 'Pool Table with Chairs',
      image: '/images/pool table with chairs.jpg',
      description: 'Comfortable seating arrangement around your pool table.',
    },
    {
      name: 'Pool Table with Scoreboard',
      image: '/images/pool table with scoreboard.jpg',
      description: 'Professional pool table with integrated scoreboard.',
    },
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Pool Tables</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poolTables.map((table) => (
            <div key={table.name} className="card p-6">
              <div className="relative h-48 mb-4">
                <Image
                  src={table.image}
                  alt={table.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-4">{table.name}</h2>
              <p className="text-gray-600 mb-4">{table.description}</p>
              <button className="btn-primary">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-[#000080] mb-4">
          Custom Pool Table Solutions
        </h2>
        <p className="text-gray-600 mb-6">
          Looking for a custom pool table? We offer bespoke solutions tailored to your needs
        </p>
        <Link href="/contact" className="btn-primary">
          Request a Quote
        </Link>
      </div>
    </div>
  );
} 