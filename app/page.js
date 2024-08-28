import React from 'react';
import Table from './components/table/Table';
import TableRow from './components/table/TableRow';
import Filters from './components/filter/Filters';
import DashboardSummary from './components/filter/DashboardSummary';
import Image from 'next/image';
import { iAdd, iExportButton } from '@/util/imageImports';
import orders from '../data/orders.json'; // Import orders from JSON file

function App() {
  // const orders = [
  //   {
  //     orderId: '#1043',
  //     date: 'Today at 9:30 a.m.',
  //     customerInfo: 'Safayet hossain\n01854883320\nDOHS Mirpur 12, Dhaka',
  //     total: '৳ 121.00',
  //     quantity: '4 items',
  //     paymentStatus: 'Paid',
  //     deliveryMethod: 'Pathao',
  //     status: 'Processing',
  //   },
  //   {
  //     orderId: '#110',
  //     date: 'Today at 9:30 a.m.',
  //     customerInfo: 'Safayet hossain\n01854883320\nDOHS Mirpur 12, Dhaka',
  //     total: '৳ 121.00',
  //     quantity: '4 items',
  //     paymentStatus: 'Canceled',
  //     deliveryMethod: 'Pathao',
  //     status: 'Confirmed',
  //   },
  //   // Add more orders...
  // ];

  return (
    <>
    <div className="flex justify-between py-2">
      <div className="text-[22px] font-medium leading-6 text-[#0E1521]">Orders</div>
      <div className="flex space-x-2.5">
        <Image src={iExportButton} alt="phone" />
        <button className="bg-[#2166F0] py-3 px-4 rounded-md flex space-x-1.5">
          <Image src={iAdd} alt="phone" />
          <div className="font-medium text-[15px] text-white leading-4">Create order</div>
        </button>
      </div>
    </div>


    <div style={{ boxShadow: '0px 3px 10px 0px #7777771A' }} className="mx-6 rounded-lg px-6 py-4 my-4 border-[1px] border-[#EAECF0]">
        <DashboardSummary
          totalRevenue="12,084"
          orderItems={184}
          returnItems={12}
          fulfilledOrders={84}
          />
      <div className="my-4">
      <Filters />
      </div>
      <Table>
        {orders.map((order, index) => (
          <TableRow key={index} {...order} />
        ))}
      </Table>
    </div>
    </>
  );
}

export default App;
