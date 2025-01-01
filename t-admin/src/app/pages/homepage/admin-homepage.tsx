import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navbar, TopNav} from '@tap-n-taste/ui';
import {Sidebar} from '@tap-n-taste/ui';

export const AdminHomepage: React.FC = () => {
  return (
    <div className="flex h-screen">
          <Outlet />
    </div>
  );
};

export default AdminHomepage;
