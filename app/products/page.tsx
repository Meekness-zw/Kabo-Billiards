import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Pool Tables',
    description: 'Professional and home pool tables for every skill level',
    image: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3',
    link: '/products/pool-tables',
  },
  {
    title: 'Table Tennis',
    description: 'High-quality table tennis tables for recreation and competition',
    image: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3',
    link: '/products/table-tennis',
  },
  {
    title: 'Soccer Tables',
    description: 'Premium foosball tables for entertainment and competition',
    image: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3',
    link: '/products/soccer-tables',
  },
  {
    title: 'Accessories',
    description: 'Essential accessories and equipment for all your gaming needs',
    image: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3',
    link: '/products/accessories',
  },
];

export default function ProductsPage() {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#000080] mb-4">
          Our Products
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our premium selection of billiards equipment and game room essentials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="card group"
          >
            <div className="relative h-64">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-200">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-[#000080] mb-4">
          Need Help Choosing?
        </h2>
        <p className="text-gray-600 mb-6">
          Our experts are here to help you find the perfect equipment for your needs
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
} 