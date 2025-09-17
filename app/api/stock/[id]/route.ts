import { NextRequest, NextResponse } from 'next/server';
import { getStockItem } from '@/lib/data';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const stockItem = await getStockItem(params.id);
    
    if (!stockItem) {
      return NextResponse.json({ error: 'Stock item not found' }, { status: 404 });
    }

    // Only return in-stock items for public API
    if (!stockItem.inStock) {
      return NextResponse.json({ error: 'Stock item not available' }, { status: 404 });
    }

    return NextResponse.json(stockItem);
  } catch (error) {
    console.error('Error fetching stock item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
