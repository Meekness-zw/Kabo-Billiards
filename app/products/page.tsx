'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StockTable } from '@/lib/data';

const categories = [
  {
    title: 'Pool Tables',
    description: 'Professional and home pool tables for every skill level',
    image: '/images/Brunswick Pool Table .jpg',
    category: 'pool',
  },
  {
    title: 'Table Tennis',
    description: 'High-quality table tennis tables for recreation and competition',
    image: '/images/Butterfly table tennis.jpg',
    category: 'table-tennis',
  },
  {
    title: 'Foosball Tables',
    description: 'Premium foosball tables for entertainment and competition',
    image: '/images/Tornado foosball table.jpg',
    category: 'foosball',
  },
  {
    title: 'Snooker Tables',
    description: 'Professional snooker tables for serious players',
    image: '/images/Diamond pool table.jpg',
    category: 'snooker',
  },
];

export default function ProductsPage() {
  const [stockItems, setStockItems] = useState<StockTable[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await fetch('/api/stock');
        if (response.ok) {
          const data = await response.json();
          setStockItems(data);
        }
      } catch {
        console.error('Error fetching stock');
      } finally {
        setLoading(false);
      }
    };

    fetchStock();
  }, []);

  const getStockByCategory = (category: string) => {
    return stockItems.filter(item => item.category === category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'pool': return '🎱';
      case 'snooker': return '🔴';
      case 'table-tennis': return '🏓';
      case 'foosball': return '⚽';
      default: return '🎯';
    }
  };

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

      {/* Category Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {categories.map((category, index) => {
          const categoryStock = getStockByCategory(category.category);
          return (
            <div key={index} className="card group">
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{getCategoryIcon(category.category)}</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-sm">
                      {categoryStock.length} items
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{category.title}</h3>
                  <p className="text-gray-200 text-sm">{category.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Products by Category */}
      {!loading && stockItems.length > 0 && (
        <div className="mb-16">
          {categories.map((category) => {
            const categoryItems = getStockByCategory(category.category);
            if (categoryItems.length === 0) return null;

            return (
              <div key={category.category} className="mb-16">
                <div className="flex items-center justify-center mb-8">
                  <span className="text-4xl mr-4">{getCategoryIcon(category.category)}</span>
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#000080] mb-2">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      {item.images && item.images.length > 0 && (
                        <div className="h-48 relative">
                          <Image
                            src={item.images[0]}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            In Stock
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                          <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                        </div>
                        
                        <Link
                          href="/contact"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md font-medium block"
                        >
                          Contact for Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

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