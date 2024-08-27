"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const DashboardSummary = ({ totalRevenue, orderItems, returnItems, fulfilledOrders }) => {
    const [startDate, setStartDate] = useState(null);

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    return (
        <div className="flex flex-col items-center justify-between w-full pb-6 mx-auto space-y-6 border-b-2 border-[#EAECF0] md:flex-row md:space-y-0 md:space-x-8">
            <div className="relative flex items-center">
                <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    placeholderText="Select Dates"
                    dateFormat="MM/dd/yyyy"
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-600">
                    {startDate ? format(startDate, 'MM/dd/yyyy') : ''}
                </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-6 md:gap-10 md:grid-cols-4">
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500">Total Revenue</span>
                    <span className="text-xl font-semibold text-gray-800">${totalRevenue}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500">Order Items</span>
                    <span className="text-xl font-semibold text-gray-800">{orderItems}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500">Return Items</span>
                    <span className="text-xl font-semibold text-gray-800">{returnItems}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500">Fulfilled Orders</span>
                    <span className="text-xl font-semibold text-gray-800">{fulfilledOrders}</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardSummary;
