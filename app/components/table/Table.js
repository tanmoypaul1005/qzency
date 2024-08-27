import React from 'react';

const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-sm leading-normal text-left text-gray-600 uppercase bg-gray-200">
            <th className="px-6 py-3">Order Id</th>
            <th className="px-6 py-3">Creating date</th>
            <th className="px-6 py-3">Customer info</th>
            <th className="px-6 py-3">Total</th>
            <th className="px-6 py-3">Quantity</th>
            <th className="px-6 py-3">Payment status</th>
            <th className="px-6 py-3">Delivery method</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-600">
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
