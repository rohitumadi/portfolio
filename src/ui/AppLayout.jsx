import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

function AppLayout() {
  return (
    <main className="flex min-h-screen flex-col   bg-[#191924]">
      <Navbar />
      <div className="container mx-auto mt-5">
        <Outlet />
      </div>
    </main>
  );
}

export default AppLayout;
