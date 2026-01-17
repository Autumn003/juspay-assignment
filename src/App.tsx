import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/layout";
import PageLoader from "./pages/page-loader";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Orders = lazy(() => import("./pages/orders"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<PageLoader />}>
              <Dashboard />
            </Suspense>
          ),
        },
        {
          path: "orders",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Orders />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
