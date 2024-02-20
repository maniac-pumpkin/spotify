import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./components/helper/ErrorBoundary.tsx";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage.tsx";
import App from "./App.tsx";
import "./css/index.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorBoundaryPage />}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
