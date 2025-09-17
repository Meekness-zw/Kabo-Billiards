import { NextResponse } from 'next/server';
import { getStock } from '@/lib/data';

export async function GET() {
  try {
    const stock = await getStock();
    // Only return in-stock items for public API
    const availableStock = stock.filter(item => item.inStock);
    return NextResponse.json(availableStock);
  } catch (error) {
    console.error('Error fetching stock:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
