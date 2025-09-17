'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { StockTable } from '@/lib/data';

export default function StockPage() {
  const [stock, setStock] = useState<StockTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    try {
      const response = await fetch('/api/admin/stock');
      if (response.ok) {
        const data = await response.json();
        setStock(data);
      } else {
        setError('Failed to fetch stock');
      }
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this stock item?')) return;

    try {
      const response = await fetch(`/api/admin/stock/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStock(stock.filter(item => item.id !== id));
      } else {
        alert('Failed to delete stock item');
      }
    } catch {
      alert('Network error');
    }
  };

  const toggleInStock = async (id: string, inStock: boolean) => {
    try {
      const response = await fetch(`/api/admin/stock/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inStock }),
      });

      if (response.ok) {
        const updatedItem = await response.json();
        setStock(stock.map(item => 
          item.id === id ? updatedItem : item
        ));
      } else {
        alert('Failed to update stock item');
      }
    } catch {
      alert('Network error');
    }
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Stock Management</h1>
          <p className="mt-2 text-gray-600">Manage your inventory and product listings</p>
        </div>
        <Link
          href="/admin/dashboard/stock/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
        >
          Add New Item
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}

      {stock.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No stock items yet</h3>
          <p className="text-gray-600 mb-6">Get started by adding your first product</p>
          <Link
            href="/admin/dashboard/stock/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
          >
            Add Stock Item
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stock.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {item.images && item.images.length > 0 && (
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                  <button
                    onClick={() => toggleInStock(item.id, !item.inStock)}
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.inStock
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </button>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-blue-600">${item.price}</span>
                  <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Link
                    href={`/admin/dashboard/stock/${item.id}/edit`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-3 rounded-md text-sm font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-md text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
