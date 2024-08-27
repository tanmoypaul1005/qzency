import React from 'react';

const FilterButton = ({ label, count, active }) => {
  return (
    <button
      className={`flex items-center py-2.5 px-2 rounded-md ${active ? 'bg-[#F3F8FF] text-[#2166F0] ' : 'bg-white text-gray-600 border border-gray-300'} hover:bg-gray-100 transition`}
    >
      {label} <span className={`ml-2 rounded-[3px] ${active? "bg-[#2166F0] text-white":"text-[#2166F0] bg-[#F3F8FF]"}  text-[11px] font-bold px-1.5 py-1`}>{count}</span>
    </button>
  );
};

export default FilterButton;
