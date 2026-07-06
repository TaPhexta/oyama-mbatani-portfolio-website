import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <div className="main-layout">
        {/*NavBar */}
        <main id="page-content" className="page-content">
          <Outlet />
        </main>
        {/* Footer */}
      </div>
    </>
  );
}

export default MainLayout;
