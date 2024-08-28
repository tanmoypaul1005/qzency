import { iOption, iPast } from '@/util/imageImports';
import { formatDate } from '@/util/utilityFunction';
import Image from 'next/image';
import React from 'react';

const TableRow = ({ _id, createdAt, user, totalAmount, products, paymentStatus, deliveryMethod, status }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="px-6 py-3 ">
        <div className="flex gap-x-2">
        <div>{_id?.$oid}</div>
        <Image src={iPast} alt="phone" width={20} height={20} />
        </div>
      </td>
      <td className="px-6 py-3">{formatDate(createdAt?.$date)}</td>
      <td className="px-6 py-3 space-y-1">
        <div className="text-sm font-normal leading-5 text-[#667085]">
          {user?.firstName} {user?.lastName}
        </div>
        <div className="flex gap-x-2">
        <div className="text-sm font-normal leading-5 text-[#E46A11]">
          {user?.phone}
        </div>
        <Image src={iPast} alt="phone" width={20} height={20} />
        </div>
        <div className="text-sm font-normal leading-5 text-[#667085]">DOHS Mirpur 12, Dhaka</div>
      </td>
      <td className="px-6 py-3">{totalAmount?.grandTotal}</td>
      <td className="px-6 py-3">{products?.length ?? 0}</td>
      <td className="px-6 py-3">
        <span className={`py-1 px-3 rounded-full text-xs ${paymentStatus === 'Paid' ? 'bg-green-100 text-green-500' : paymentStatus === 'Canceled' ? 'bg-red-100 text-red-500' : 'bg-yellow-100 text-yellow-500'}`}>
          {paymentStatus}
        </span>
      </td>
      <td className="px-6 py-3">{deliveryMethod}</td>
      <td className="px-6 py-3">
        <span className={`py-1 px-3 rounded-full text-xs ${status === 'Processing' ? 'bg-blue-100 text-blue-500' : status === 'Confirmed' ? 'bg-gray-100 text-gray-500' : 'bg-orange-100 text-orange-500'}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-3 text-right">
       <Image src={iOption} alt="phone"  />
      </td>
    </tr>
  );
};

export default TableRow;
