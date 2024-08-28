
import React from 'react';
import Table from './components/table/Table';
import TableRow from './components/table/TableRow';
import Filters from './components/filter/Filters';
import DashboardSummary from './components/filter/DashboardSummary';
import orders from '../data/orders.json'; // Import orders from JSON file
import Header from './components/header/header';

function App() {

  return (
    <>
      <Header />
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
          {orders?.map((order, index) => (
            <TableRow key={index} {...order} />
          ))}
        </Table>
      </div>
    </>
  );
}

export default App;
