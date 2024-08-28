/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from 'react';
import FilterButton from './FilterButton';
import SearchBar from './SearchBar';
import FilterBox from './FilterBox';
import ordersData from "../../../data/orders.json";
import { useOrderStore } from '@/store/ordersStore';

const Filters = () => {

    const {selectDate, ordersList, setOrderList } = useOrderStore();
    console.log("ordersList",ordersList)

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

  
    useEffect(() => {
        setFilters([
            { label: 'All orders', count:ordersList?.length?? 0 , active: true },
            { label: 'Processing', count: ordersList?.filter((i)=>i?.status===statusMap.Processing)?.length ?? 0, active: false },
            { label: 'Confirmed', count: ordersList?.filter((i)=>i?.status===statusMap.Confirmed)?.length ?? 0, active: false },
            { label: 'Shipping', count: ordersList?.filter((i)=>i?.status===statusMap?.Shipped)?.length ?? 0, active: false },
            { label: 'Delivered', count: ordersList?.filter((i)=>i?.status===statusMap.Delivered)?.length ?? 0, active: false },
            { label: 'Return', count: ordersList?.filter((i)=>i?.status===statusMap.Refunded)?.length ?? 0, active: false },
            { label: 'Cancel', count: ordersList?.filter((i)=>i?.status===statusMap.Cancel)?.length ?? 0, active: false }, 
        ])
    }, [ordersList,selectDate]); // Empty dependency array ensures this runs only once on mount

    const handleFilterClick = (label) => {
        const updatedFilters = filters.map(filter => ({
            ...filter,
            active: filter.label === label
        }));

        setFilters(updatedFilters);

        // Filter the orders based on the selected filter
        if (label === 'All orders') {
            setOrderList(ordersData);
        } else {
            const filteredOrders = ordersData.filter(order => statusMap[order.status] === label);
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
                        active={filter.active}
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
