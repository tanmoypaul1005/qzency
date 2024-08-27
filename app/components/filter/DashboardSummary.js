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

    const summaryData = [
        { label: 'Total Revenue', value: `$${totalRevenue}` },
        { label: 'Order Items', value: orderItems },
        { label: 'Return Items', value: returnItems },
        { label: 'Fulfilled Orders', value: fulfilledOrders },
    ];

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
            
            <div className="grid w-full border border-[#EAECF0] rounded-lg grid-cols-2 md:grid-cols-4">
            {summaryData.map((item, index) => (
                <div key={index} className={`flex flex-col ml-5 py-2.5 items-start ${index !== summaryData.length - 1 ? 'border-r border-[#EAECF0]' : ''}`}>
                    <span className="text-sm font-medium text-gray-500">{item.label}</span>
                    <span className="text-base font-bold text-gray-[#323232]">{item.value}</span>
                </div>
            ))}
        </div>
        </div>
    );
};

export default DashboardSummary;
