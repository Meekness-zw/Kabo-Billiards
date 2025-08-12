import React from 'react';
import Image from 'next/image';

export default function TableTennisPage() {
  const tableTennisProducts = [
    {
      name: 'Butterfly Table Tennis',
      image: '/images/Butterfly table tennis.jpg',
      description: 'Professional Butterfly table tennis table with tournament-grade surface.',
    },
    {
      name: 'Stiga Table Tennis',
      image: '/images/Stiga table tennis.jpg',
      description: 'High-quality Stiga table tennis table perfect for serious players.',
    },
    {
      name: 'Joola Table Tennis',
      image: '/images/Joola table tennis.jpg',
      description: 'Premium Joola table tennis table with excellent bounce and durability.',
    },
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Table Tennis Tables</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tableTennisProducts.map((product) => (
            <div key={product.name} className="card p-6">
              <div className="relative h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="btn-primary">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 