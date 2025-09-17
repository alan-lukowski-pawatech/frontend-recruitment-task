'use client';

import React, { useState } from 'react';
import styles from './SearchPage.module.scss';
import PostItem from './PostItem';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // TODO: Implement throttled search function
  // This function should:
  // 1. Make API call to JSONPlaceholder: https://jsonplaceholder.typicode.com/posts
  // 2. Use query parameter 'q' for search and '_page' & '_limit' for pagination
  // 3. Be throttled to prevent excessive API calls (suggested: 300ms)
  // 4. Handle loading states and errors
  const searchPosts = async (query: string, page: number = 1) => {
    // CANDIDATE TASK: Implement this function
    console.log('Search function called with:', { query, page });
  };

  // TODO: Implement throttled search using lodash
  // Import: import { throttle } from 'lodash';
  // CANDIDATE TASK: Import lodash throttle and create throttled search function

  // TODO: Implement load more functionality
  const loadMore = () => {
    // CANDIDATE TASK: Load next page of results
    console.log('Load more clicked');
  };

  // TODO: Implement auto-search with throttling
  // This should be called whenever searchTerm changes
  // Use the throttled function to prevent excessive API calls
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // CANDIDATE TASK: Implement throttled search on input change
    console.log('Input changed:', value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Post Search</h1>
        <p className={styles.subtitle}>
          Search through posts using JSONPlaceholder API
        </p>

        <div className={styles.searchForm}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search posts... (auto-search as you type)"
            className={styles.searchInput}
            disabled={loading}
          />
          {loading && (
            <div className={styles.searchStatus}>
              Searching...
            </div>
          )}
        </div>

        {error && (
          <div className={styles.error}>
            Error: {error}
          </div>
        )}

        {posts.length > 0 && (
          <div className={styles.results}>
            <h2 className={styles.resultsTitle}>
              Found {posts.length} result{posts.length !== 1 ? 's' : ''}
            </h2>

              <div className={styles.postsList}>
                  {posts.map((post) => <p style={{ color: 'black' }}>{post.title}</p>)}
              </div>

            {hasMore && (
              <button
                onClick={loadMore}
                className={styles.loadMoreButton}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            )}
          </div>
        )}

        {!loading && posts.length === 0 && searchTerm && (
          <div className={styles.noResults}>
            No posts found for &ldquo;{searchTerm}&rdquo;. Try a different search term.
          </div>
        )}
      </div>
    </div>
  );
}
