import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AccountProvider from "./contexts/AccountContext.tsx";
import FormProvider from "./contexts/FormContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AccountProvider>
      <FormProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools buttonPosition="top-left" />
        </QueryClientProvider>
      </FormProvider>
    </AccountProvider>
  </React.StrictMode>,
);
