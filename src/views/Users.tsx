import React from 'react';
import FooterD from '../components/FooterDash';
import Sidebar from '../components/Sidebar';

function Users() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="w-1/5 bg-blue-200 ">
        <Sidebar/>
        </div>
        <div className="w-4/5 bg-white ">
          <h2 className="text-2xl font-bold ">Dashboard</h2>
           <FooterD />
        </div>
      </div>
    
    </div>
  );
}

export default Users;
