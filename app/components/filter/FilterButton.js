import React from 'react';

const FilterButton = ({ label, count, active }) => {
  return (
    <button
      className={`flex items-center py-2 px-4 rounded-md border ${active ? 'bg-blue-100 text-blue-600 border-blue-600' : 'bg-white text-gray-600 border-gray-300'} hover:bg-gray-100 transition`}
    >
      {label} <span className="ml-2 text-[#2166F0] bg-[#F3F8FF] text-[11px] font-bold px-1.5 py-1">{count}</span>
    </button>
  );
};

export default FilterButton;
