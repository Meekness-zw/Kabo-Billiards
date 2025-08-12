import React from 'react';
import Image from 'next/image';

export default function SoccerTablesPage() {
  const soccerTables = [
    {
      name: 'Tornado Foosball Table',
      image: '/images/Tornado foosball table.jpg',
      description: 'Professional Tornado foosball table with tournament-grade construction.',
    },
    {
      name: 'Warrior Foosball Table',
      image: '/images/Warrior foosball table.jpg',
      description: 'High-quality Warrior foosball table perfect for game rooms.',
    },
    {
      name: 'Tecball Foosball Table',
      image: '/images/Tecball foosball table.jpg',
      description: 'Premium Tecball foosball table with excellent playability.',
    },
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Soccer Tables</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {soccerTables.map((table) => (
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
    </div>
  );
} 