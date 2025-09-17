# Frontend Developer Recruitment Task

## Overview
This is a practical coding assessment for senior frontend developers. You'll be implementing search functionality for a NextJS application that fetches data from a public API.

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Your Tasks

You need to complete the implementation in `src/components/SearchPage/SearchPage.tsx`. The UI is already built and styled - you just need to implement the functionality.

### 1. API Integration
**File:** `src/components/SearchPage/SearchPage.tsx`
**Function:** `searchPosts`

Implement the search functionality using JSONPlaceholder API:
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts`
- **Search parameter:** `q` (e.g., `?q=search-term`)
- **Pagination:** `_page` and `_limit` (e.g., `?_page=1&_limit=10`)

Requirements:
- Handle loading states (`setLoading`)
- Handle errors (`setError`)
- Update posts state (`setPosts`)
- Support both new searches and pagination

### 2. Auto-Search with Throttling
**Function:** `handleInputChange` + lodash `throttle`

Implement auto-search as the user types with throttling:
- Search automatically when input changes (no search button)
- Only search when input has content (after trim())
- Import `throttle` from lodash and create throttled search function

### 3. Custom PostItem Component
**File:** `src/components/SearchPage/PostItem.tsx` (predefined)

You can either:
- Create your own PostItem component from scratch
- Use the predefined PostItem component that's already imported
- The predefined component includes proper TypeScript interfaces and styling
- 
### 4. Pagination
**Function:** `loadMore`

Implement "Load More" functionality:
- Append new results to existing posts
- Increment page number
- Handle "no more results" state (`setHasMore`)

### 5. Bonus Tasks
If you finish early, consider implementing:

#### Search History Integration
The app includes an API route at `/api/search-history`. You can:
- Save successful searches to history (POST)
- Display recent searches (GET)
- Add search suggestions

#### Enhanced UX
- Debounce search input for real-time search
- Add keyboard shortcuts (Enter to search, Escape to clear)
- Implement search result highlighting

## API Documentation

### JSONPlaceholder Posts API
```
GET https://jsonplaceholder.typicode.com/posts?q=search&_page=1&_limit=10
```

**Response format:**
```json
[
  {
    "id": 1,
    "title": "Post title",
    "body": "Post content...",
    "userId": 1
  }
]
```

### Local Search History API
```
GET /api/search-history    // Get recent searches
POST /api/search-history   // Save search
```

## Evaluation Criteria

We'll be evaluating:
1. **Functionality** - Does the search work correctly?
2. **Code Quality** - Clean, readable, and well-structured code
3. **Error Handling** - Proper handling of edge cases
4. **User Experience** - Smooth interactions and feedback

## Tips

- The UI components and styling are already complete
- Focus on implementing the core functionality first
- Ask questions if anything is unclear
- Use modern React patterns (hooks, functional components)
- TypeScript types are already defined for the Post interface
- Lodash is already installed - use `import { throttle } from 'lodash'` for throttling

## Need Help?

- Check the browser console for any errors
- The JSONPlaceholder API is free and doesn't require authentication
- All TODO comments in the code indicate where you need to implement functionality

Good luck! 🚀
