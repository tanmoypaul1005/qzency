"use client";
import React, { useEffect, useState } from "react";
import orders from "../../../data/orders.json"
import TableRow from './TableRow';
import TableHeader from './TableHeader';

const Table = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const paginatedOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    for (let i = 1; i <= Math.min(maxPagesToShow, totalPages); i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-2 py-1 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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
            className={`px-2 py-1 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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
        <TableHeader/>
        <tbody className="text-sm text-gray-600">
        {paginatedOrders?.map((order, index) => (
            <TableRow key={index} {...order} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <div className="flex space-x-1">
          {renderPageNumbers()}
        </div>
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;



