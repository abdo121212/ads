import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Services from "./Pages/Services";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "services", element: <Services /> },
        { path: "projects", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
