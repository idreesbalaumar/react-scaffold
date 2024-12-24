/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorFallback from "@/components/error-fallback";
import NotFoundFallback from "@/components/not-found-fallback";
import { dashboardBreadcrumbItems } from "@/modules/Dashboard/pages/Dashboard";
// import AuthProtect from "./helpers/guards/auth-route.guard";
import PrivateRoute from "./helpers/guards/private-route.guard";

const BaseLayout = lazy(() => import("@/components/layouts/base-layout"));

const DashboardLayout = lazy(
  () => import("@/components/layouts/dashboard-layout")
);

const PageTitle = lazy(() => import("@/components/PageTitle"));
const LandingPage = lazy(() => import("@/modules/landing/pages/LandingPage"));
const LoginPage = lazy(() => import("@/modules/auth/login/pages/LoginPage"));
const Dashboard = lazy(() => import("@/modules/Dashboard/pages/Dashboard"));

export enum ROUTES {
  HOME = "/", // Home page
  AUTH = "/auth", // Authentication base path
  LOGIN = "login",
  DASHBOARD = "/dashboard", // Dashboard base path
}

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME, // Base path for the home page
    element: <BaseLayout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        index: true, // Default route for the home page
        element: (
          <>
            <PageTitle title="Landing - My Application" />
            <LandingPage />
          </>
        ), // Landing page component
      },
    ],
  },
  {
    errorElement: <ErrorFallback />, // Fallback for error handling
    children: [
      // Authentication routes
      {
        path: ROUTES.AUTH, // Base path for all authentication-related routes
        // element: <AuthProtect />, // AuthGuard for public access to auth routes
        children: [
          {
            path: "", // Match `/auth` directly
            element: <Navigate to={`${ROUTES.AUTH}/${ROUTES.LOGIN}`} replace />, // Redirect to `/auth/login`
          },
          {
            path: ROUTES.LOGIN, // Match `/auth/login`
            element: (
              <>
                <PageTitle title="Login - My Application" />
                <LoginPage />
              </>
            ), // Login component
          },
        ],
      },
      // Protected dashboard routes (only accessible to authenticated users)
      {
        path: ROUTES.DASHBOARD,
        element: (
          <PrivateRoute>
            <DashboardLayout breadcrumbItems={dashboardBreadcrumbItems} />
          </PrivateRoute>
        ),
        children: [
          {
            index: true, // Default route for dashboard
            element: (
              <>
                <PageTitle title="Dashboard - My Application" />
                <Dashboard />
              </>
            ), // Dashboard page
          },
        ],
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
