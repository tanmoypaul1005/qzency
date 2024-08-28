/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from 'react';
import FilterButton from './FilterButton';
import SearchBar from './SearchBar';
import FilterBox from './FilterBox';
import ordersData from "../../../data/orders.json";
import { useOrderStore } from '@/store/ordersStore';

const Filters = () => {
    const { tampOrdersList, selectDate, setOrderList, setSelectDate } = useOrderStore();
    
    // Initialize state with an empty array to prevent mismatches
    const [filters, setFilters] = useState([
        { label: 'All orders', count: 0, active: true },
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
        const newFilters = filters.map(filter => ({ ...filter })); // Create a copy

        // Filter orders based on selected date and status
        const filteredOrders = ordersData.filter(order => {
            const orderDate = new Date(order.date); // Assuming your order data has a 'date' field
            return selectDate ? orderDate.toDateString() === selectDate.toDateString() : true;
        });

        filteredOrders.forEach(order => {
            newFilters[0].count++; // Increment 'All orders' count
            const status = order.status;
            if (statusMap[status]) {
                const filter = newFilters.find(f => f.label === statusMap[status]);
                if (filter) {
                    filter.count++;
                }
            }
        });

        setFilters(newFilters);
    }, [selectDate]); // Re-run when selectDate changes

    const handleFilterClick = (label) => {
        const updatedFilters = filters.map(filter => ({
            ...filter,
            active: filter.label === label
        }));

        setFilters(updatedFilters);

        // Filter the orders based on the selected filter and date
        const filteredOrders = ordersData.filter(order => {
            const orderDate = new Date(order.date); // Assuming your order data has a 'date' field
            const statusMatch = label === 'All orders' || statusMap[order.status] === label;
            const dateMatch = selectDate ? orderDate.toDateString() === selectDate.toDateString() : true;
            return statusMatch && dateMatch;
        });

        setOrderList(filteredOrders);
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
