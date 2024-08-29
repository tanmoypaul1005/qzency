/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from 'react';
import FilterButton from './FilterButton';
import SearchBar from './SearchBar';
import FilterBox from './FilterBox';
import { useOrderStore } from '@/store/ordersStore';

const Filters = () => {

    const {selectDate,searchQuery,setCurrentPage,tampOrdersList, selectFilter,setSelectFilter,ordersList, setOrderList } = useOrderStore();

    // Initialize state with an empty array to prevent mismatches
    const [filters, setFilters] = useState([
        { label: 'All orders', count:ordersList?.length?? 0 , active: true },
        { label: 'Processing', count: 0, active: false },
        { label: 'Confirmed', count: 0, active: false },
        { label: 'Shipping', count: 0, active: false },
        { label: 'Delivered', count: 0, active: false },
        { label: 'Return', count: 0, active: false },
        { label: 'Cancel', count: 0, active: false },
    ]);

    const statusMap = {
        'Processing': 'Processing',
        'Confirmed': 'Confirmed',
        'Shipped': 'Shipping',
        'Delivered': 'Delivered',
        'Refunded': 'Return',
        'Cancel': 'Cancel'
    };
    let filtered = tampOrdersList;
    if (selectDate) {
        filtered = tampOrdersList.filter(order => {
            const orderDate = new Date(order?.createdAt?.$date);
            return orderDate?.toDateString() === selectDate?.toDateString();
        });
    } else if (searchQuery) {
        filtered =  filtered?.filter(order => {
            const fullName = `${order.user?.firstName} ${order.user.lastName}`.toLowerCase();
            const email = order?.user?.email?.toLowerCase();
            const phone = order?.user?.phone?.toLowerCase();
            const orderId = order?._id?.$oid?.toLowerCase();
      
            return (
              fullName?.includes(searchQuery?.toLowerCase()) ||
              email?.includes(searchQuery?.toLowerCase()) ||
              phone?.includes(searchQuery?.toLowerCase()) ||
              orderId?.includes(searchQuery?.toLowerCase())
            );
          });
    }
    else {
        filtered= tampOrdersList;
    }
  
    useEffect(() => {
        if(selectDate && selectFilter === null){
            setFilters([
                { label: 'All orders', count:ordersList?.length?? 0 , active: true },
                { label: 'Processing', count: ordersList?.filter((i)=>i?.status===statusMap.Processing)?.length ?? 0, active: false },
                { label: 'Confirmed', count: ordersList?.filter((i)=>i?.status===statusMap.Confirmed)?.length ?? 0, active: false },
                { label: 'Shipping', count: ordersList?.filter((i)=>i?.status=== "Shipped")?.length ?? 0, active: false },
                { label: 'Delivered', count: ordersList?.filter((i)=>i?.status===statusMap.Delivered)?.length ?? 0, active: false },
                { label: 'Return', count: ordersList?.filter((i)=>i?.status===statusMap.Refunded)?.length ?? 0, active: false },
                { label: 'Cancel', count: ordersList?.filter((i)=>i?.status===statusMap.Cancel)?.length ?? 0, active: false }, 
            ])
        }else if(selectDate=== null  && selectFilter === null){
            setFilters([
                { label: 'All orders', count:ordersList?.length?? 0 , active: true },
                { label: 'Processing', count: ordersList?.filter((i)=>i?.status===statusMap.Processing)?.length ?? 0, active: false },
                { label: 'Confirmed', count: ordersList?.filter((i)=>i?.status===statusMap.Confirmed)?.length ?? 0, active: false },
                { label: 'Shipping', count: ordersList?.filter((i)=>i?.status===  "Shipped")?.length ?? 0, active: false },
                { label: 'Delivered', count: ordersList?.filter((i)=>i?.status===statusMap.Delivered)?.length ?? 0, active: false },
                { label: 'Return', count: ordersList.filter((i)=>i?.status===statusMap.Refunded)?.length ?? 0, active: false },
                { label: 'Cancel', count: ordersList?.filter((i)=>i?.status===statusMap.Cancel)?.length ?? 0, active: false }, 
            ])
        }else {
            setFilters([
                { label: 'All orders', count:filtered?.length?? 0 , active: true },
                { label: 'Processing', count: filtered?.filter((i)=>i?.status===statusMap.Processing)?.length ?? 0, active: false },
                { label: 'Confirmed', count: filtered?.filter((i)=>i?.status===statusMap.Confirmed)?.length ?? 0, active: false },
                { label: 'Shipping', count: filtered?.filter((i)=>i?.status=== "Shipped")?.length ?? 0, active: false },
                { label: 'Delivered', count: filtered?.filter((i)=>i?.status===statusMap.Delivered)?.length ?? 0, active: false },
                { label: 'Return', count: filtered?.filter((i)=>i?.status===statusMap.Refunded)?.length ?? 0, active: false },
                { label: 'Cancel', count: filtered?.filter((i)=>i?.status===statusMap.Cancel)?.length ?? 0, active: false }, 
            ])
        }
  
    }, [ordersList,selectDate]); // Empty dependency array ensures this runs only once on mount

    const handleFilterClick = (label) => {
        setSelectFilter(label);
        setCurrentPage(1);
        // Filter the orders based on the selected filter
        if ( label === 'All orders') {
            if(searchQuery){
                console.log("searchQuery",searchQuery)
                filtered =  tampOrdersList?.filter(order => {
                    const fullName = `${order.user?.firstName} ${order.user.lastName}`.toLowerCase();
                    const email = order?.user?.email?.toLowerCase();
                    const phone = order?.user?.phone?.toLowerCase();
                    const orderId = order?._id?.$oid?.toLowerCase();
              
                    return (
                      fullName?.includes(searchQuery?.toLowerCase()) ||
                      email?.includes(searchQuery?.toLowerCase()) ||
                      phone?.includes(searchQuery?.toLowerCase()) ||
                      orderId?.includes(searchQuery?.toLowerCase())
                    );
                  });
                  setOrderList(filtered);
            }else if(selectDate === null){
                setOrderList(ordersList);
            }
            
            else{
                setOrderList(filtered);
            }
        } else {
            const filteredOrders = filtered?.filter(order => statusMap[order.status] === label);
            setOrderList(filteredOrders);
        }
    };

    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
                {filters.map((filter, index) => (
                    <FilterBox
                        key={index}
                        label={filter.label}
                        count={filter.count}
                        active={filter.label==="All orders" && selectFilter=== null ? true:  selectFilter === filter.label }
                        onClick={handleFilterClick}
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
