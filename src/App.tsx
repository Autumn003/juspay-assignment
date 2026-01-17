import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/orders", element: <Orders /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
