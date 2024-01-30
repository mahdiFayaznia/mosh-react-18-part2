import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3, // 3 retry after fail (default: 3)
//       cacheTime: 300_000, // remove result from cache after 5m (default: 300_000)
//       staleTime: 10 * 1000, // 10s (default: 0)
//       refetchOnWindowFocus: false, // (default: true)
//       refetchOnReconnect: false, // (default: true)
//       refetchOnMount: false, // (default: true)
//     },
//   },
// });

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
