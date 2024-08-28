"use client";
import React, { useState } from "react";
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import Image from "next/image";
import { iArrowLeft, iArrowRight } from "@/util/imageImports";
import { useOrderStore } from "@/store/ordersStore";

const Table = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const { ordersList,selectedOrder }= useOrderStore();
  
  const itemsPerPage = 10;

  const totalPages = Math.ceil(ordersList?.length / itemsPerPage);

  const paginatedOrders = ordersList?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    for (let i = 1; i <= Math.min(maxPagesToShow, totalPages); i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1 rounded-md ${currentPage === i ? 'bg-[#2166F0] text-white' : ""}`}
        >
          {i}
        </button>
      );
    }

    if (totalPages > maxPagesToShow) {
      pageNumbers.push(<span key="ellipsis">...</span>);

      for (let i = totalPages - 2; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 rounded-md ${currentPage === i ? 'bg-[#2166F0] text-white' : ''}`}
          >
            {i}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <TableHeader />
        <tbody className="text-sm text-gray-600">
          {paginatedOrders?.map((order, index) => (
            <TableRow selectedOrder={selectedOrder} key={index} {...order} />
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-center my-4 gap-x-5">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-4 py-2 bg-white border-[1px] text-[#667085] border-[#EAECF0] rounded gap-x-1 disabled:opacity-50"
        >
          <Image src={iArrowLeft} alt="phone" />
          <div className="flex items-center justify-center text-sm font-medium text-[#667085]">
            Previous
          </div>
        </button>
        <div className="flex space-x-1">
          {renderPageNumbers()}
        </div>
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center px-4 py-2 bg-white border-[1px] border-[#EAECF0] rounded gap-x-1 disabled:opacity-50"
        >
          <div className="flex items-center justify-center text-sm font-medium text-[#667085]">
            Next
          </div>
          <Image src={iArrowRight} alt="phone" />
        </button>
      </div>
    </div>
  );
};

export default Table;

