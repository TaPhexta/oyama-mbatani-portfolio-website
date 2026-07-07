import { Analytics } from "@vercel/analytics/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

function App() {
  return (
    <>
      <div id="app" className="app-container">
        <main id="main-content" className="main-content">
          <RouterProvider router={router} />
          <Analytics />
        </main>
      </div>
    </>
  );
}

export default App;
