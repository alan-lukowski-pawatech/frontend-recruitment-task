import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo purposes
// In a real app, this would be a database
let searchHistory: { id: number; query: string; timestamp: string; resultsCount: number }[] = [];
let nextId = 1;

export async function GET() {
  // TODO: Implement GET endpoint to retrieve search history
  // Should return the last 10 searches, sorted by most recent

  return NextResponse.json({
    message: 'Search history endpoint - implement GET functionality',
    history: searchHistory.slice(-10).reverse()
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, resultsCount } = body;

    // TODO: Implement POST endpoint to save search history
    // Should validate input and add new search to history

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query is required and must be a string' },
        { status: 400 }
      );
    }

    const newSearch = {
      id: nextId++,
      query: query.trim(),
      timestamp: new Date().toISOString(),
      resultsCount: resultsCount || 0
    };

    searchHistory.push(newSearch);

    // Keep only last 50 searches to prevent memory issues
    if (searchHistory.length > 50) {
      searchHistory = searchHistory.slice(-50);
    }

    return NextResponse.json({
      message: 'Search saved successfully',
      search: newSearch
    });
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }
}