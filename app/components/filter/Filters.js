import React from 'react';
import FilterButton from './FilterButton';
import SearchBar from './SearchBar';
import FilterBox from './FilterBox';
import orders from "../../../data/orders.json";

const Filters = () => {
  
  const filters = [
    { label: 'All orders', count: 0, active: true },
    { label: 'Processing', count: 0, active: false },
    { label: 'Confirmed', count: 0, active: false },
    { label: 'Shipping', count: 0, active: false },
    { label: 'Delivered', count: 0, active: false },
    { label: 'Return', count: 0, active: false },
    { label: 'Cancel', count: 0, active: false },
  ];
  
  const statusMap = {
    'Processing': 'Processing',
    'Confirmed': 'Confirmed',
    'Shipping': 'Shipping',
    'Delivered': 'Delivered',
    'Return': 'Return',
    'Cancel': 'Cancel'
  };
  
  orders.forEach(order => {
    filters[0].count++; // Increment 'All orders' count
    const status = order.status;
    if (statusMap[status]) {
      const filter = filters.find(f => f.label === statusMap[status]);
      if (filter) {
        filter.count++;
      }
    }
  });
  
  console.log(filters);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 ">
      <div className="flex flex-wrap gap-2">
        {filters?.map((filter, index) => (
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
