import { MutationCache, QueryClient } from "@tanstack/react-query";
import axios from "axios";

import { createNotification } from "@/components/notifications";
import { CApiErrors, ApiErrorTypes } from "@/hooks/api/types";

export const queryCLient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const serverResponse = error.response?.data as CApiErrors;
        if (serverResponse?.error === ApiErrorTypes.ValidationError) {
          createNotification({
            title: "Validation Error",
            text: "Error",
          });
          return;
        }
        if (serverResponse.statusCode === 401) {
          createNotification({
            title: "Forbidden Access",
            text: serverResponse.message,
          });
          return;
        }
        createNotification({
          title: "Bad Request",
          text: serverResponse.message,
        });
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
