import { MoveLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { app_logo } from "@/assets";

type Props = {};

const NotFoundFallback = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <div className="flex items-center justify-center">
                <img
                  src={app_logo}
                  className="object-cover w-[50px] mb-4"
                  alt="no-data-icon"
                />
              </div>
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-500 dark:text-red-500">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Something's missing.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can't find that page. You'll find lots to explore on
                the home page.{" "}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4 sm:gap-y-0">
                <Button onClick={() => navigate(-1)} className="shadow-md">
                  <MoveLeft className="mr-2 h-4 w-4" /> Go back
                </Button>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-gray-900"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundFallback;
