import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const gameRoomDesigns = [
  {
    title: 'Modern Entertainment Space',
    description: 'A contemporary game room featuring a professional pool table, comfortable seating, and ambient lighting.',
    image: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3',
    features: ['Professional Pool Table', 'LED Lighting', 'Custom Seating', 'Sound System'],
  },
  {
    title: 'Classic Billiards Room',
    description: 'A traditional billiards room with rich wood finishes and elegant decor.',
    image: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3',
    features: ['Antique Pool Table', 'Wood Paneling', 'Leather Furniture', 'Vintage Lighting'],
  },
  {
    title: 'Multi-Game Entertainment',
    description: 'A versatile space featuring multiple gaming options for endless entertainment.',
    image: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3',
    features: ['Pool Table', 'Table Tennis', 'Soccer Table', 'Bar Area'],
  },
];

const services = [
  {
    title: 'Custom Design',
    description: 'We create personalized game room designs that match your style and space requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Installation',
    description: 'Professional installation of all gaming equipment and furniture.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance and service to keep your gaming equipment in perfect condition.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

export default function GameRoomsPage() {
  const gameRooms = [
    {
      name: 'Modern Game Room with Bar',
      image: '/images/modern game room with bar.jpg',
      description: 'Luxurious game room featuring a modern bar setup and premium gaming equipment.',
    },
    {
      name: 'Game Room Seating',
      image: '/images/game room seating.jpg',
      description: 'Comfortable seating arrangement perfect for game room entertainment.',
    },
    {
      name: 'Game Room Lighting',
      image: '/images/game room lighting fixtures.jpg',
      description: 'Professional lighting fixtures to enhance your game room atmosphere.',
    },
    {
      name: 'Game Room Decor',
      image: '/images/game room decor items.jpg',
      description: 'Stylish decor items to complete your game room design.',
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3"
            alt="Game room"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Custom Game Room Design
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transform your space into the ultimate entertainment destination
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Design Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameRoomDesigns.map((design, index) => (
              <div key={index} className="card">
                <div className="relative h-64">
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
                  <p className="text-gray-600 mb-4">{design.description}</p>
                  <ul className="space-y-2">
                    {design.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-[#DC143C] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
                We discuss your vision and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray-600">
                We create a custom design plan
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Installation</h3>
              <p className="text-gray-600">
                Professional installation of all equipment
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Enjoy</h3>
              <p className="text-gray-600">
                Your perfect game room is ready to use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#000080] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Dream Game Room?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to start your game room transformation
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#000080] hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </section>

      {/* Game Rooms Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Game Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameRooms.map((room) => (
              <div key={room.name} className="card p-6">
                <div className="relative h-48 mb-4">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-4">{room.name}</h2>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <button className="btn-primary">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
