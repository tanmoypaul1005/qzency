"use client";
import { useOrderStore } from '@/store/ordersStore';
import { iFilter } from '@/util/imageImports';
import Image from 'next/image';
import React, { useState } from 'react';

const FilterButton = () => {
    const { tampOrdersList,setSelectFilter,setSearchQuery, setOrderList,setSelectDate } = useOrderStore();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState('');
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [selectedPaymentStatus, setSelectedPaymentStatus] = useState([]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleDateChange = (event) => {
        setSelectedDateRange(event.target.value);
    };

    const handleStatusChange = (event) => {
        const status = event.target.value;
        setSelectedStatus(prev =>
            prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
        );
    };

    const handlePaymentStatusChange = (event) => {
        const status = event.target.value;
        setSelectedPaymentStatus(prev =>
            prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
        );
    };

    const applyFilters = () => {
        let filteredOrders = tampOrdersList;

        // Date Filter
        if (selectedDateRange) {
            const currentDate = new Date();
            filteredOrders = filteredOrders.filter(order => {
                const orderDate = new Date(order.createdAt.$date);
                switch (selectedDateRange) {
                    case 'lastWeek':
                        return orderDate >= new Date(currentDate.setDate(currentDate.getDate() - 7));
                    case 'lastMonth':
                        return orderDate >= new Date(currentDate.setMonth(currentDate.getMonth() - 1));
                    case 'last3Months':
                        return orderDate >= new Date(currentDate.setMonth(currentDate.getMonth() - 3));
                    case 'lastYear':
                        return orderDate >= new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
                    default:
                        return true;
                }
            });
        }

        // Status Filter
        if (selectedStatus.length > 0) {
            filteredOrders = filteredOrders.filter(order =>
                selectedStatus.includes(order.status)
            );
        }

        // Payment Status Filter
        if (selectedPaymentStatus.length > 0) {
            filteredOrders = filteredOrders.filter(order =>
                selectedPaymentStatus.includes(order.payment.status)
            );
        }

        setOrderList(filteredOrders);setSelectDate
        setSelectDate(null);
        setSelectFilter(null)
        setSearchQuery("");
        setCurrentPage(1);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full px-4 py-2 space-x-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none "
            >
                <div className="flex items-center justify-center mt-0.5">
                    <Image src={iFilter} alt=""/>
                </div>
                <div>Filter</div>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 w-64 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-4">
                        {/* Date Created Filter */}
                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-900">Date Created</h3>
                            <div className="mt-2 space-y-2">
                                <div>
                                    <input
                                        type="radio"
                                        name="dateCreated"
                                        id="all"
                                        value="all"
                                        checked={selectedDateRange === 'all'}
                                        onChange={handleDateChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="all" className="text-sm text-gray-700">
                                        All
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="dateCreated"
                                        id="lastWeek"
                                        value="lastWeek"
                                        checked={selectedDateRange === 'lastWeek'}
                                        onChange={handleDateChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="lastWeek" className="text-sm text-gray-700">
                                        Last week
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="dateCreated"
                                        id="lastMonth"
                                        value="lastMonth"
                                        checked={selectedDateRange === 'lastMonth'}
                                        onChange={handleDateChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="lastMonth" className="text-sm text-gray-700">
                                        Last month
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="dateCreated"
                                        id="last3Months"
                                        value="last3Months"
                                        checked={selectedDateRange === 'last3Months'}
                                        onChange={handleDateChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="last3Months" className="text-sm text-gray-700">
                                        Last 3 months
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="dateCreated"
                                        id="lastYear"
                                        value="lastYear"
                                        checked={selectedDateRange === 'lastYear'}
                                        onChange={handleDateChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="lastYear" className="text-sm text-gray-700">
                                        Last year
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="dateCreated"
                                        id="customDate"
                                        value="customDate"
                                        checked={selectedDateRange === 'customDate'}
                                        onChange={handleDateChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="customDate" className="text-sm text-gray-700">
                                        Custom date
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Status Filter */}
                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-900">Status</h3>
                            <div className="mt-2 space-y-2">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="processing"
                                        value="Processing"
                                        checked={selectedStatus.includes("Processing")}
                                        onChange={handleStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="processing" className="text-sm text-gray-700">
                                        Processing
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="shipped"
                                        value="Shipped"
                                        checked={selectedStatus.includes("Shipped")}
                                        onChange={handleStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="shipped" className="text-sm text-gray-700">
                                        Shipped
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="delivered"
                                        value="Delivered"
                                        checked={selectedStatus.includes("Delivered")}
                                        onChange={handleStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="delivered" className="text-sm text-gray-700">
                                        Delivered
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="cancelled"
                                        value="Cancelled"
                                        checked={selectedStatus.includes("Cancelled")}
                                        onChange={handleStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="cancelled" className="text-sm text-gray-700">
                                        Cancelled
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Payment Status Filter */}
                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-900">Payment Status</h3>
                            <div className="mt-2 space-y-2">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="paid"
                                        value="Paid"
                                        checked={selectedPaymentStatus.includes("Paid")}
                                        onChange={handlePaymentStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="paid" className="text-sm text-gray-700">
                                        Paid
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="unpaid"
                                        value="Unpaid"
                                        checked={selectedPaymentStatus.includes("Unpaid")}
                                        onChange={handlePaymentStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="unpaid" className="text-sm text-gray-700">
                                        Unpaid
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="refunded"
                                        value="Refunded"
                                        checked={selectedPaymentStatus.includes("Refunded")}
                                        onChange={handlePaymentStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="refunded" className="text-sm text-gray-700">
                                        Refunded
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="inProgress"
                                        value="In Progress"
                                        checked={selectedPaymentStatus.includes("In Progress")}
                                        onChange={handlePaymentStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="inProgress" className="text-sm text-gray-700">
                                        In Progress
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="cancelledPayment"
                                        value="Cancelled"
                                        checked={selectedPaymentStatus.includes("Cancelled")}
                                        onChange={handlePaymentStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="cancelledPayment" className="text-sm text-gray-700">
                                        Cancelled
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                Cancel
                            </button>
                            <button
                                onClick={applyFilters}
                                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Apply Filter
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterButton;


