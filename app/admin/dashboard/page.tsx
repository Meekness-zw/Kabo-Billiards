'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface DashboardStats {
  totalArticles: number;
  publishedArticles: number;
  totalStock: number;
  inStockItems: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalArticles: 0,
    publishedArticles: 0,
    totalStock: 0,
    inStockItems: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [articlesRes, stockRes] = await Promise.all([
          fetch('/api/admin/articles'),
          fetch('/api/admin/stock'),
        ]);

        if (articlesRes.ok && stockRes.ok) {
          const articles = await articlesRes.json();
          const stock = await stockRes.json();

          setStats({
            totalArticles: articles.length,
            publishedArticles: articles.filter((a: any) => a.published).length,
            totalStock: stock.length,
            inStockItems: stock.filter((s: any) => s.inStock).length,
          });
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Articles',
      value: stats.totalArticles,
      icon: '📝',
      color: 'bg-blue-500',
    },
    {
      title: 'Published Articles',
      value: stats.publishedArticles,
      icon: '✅',
      color: 'bg-green-500',
    },
    {
      title: 'Total Stock Items',
      value: stats.totalStock,
      icon: '📦',
      color: 'bg-purple-500',
    },
    {
      title: 'In Stock Items',
      value: stats.inStockItems,
      icon: '✨',
      color: 'bg-orange-500',
    },
  ];

  const quickActions = [
    {
      title: 'Create New Article',
      description: 'Write and publish a new article',
      href: '/admin/dashboard/articles/new',
      icon: '✍️',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'Add Stock Item',
      description: 'Add a new table to your inventory',
      href: '/admin/dashboard/stock/new',
      icon: '➕',
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      title: 'Manage Articles',
      description: 'View and edit existing articles',
      href: '/admin/dashboard/articles',
      icon: '📋',
      color: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      title: 'Manage Stock',
      description: 'Update inventory and pricing',
      href: '/admin/dashboard/stock',
      icon: '🔧',
      color: 'bg-orange-600 hover:bg-orange-700',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to your admin dashboard. Manage your articles and stock inventory.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`${stat.color} rounded-lg p-3 text-white text-2xl mr-4`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className={`${action.color} rounded-lg p-3 text-white text-2xl mb-4 w-fit`}>
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {action.title}
              </h3>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Getting Started</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Create your first article</h3>
                <p className="text-sm text-gray-600">
                  Start by creating an article about your latest products or services.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">2</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Add stock items</h3>
                <p className="text-sm text-gray-600">
                  Add your billiards tables and equipment to the inventory system.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">3</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Publish content</h3>
                <p className="text-sm text-gray-600">
                  Make your articles and stock items visible on your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
