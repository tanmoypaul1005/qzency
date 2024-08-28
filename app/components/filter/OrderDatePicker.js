"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OrderDatePicker = () => {

    const [startDate, setStartDate] = useState(null);

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    return (
        <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        placeholderText="Select Dates"
        dateFormat="MM/dd/yyyy"
        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    )
}

export default OrderDatePicker