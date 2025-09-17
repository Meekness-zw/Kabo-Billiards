import { NextResponse } from 'next/server';
import { getArticles } from '@/lib/data';

export async function GET() {
  try {
    const articles = await getArticles();
    // Only return published articles for public API
    const publishedArticles = articles.filter(article => article.published);
    return NextResponse.json(publishedArticles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
