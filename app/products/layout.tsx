'use client';

import { useState } from 'react';
import Link from 'next/link';

const productCategories = [
  { name: 'Pool Tables', path: '/products/pool-tables' },
  { name: 'Table Tennis', path: '/products/table-tennis' },
  { name: 'Soccer Tables', path: '/products/soccer-tables' },
  { name: 'Accessories', path: '/products/accessories' },
];

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile sidebar toggle */}
        <button
          className="md:hidden flex items-center justify-center p-2 bg-[#000080] text-white rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>

        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? 'block' : 'hidden'
          } md:block w-full md:w-64 flex-shrink-0`}
        >
          <nav className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-[#000080] mb-4">
              Product Categories
            </h2>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.path}>
                  <Link
                    href={category.path}
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-[#DC143C] transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
} 