import { NextResponse } from 'next/server';
import { CURRENT_AFFAIRS_2020_2026 } from '@/lib/currentAffairsData';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      count: CURRENT_AFFAIRS_2020_2026.length,
      currentAffairs: CURRENT_AFFAIRS_2020_2026
    });
  } catch (error) {
    console.error('API Error in GET /api/current-affairs:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch current affairs' }, { status: 500 });
  }
}
