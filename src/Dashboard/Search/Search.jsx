import React from 'react';
import { useState } from 'react';
import './search.css'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);

  };

  return (
    <div id='container-div' className="flex flex-row items-center justify-end  w-1/5 " > {/* Added justify-start */}
      <input
        className="bg-white h-10 w-full px-6  rounded-md shadow-md text-black"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;



// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';

// function SearchBar() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearch = () => {
//     // Perform the search action with the searchQuery
//     console.log(`Performing search for: ${searchQuery}`);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <TextField
//        style={{
//         left: '50rem',
//         background: 'white',
//         margin: '8px 0',
//         padding: '6px',
//         borderRadius: '20px',
//         width: '300px',
//         height: '40px',
//         border: 'none !important',
//       }}
      
//         label="Search"
//         variant="outlined"
//         fullWidth
//         value={searchQuery}
//         onChange={handleSearchInputChange}
//         onKeyDown={handleKeyPress}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton color="primary" onClick={handleSearch}>
//                 <SearchIcon />
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />
//     </div>
//   );
// }

// export default SearchBar;
