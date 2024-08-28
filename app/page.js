
import React from 'react';
import Table from './components/table/Table';
import Filters from './components/filter/Filters';
import DashboardSummary from './components/filter/DashboardSummary';
import Header from './components/header/header';

function App() {

  return (
    <>
      <Header />
      <div style={{ boxShadow: '0px 3px 10px 0px #7777771A' }} className="mx-6 rounded-lg px-6 py-4  border-[1px] border-[#EAECF0]">
        <DashboardSummary/>
        <div className="my-4">
          <Filters />
        </div>
        <Table/>
      </div>
    </>
  );
}

export default App;
