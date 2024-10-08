/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useOrderStore } from '@/store/ordersStore';
import { iCalender } from '@/util/imageImports';
import Image from 'next/image';
import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdOutlineCancel } from "react-icons/md";

const OrderDatePicker = () => {

    const { searchQuery, selectDate,setCurrentPage, setSelectDate, tampOrdersList, setOrderList } = useOrderStore();

    useEffect(() => {
        setCurrentPage(1);
        let filtered = tampOrdersList;

        if (selectDate) {
            filtered = filtered?.filter(order => {
                const orderDate = new Date(order?.createdAt?.$date);
                return orderDate?.toDateString() === new Date(selectDate)?.toDateString();
            });
        }

        if (searchQuery) {
            filtered = filtered?.filter(order => {
                const fullName = `${order.user?.firstName} ${order.user.lastName}`.toLowerCase();
                const email = order?.user?.email?.toLowerCase();
                const phone = order?.user?.phone?.toLowerCase();
                const orderId = order?._id?.$oid?.toLowerCase();

                return (
                    fullName?.includes(searchQuery?.toLowerCase()) ||
                    email?.includes(searchQuery?.toLowerCase()) ||
                    phone?.includes(searchQuery?.toLowerCase()) ||
                    orderId?.includes(searchQuery?.toLowerCase())
                );
            });
        }
        setOrderList(filtered);
    }, [selectDate, searchQuery]);

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

            {selectDate && <div onClick={() => { setSelectDate(null); }} className="absolute cursor-pointer right-3 top-[22.5px]">
                <MdOutlineCancel />
            </div>}
        </div>
    )
}

export default OrderDatePicker


