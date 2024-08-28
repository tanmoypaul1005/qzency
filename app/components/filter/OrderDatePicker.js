/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useOrderStore } from '@/store/ordersStore';
import { iCalender } from '@/util/imageImports';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OrderDatePicker = () => {

    const { selectDate, setSelectDate, tampOrdersList, setOrderList } = useOrderStore();

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
        <div className="relative">
            <DatePicker
                selected={selectDate}
                onChange={handleDateChange}
                placeholderText="Select Dates"
                dateFormat="MM/dd/yyyy"
                className="pr-4 pl-[37px] py-[18px] text-gray-700 border border-gray-300 rounded-md focus:outline-none "
            />
            <div className="absolute left-3.5 top-[21px]">
                <Image src={iCalender} alt="" />
            </div>
        </div>
    )
}

export default OrderDatePicker


