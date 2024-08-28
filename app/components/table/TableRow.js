import React from 'react';
import PropTypes from 'prop-types';
import { iOption  } from '@/util/imageImports';
import { formatDate } from '@/util/utilityFunction';
import Image from 'next/image';
import CopyToClipboard from '../CopyToClipboard';
import Checkbox from './Checkbox';

const TableRow = ({ _id, createdAt, user, payment, totalAmount,selectedOrder, shipping, products, delivery, status }) => {
  const selected = selectedOrder?.includes(_id?.$oid);
  return (
    <tr className={`border-b border-gray-200 ${selected && "bg-gray-100"} hover:bg-gray-100`}>
      <td className="px-4 py-3">
        <div className="flex gap-x-2">
          <Checkbox id={_id?.$oid}/>
          <div className="table-row">{_id?.$oid}</div>
          <CopyToClipboard content={_id?.$oid}/>
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="table-row">
          {formatDate(createdAt?.$date)}
        </div>
      </td>
      <td className="px-4 py-3 space-y-1">
        <div className="table-row">
          {user?.firstName} {user?.lastName}
        </div>
        <div className="flex gap-x-2">
          <div className="text-sm whitespace-nowrap font-normal leading-5 text-[#E46A11]">
            {user?.phone}
          </div>
          <CopyToClipboard content={user?.phone}/>
        </div>
        <div className="table-row text-[#667085]">{shipping?.address}</div>
      </td>
      <td className="px-4 py-3">
        <div className="table-row">
          {totalAmount?.grandTotal}
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="table-row">
          {products?.length ?? 0}
        </div>
      </td>
      <td className="px-4 py-3">
        <span className={`py-1 px-3 text-sm font-[450] rounded-full ${getPaymentStatusClass(payment?.status)}`}>
          {payment?.status}
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="table-row">
          {delivery?.deliveryMethod}
        </div>
      </td>
      <td className="px-4 py-3 ">
        <span className={`py-1 px-3 rounded-full text-sm font-[450] ${getStatusClass(status)}`}>
          {status}
        </span>
      </td>
      <td className="px-4 py-3 text-right">
        <Image src={iOption} alt="phone" />
      </td>
    </tr>
  );
};

const getPaymentStatusClass = (status) => {
  switch (status) {
    case 'Paid':
      return 'bg-green-100 text-green-500';
    case 'Canceled':
      return 'bg-red-100 text-red-500';
    default:
      return 'bg-yellow-100 text-yellow-500';
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Processing':
      return 'bg-blue-100 text-blue-500';
    case 'Confirmed':
      return 'bg-gray-100 text-gray-500';
    default:
      return 'bg-orange-100 text-orange-500';
  }
};

TableRow.propTypes = {
  _id: PropTypes.object.isRequired,
  createdAt: PropTypes.object.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  payment: PropTypes.shape({
    status: PropTypes.string,
  }).isRequired,
  totalAmount: PropTypes.shape({
    grandTotal: PropTypes.number,
  }).isRequired,
  products: PropTypes.array.isRequired,
  delivery: PropTypes.shape({
    deliveryMethod: PropTypes.string,
  }).isRequired,
  status: PropTypes.string.isRequired,
};

export default TableRow;