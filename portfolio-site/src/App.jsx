import { RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import router from "./routes/Router";

function App() {
  return (
    <>
      <div id="app" className="app-container">
        <Analytics />
        <main id="main-content" className="main-content">
          <RouterProvider router={router} />
        </main>
      </div>
    </>
  );
}

export default App
