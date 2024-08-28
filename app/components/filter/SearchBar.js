"use client"
import { useOrderStore } from '@/store/ordersStore';
import React, { useState } from 'react';

const SearchBar = ({ placeholder }) => {
  const { tampOrdersList, setOrderList } = useOrderStore();
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredOrders = tampOrdersList?.filter(order => {
      const fullName = `${order.user.firstName} ${order.user.lastName}`.toLowerCase();
      const email = order.user.email.toLowerCase();
      const phone = order.user.phone.toLowerCase();
      const orderId = order._id.$oid.toLowerCase();

      return (
        fullName.includes(query.toLowerCase()) ||
        email.includes(query.toLowerCase()) ||
        phone.includes(query.toLowerCase()) ||
        orderId.includes(query.toLowerCase())
      );
    });

    setOrderList(filteredOrders);
  };

  return (
    <div className="flex items-center px-4 py-2 bg-white border rounded-md">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
        className="flex-grow text-gray-600 outline-none"
      />
     
    </div>
  );
};

export default SearchBar;