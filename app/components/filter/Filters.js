import React from 'react';
import FilterButton from './FilterButton';
import SearchBar from './SearchBar';

const Filters = () => {
  const filters = [
    { label: 'All orders', count: 840, active: true },
    { label: 'Processing', count: 340, active: false },
    { label: 'Confirmed', count: 34, active: false },
    { label: 'Shipping', count: 221, active: false },
    { label: 'Delivered', count: 76, active: false },
    { label: 'Return', count: 7, active: false },
    { label: 'Cancel', count: 44, active: false },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 ">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter, index) => (
          <FilterButton
            key={index}
            label={filter.label}
            count={filter.count}
            active={filter.active}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <SearchBar placeholder="Search orders..." />
        <button className="flex items-center px-4 py-2 text-gray-600 transition bg-white border border-gray-300 rounded-full hover:bg-gray-100">
          <i className="fas fa-filter"></i> <span className="ml-2">Filters</span>
        </button>
      </div>
    </div>
  );
};

export default Filters;
