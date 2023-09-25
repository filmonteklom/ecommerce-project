import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform the search action with the searchQuery
    console.log(`Performing search for: ${searchQuery}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <TextField
       style={{
        left: '50rem',
        background: 'white',
        margin: '8px 0',
        padding: '6px',
        borderRadius: '20px',
        width: '300px',
        height: '40px',
        border: 'none !important',
      }}
      
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchInputChange}
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
