import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

function AppLayout() {
  return (
    <div className="  flex min-h-screen flex-col   bg-[#FF004D]  ">
      <div className="container mx-auto px-12 py-4">
        <Navbar />

        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
