import fs from 'fs/promises';
import path from 'path';

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export interface StockTable {
  id: string;
  name: string;
  category: 'pool' | 'snooker' | 'table-tennis' | 'foosball' | 'other';
  brand: string;
  price: number;
  description: string;
  specifications: string;
  images: string[];
  inStock: boolean;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const ARTICLES_FILE = path.join(DATA_DIR, 'articles.json');
const STOCK_FILE = path.join(DATA_DIR, 'stock.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Articles CRUD operations
export async function getArticles(): Promise<Article[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(ARTICLES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function getArticle(id: string): Promise<Article | null> {
  const articles = await getArticles();
  return articles.find(article => article.id === id) || null;
}

export async function saveArticle(article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<Article> {
  const articles = await getArticles();
  const now = new Date().toISOString();
  const newArticle: Article = {
    ...article,
    id: Date.now().toString(),
    createdAt: now,
    updatedAt: now,
  };
  
  articles.push(newArticle);
  await fs.writeFile(ARTICLES_FILE, JSON.stringify(articles, null, 2));
  return newArticle;
}

export async function updateArticle(id: string, updates: Partial<Article>): Promise<Article | null> {
  const articles = await getArticles();
  const index = articles.findIndex(article => article.id === id);
  
  if (index === -1) return null;
  
  articles[index] = {
    ...articles[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  
  await fs.writeFile(ARTICLES_FILE, JSON.stringify(articles, null, 2));
  return articles[index];
}

export async function deleteArticle(id: string): Promise<boolean> {
  const articles = await getArticles();
  const filteredArticles = articles.filter(article => article.id !== id);
  
  if (filteredArticles.length === articles.length) return false;
  
  await fs.writeFile(ARTICLES_FILE, JSON.stringify(filteredArticles, null, 2));
  return true;
}

// Stock CRUD operations
export async function getStock(): Promise<StockTable[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(STOCK_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function getStockItem(id: string): Promise<StockTable | null> {
  const stock = await getStock();
  return stock.find(item => item.id === id) || null;
}

export async function saveStockItem(item: Omit<StockTable, 'id' | 'createdAt' | 'updatedAt'>): Promise<StockTable> {
  const stock = await getStock();
  const now = new Date().toISOString();
  const newItem: StockTable = {
    ...item,
    id: Date.now().toString(),
    createdAt: now,
    updatedAt: now,
  };
  
  stock.push(newItem);
  await fs.writeFile(STOCK_FILE, JSON.stringify(stock, null, 2));
  return newItem;
}

export async function updateStockItem(id: string, updates: Partial<StockTable>): Promise<StockTable | null> {
  const stock = await getStock();
  const index = stock.findIndex(item => item.id === id);
  
  if (index === -1) return null;
  
  stock[index] = {
    ...stock[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  
  await fs.writeFile(STOCK_FILE, JSON.stringify(stock, null, 2));
  return stock[index];
}

export async function deleteStockItem(id: string): Promise<boolean> {
  const stock = await getStock();
  const filteredStock = stock.filter(item => item.id !== id);
  
  if (filteredStock.length === stock.length) return false;
  
  await fs.writeFile(STOCK_FILE, JSON.stringify(filteredStock, null, 2));
  return true;
}
