import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function AppLayout() {
  return (
    <div className="container mx-auto flex  min-h-screen flex-col bg-[#121212] px-12 py-4">
      <Header />

      <Outlet />
    </div>
  );
}

export default AppLayout;
