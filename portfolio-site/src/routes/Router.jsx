import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Pages
// import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import Projects from "../pages/Projects/Projects";
// import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      /*
            {
                index: true,
                element: <Home />
            },

            {
                path: "about",
                element: <About />
            },

            {
                path: "projects",
                element: <Projects />
            },

            {
                path: "contact",
                element: <Contact />
            }
            */
    ],
  },
]);

export default router;
