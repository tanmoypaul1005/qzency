import React from 'react';

const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex items-center px-4 py-2 bg-white border rounded-md">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-grow text-gray-600 outline-none"
      />
      <i className="text-gray-500 fas fa-search"></i>
    </div>
  );
};

export default SearchBar;
