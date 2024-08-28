import React from 'react';

const FilterBox = ({ label, count, active,onClick=()=>{} }) => {
  return (
    <button
    onClick={() => onClick(label)}
      className={`flex items-center py-2.5 px-2 rounded-md ${active ? 'bg-[#F3F8FF] text-[#2166F0] ' : 'bg-white text-gray-600 border border-gray-300'} hover:bg-gray-100 transition`}
    >
      {label} <span className={`ml-2 rounded-[3px] ${active? "bg-[#2166F0] text-white":"text-[#2166F0] bg-[#F3F8FF]"}  text-[11px] font-bold px-1.5 py-1`}>{count}</span>
    </button>
  );
};

export default FilterBox;
// import React from 'react';

// const FilterBox = ({ label, count, active, onClick }) => {
//     return (
//         <button
//             onClick={() => onClick(label)}
//             className={`px-4 py-2 rounded-lg ${active ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-blue-400`}
//         >
//             <span>{label}</span>
//             <span className="ml-2">({count})</span>
//         </button>
//     );
// };

// export default FilterBox;
