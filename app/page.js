import React from 'react';
import Table from './components/table/Table';
import TableRow from './components/table/TableRow';
import Filters from './components/filter/Filters';

function App() {
  const orders = [
    {
      orderId: '#1043',
      date: 'Today at 9:30 a.m.',
      customerInfo: 'Safayet hossain\n01854883320\nDOHS Mirpur 12, Dhaka',
      total: '৳ 121.00',
      quantity: '4 items',
      paymentStatus: 'Paid',
      deliveryMethod: 'Pathao',
      status: 'Processing',
    },
    {
      orderId: '#110',
      date: 'Today at 9:30 a.m.',
      customerInfo: 'Safayet hossain\n01854883320\nDOHS Mirpur 12, Dhaka',
      total: '৳ 121.00',
      quantity: '4 items',
      paymentStatus: 'Canceled',
      deliveryMethod: 'Pathao',
      status: 'Confirmed',
    },
    // Add more orders...
  ];

  return (
    <div className="px-6 py-4 ">
            <Filters />

      <Table>
        {orders.map((order, index) => (
          <TableRow key={index} {...order} />
        ))}
      </Table>
    </div>
  );
}

export default App;
