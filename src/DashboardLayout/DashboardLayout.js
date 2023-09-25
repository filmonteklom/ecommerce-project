import React from 'react';
import DashboardHeader from '../Dashboard/Header/Header'; 

function DashboardLayout({ header, children }) {
  return (
    <div>
      <DashboardHeader /> {/* Include the DashboardHeader component here */}
      {header}
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
