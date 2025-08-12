import React from 'react';
import Image from 'next/image';

export default function AccessoriesPage() {
  const accessories = [
    {
      name: 'Predator Pool Cue',
      image: '/images/Predator pool cue.jpg',
      description: 'Professional-grade Predator pool cue with advanced technology.',
    },
    {
      name: 'Meucci Pool Cue',
      image: '/images/Meucci pool cue.jpg',
      description: 'Premium Meucci pool cue with elegant design and superior playability.',
    },
    {
      name: 'Viking Pool Cue',
      image: '/images/Viking pool cue.jpg',
      description: 'High-quality Viking pool cue perfect for serious players.',
    },
    {
      name: 'Pool Cue with Case',
      image: '/images/pool cue with case.jpg',
      description: 'Professional pool cue with protective case for safe storage.',
    },
    {
      name: 'Pool Cue with Chalk',
      image: '/images/pool cue with chalk.jpg',
      description: 'Pool cue set with premium chalk for optimal grip.',
    },
    {
      name: 'Pool Cue with Tip',
      image: '/images/pool cue with tip.jpg',
      description: 'Pool cue with high-performance tip for precise shots.',
    },
    {
      name: 'Table Tennis Racket',
      image: '/images/able tennis racket with case.jpg',
      description: 'Professional table tennis racket with protective case.',
    },
    {
      name: 'Table Tennis Balls',
      image: '/images/table tennis balls with container.jpg',
      description: 'Tournament-grade table tennis balls in convenient container.',
    },
    {
      name: 'Table Tennis Net',
      image: '/images/table tennis net with posts.jpg',
      description: 'Professional table tennis net with sturdy posts.',
    },
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Game Room Accessories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((item) => (
            <div key={item.name} className="card p-6">
              <div className="relative h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-4">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="btn-primary">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 