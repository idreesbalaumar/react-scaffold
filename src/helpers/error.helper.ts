import { store } from "@/redux-store";
import { initiate_logout } from "@/redux-store/slices/auth.slice";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

class ErrorHandler {
  static parser(error: Error | AxiosError, shouldAlert: boolean = true) {
    let errorMessage: string;

    if (axios.isAxiosError(error)) {
      if (!error.response) {
        // Handle network error or timeout
        errorMessage = "NETWORK ERROR: Unable to connect to the server. Please check your internet connection and try again.";
      } else {
        errorMessage = ErrorHandler.parseAxiosResponse(error.response);
      }

      if (shouldAlert) {
        toast.error(errorMessage);
      }
      return errorMessage;
    } else {
      // Handle non-Axios errors (other JavaScript errors)
      errorMessage = error.message || "An unexpected error occurred.";
      if (shouldAlert) {
        toast.error(errorMessage);
      }
      return errorMessage;
    }
  }

  private static parseAxiosResponse(response: any): string {
    if (response.status === 401) {
      store.dispatch(initiate_logout());
    }

    const responseData =
      (response.data && response.data.details) || response.data.message;
    return Array.isArray(responseData) ? responseData[0] : responseData;
  }
}

export default ErrorHandler;
