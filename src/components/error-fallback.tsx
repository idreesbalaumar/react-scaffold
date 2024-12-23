import { APP_NAVIGATION } from "@/helpers/constants.helper";
import { useRouteError } from "react-router-dom";
import AppNavigation from "./app-navigation";
import { app_logo } from "@/assets";

type RouteError = {
  message: string;
  [key: string]: any; // for additional properties if they exist
};

export default function ErrorFallback() {
  /* Error from route */
  let error = useRouteError();
  let errorMessage = "Unknown error";

  if (error && typeof error === "object" && "message" in error) {
    errorMessage = (error as RouteError).message;
  }

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
        <div className="flex justify-center">
          <img src={app_logo} alt="RevUp Logo" className="w-16" />
        </div>
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-500 dark:text-red-500">
          Oops!
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          Something went wrong.
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Message: {errorMessage}.
        </p>
        <div className="flex sm:flex-row items-center justify-center gap-x-6 gap-y-4 sm:gap-y-0">
          <AppNavigation variant={APP_NAVIGATION.back} />
          <AppNavigation variant={APP_NAVIGATION.reload} />
        </div>
      </div>
    </section>
  );
}
