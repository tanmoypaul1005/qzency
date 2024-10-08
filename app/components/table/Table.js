"use client";
import React from "react";
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import Image from "next/image";
import { iArrowLeft, iArrowRight } from "@/util/imageImports";
import { useOrderStore } from "@/store/ordersStore";

const Table = () => {

  const { ordersList, selectedOrder, currentPage, setCurrentPage } = useOrderStore();

  const itemsPerPage = 10;

  const totalPages = Math.ceil(ordersList?.length / itemsPerPage);

  const paginatedOrders = ordersList?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const getPaginationRange = () => {
    const range = [];
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    range.push(1); // Always show the first page

    if (startPage > 2) {
      range.push('...'); // Ellipsis for skipped pages
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    if (endPage < totalPages - 1) {
      range.push('...'); // Ellipsis for skipped pages
    }

    range.push(totalPages); // Always show the last page

    return range;
  };

  const renderPageNumbers = () => {
    const pageNumbers = getPaginationRange();
    if (ordersList?.length < 9) {
      return (
        <button
          className={`px-3 cursor-not-allowed py-1 rounded-md bg-[#2166F0] text-white`}>
          1
        </button>
      );
    } else {
      return pageNumbers?.map((page, index) => {
        if (page === '...') {
          return <span key={`ellipsis-${index}`}>...</span>;
        }

        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-[#2166F0] text-white' : ''}`}
          >
            {page}
          </button>
        );
      });
    }

  };

  return (
      <div className="overflow-x-auto">
        {paginatedOrders && paginatedOrders.length > 0 ? (
          <>
            <table className="min-w-full bg-white">
              <TableHeader />
              <tbody className="text-sm text-gray-600">
                {paginatedOrders.map((order, index) => (
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
                <Image src={iArrowLeft} alt="Previous" />
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
                className="flex items-center justify-center px-4 py-2 bg-white border-[1px] text-[#667085] border-[#EAECF0] rounded gap-x-1 disabled:opacity-50"
              >
                <div className="flex items-center justify-center text-sm font-medium text-[#667085]">
                  Next
                </div>
                <Image src={iArrowRight} alt="Next" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700">No Orders Found</h2>
              <p className="text-gray-500">There are no orders to display at the moment.</p>
            </div>
          </div>
        )}
      </div>
  );
};

export default Table;