import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorFallback from "@/components/error-fallback";
import NotFoundFallback from "@/components/not-found-fallback";
import { dashboardBreadcrumbItems } from "@/modules/Dashboard/pages/Dashboard"; // Import breadcrumb items for Dashboard
import PageTitle from "./components/PageTitle";

const DashboardLayout = lazy(
  () => import("@/components/layouts/dashboard-layout")
);

const Dashboard = lazy(() => import("@/modules/Dashboard/pages/Dashboard"));

export enum ROUTES {
  HOME = "/", // Home page
  AUTH = "/auth", // Authentication base path
  LOGIN = "login", // Login page
}

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <DashboardLayout breadcrumbItems={dashboardBreadcrumbItems} />, // Pass breadcrumb items here
    errorElement: <ErrorFallback />,
    children: [
      {
        index: true,
        element: (
          <>
            <PageTitle title="Dashboard - My Application" />
            <Dashboard />
          </>
        ),
      },
    ],
  },
  {
    // Catch-all route for undefined paths (404)
    path: "*",
    element: (
      <>
        <PageTitle title="404 - Page Not Found" />
        <NotFoundFallback />
      </>
    ),
  },
]);
