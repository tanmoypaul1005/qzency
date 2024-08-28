/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useOrderStore } from '@/store/ordersStore';
import React, { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OrderDatePicker = () => {

    const { ordersList,tampOrdersList, setOrderList } = useOrderStore();

    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        if (startDate) {
            const filtered = tampOrdersList.filter(order => {
                const orderDate = new Date(order.createdAt.$date);
                return orderDate.toDateString() === startDate.toDateString();
            });

            setOrderList(filtered);
        } else {
            
            setOrderList(tampOrdersList);
        }
    }, [startDate]);

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    return (
        <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        placeholderText="Select Dates"
        dateFormat="MM/dd/yyyy"
        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none "
    />
    )
}

export default OrderDatePicker


