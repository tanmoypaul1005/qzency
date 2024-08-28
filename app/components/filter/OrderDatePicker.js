/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useOrderStore } from '@/store/ordersStore';
import React, { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OrderDatePicker = () => {

    const {selectDate,setSelectDate, tampOrdersList, setOrderList } = useOrderStore();

    useEffect(() => {
        if (selectDate) {
            const filtered = tampOrdersList.filter(order => {
                const orderDate = new Date(order?.createdAt?.$date);
                return orderDate?.toDateString() === selectDate?.toDateString();
            });

            setOrderList(filtered);
        } else {
            setOrderList(tampOrdersList);
        }
    }, [selectDate]);

    const handleDateChange = (date) => {
        setSelectDate(date);
    };

    return (
        <DatePicker
        selected={selectDate}
        onChange={handleDateChange}
        placeholderText="Select Dates"
        dateFormat="MM/dd/yyyy"
        className="px-4 py-[18px] text-gray-700 border border-gray-300 rounded-md focus:outline-none "
    />
    )
}

export default OrderDatePicker


