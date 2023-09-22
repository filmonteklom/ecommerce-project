// Layout.js
import React from 'react';

function Layout({ header, children }) {
  return (
    <div>
      {header}
      <main>{children}</main>
    </div>
  );
}

export default Layout;
