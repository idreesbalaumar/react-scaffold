import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import AOS from "aos";
import "aos/dist/aos.css";
import RouterSpinner from "./components/route-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalSpinnerProvider } from "./services/global-spinner.service";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <GlobalSpinnerProvider>
        <Toaster richColors expand toastOptions={{ duration: 4000 }} />
        <Suspense fallback={<RouterSpinner />}>
          <RouterProvider router={router} fallbackElement={<RouterSpinner />} />
        </Suspense>
        <ToastContainer />
      </GlobalSpinnerProvider>
    </>
  );
}

export default App;