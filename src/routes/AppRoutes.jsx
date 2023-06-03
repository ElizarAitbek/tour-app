import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import { Layout } from "../layout/Lauout.jsx";
import { LoginPage } from "../pages/LoginPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import { AdminPage } from "../pages/admin/AdminPage.jsx";
import { ClientPage } from "../pages/client/ClientPage.jsx";
import { SuperAdminPage } from "../pages/superadmin/SuperAdminPage.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
  {
    path: "/user",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ClientPage />,
      },
    ],
  },
  {
    path: "/superadmin",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SuperAdminPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
