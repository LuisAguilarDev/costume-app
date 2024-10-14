import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import { useStore } from './store';
import Loader from './loader';
import Footer from './footer';
export default function Layout() {
  const loading = useStore((state) => state.loading);
  return (
    <>
      {loading ? <Loader /> : null}
      <Navbar />
      <div className="flex flex-col content-container justify-between pt-8">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
