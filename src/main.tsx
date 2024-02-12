import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./components/helper/ErrorBoundary.tsx";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage.tsx";
import App from "./App.tsx";
import "./css/index.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AccountProvider from "./contexts/AccountContext.tsx";
import FormProvider from "./contexts/FormContext.tsx";
import PlayerProvider from "./contexts/PlayerContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorBoundaryPage />}>
      <AccountProvider>
        <FormProvider>
          <QueryClientProvider client={queryClient}>
            <PlayerProvider>
              <App />
            </PlayerProvider>
            <ReactQueryDevtools buttonPosition="top-right" />
          </QueryClientProvider>
        </FormProvider>
      </AccountProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
