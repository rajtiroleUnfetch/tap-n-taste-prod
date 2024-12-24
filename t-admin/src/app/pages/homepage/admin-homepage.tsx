import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navbar, TopNav} from '@tap-n-taste/ui';
import {Sidebar} from '@tap-n-taste/ui';

export const AdminHomepage: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <Navbar />
        {/* <TopNav /> */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
