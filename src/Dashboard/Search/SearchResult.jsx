import React from 'react';
import { useLocation } from 'react-router-dom';



function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  // Fetch and display search results based on 'searchQuery'

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      {/* Display search results here */}
    </div>
  );
}

export default SearchResults;
