import React from 'react'

const TableHeader = () => {
    return (
        <thead>
          <tr className="text-xs font-[550] leading-4 text-left text-[#05060F99] bg-[#F9FAFB]">
            <th className="px-6 py-3 whitespace-nowrap">Order Id</th>
            <th className="px-6 py-3 whitespace-nowrap">Creating date</th>
            <th className="px-6 py-3 whitespace-nowrap">Customer info</th>
            <th className="px-6 py-3 whitespace-nowrap">Total</th>
            <th className="px-6 py-3 whitespace-nowrap">Quantity</th>
            <th className="px-6 py-3 whitespace-nowrap">Payment status</th>
            <th className="px-6 py-3 whitespace-nowrap">Delivery method</th>
            <th className="px-6 py-3 whitespace-nowrap">Status</th>
            <th className="px-6 py-3 whitespace-nowrap">Actions</th>
          </tr>
        </thead>
    )
}

export default TableHeader