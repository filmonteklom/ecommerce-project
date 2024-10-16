// Layout.js
import React from 'react';
import Header from '../components/Header/Header';


function Layout({ header, children }) {
  return (
    <div>
      < Header />
      {header }
      <main>{children}</main>
    </div>
  );
}

export default Layout;
