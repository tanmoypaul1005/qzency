import React from 'react';
import FilterButton from './FilterButton';
import SearchBar from './SearchBar';
import FilterBox from './FilterBox';

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
          <FilterBox
            key={index}
            label={filter.label}
            count={filter.count}
            active={filter.active}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <SearchBar placeholder="Search orders..." />
        <FilterButton />
      </div>
    </div>
  );
};

export default Filters;
