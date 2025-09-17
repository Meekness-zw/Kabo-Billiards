'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/data';

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

      {/* Latest Articles Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Latest Articles</h2>
            <p className="text-gray-600 mt-4">Stay updated with the latest news and insights from Kabo Billiards</p>
          </div>
          <LatestArticles />
        </div>
      </section>

      {/* Game Room Design Section */}
      <section className="py-16 px-4 bg-white">
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

// Latest Articles Component
function LatestArticles() {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (response.ok) {
          const data = await response.json();
          setArticles(data.slice(0, 3)); // Show only latest 3 articles
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-6 animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">📝</div>
        <p className="text-gray-600">No articles available yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((article) => (
        <article key={article.id} className="card p-6 hover:shadow-lg transition-shadow">
          {article.image && (
            <div className="h-48 relative mb-4">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <div className="text-sm text-gray-500 mb-2">
            {new Date(article.createdAt).toLocaleDateString()}
          </div>
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
          <Link
            href={`/blog/${article.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </article>
      ))}
      {articles.length > 0 && (
        <div className="md:col-span-3 text-center mt-8">
          <Link href="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      )}
    </div>
  );
}
