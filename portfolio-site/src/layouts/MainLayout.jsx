import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <div className="main-layout">
        <Navbar />
        <main id="page-content" className="page-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
