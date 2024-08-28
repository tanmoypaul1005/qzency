"use client"
import { useOrderStore } from '@/store/ordersStore';
import { iFilter } from '@/util/imageImports';
import Image from 'next/image';
import React, { useState } from 'react';

const FilterButton= () => {
    
    const { tampOrdersList, setOrderList } = useOrderStore();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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
                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-900">Date Created</h3>
                            <div className="mt-2 space-y-2">
                                <div>
                                    <input
                                        type="radio"
                                        name="dateCreated"
                                        id="all"
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
                                        className="mr-2"
                                    />
                                    <label htmlFor="customDate" className="text-sm text-gray-700">
                                        Custom date
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-900">Status</h3>
                            <div className="mt-2 space-y-2">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="processing"
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
                                        className="mr-2"
                                    />
                                    <label htmlFor="cancelled" className="text-sm text-gray-700">
                                        Cancelled
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-900">Payment Status</h3>
                            <div className="mt-2 space-y-2">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="paid"
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
                                        className="mr-2"
                                    />
                                    <label htmlFor="cancelledPayment" className="text-sm text-gray-700">
                                        Cancelled
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                Cancel
                            </button>
                            <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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

