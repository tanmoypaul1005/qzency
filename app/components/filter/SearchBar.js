/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useOrderStore } from '@/store/ordersStore';
import React, { useState,useEffect } from 'react';
import { useDebounce } from "use-debounce";
import { ImSpinner2 } from "react-icons/im";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ placeholder }) => {
  
  const { tampOrdersList,selectFilter, selectDate,setOrderList,searchQuery, setSearchQuery } = useOrderStore();

  const [isLoading, setIsLoading] = useState(false);

  const [searchValue] = useDebounce(searchQuery, 400);
  const statusMap = {
    'Processing': 'Processing',
    'Confirmed': 'Confirmed',
    'Shipped': 'Shipping',
    'Delivered': 'Delivered',
    'Refunded': 'Return',
    'Cancel': 'Cancel'
};
  useEffect(() => {
    handleInputChange(searchValue)
  }, [searchValue])

  const handleInputChange = (query) => {
    setIsLoading(true);
    let filtered = tampOrdersList;
    if (selectDate) {
      filtered = filtered?.filter(order => {
          const orderDate = new Date(order?.createdAt?.$date);
          return orderDate?.toDateString() === new Date(selectDate)?.toDateString();
      });
    }
    if(selectFilter){
      filtered =filtered?.filter(order => statusMap[order.status] === selectFilter);
    }

     filtered = filtered?.filter(order => {
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

    setOrderList(filtered);
    setTimeout(() => {
      
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="relative flex items-center px-4 py-2 bg-white border rounded-md">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {setSearchQuery(e.target.value)}}
        className="flex-grow text-gray-600 outline-none"
      />
      <div className="absolute top-0 right-2">
        {isLoading ? (
          <ImSpinner2 className="animate-spin duration-150 text-gray-600 border-gray-400 w-5 h-[42px]" />
        ) : (
          <BiSearch className="w-5 h-[42px]" />
        )}
      </div>
    </div>
  );
};

export default SearchBar;