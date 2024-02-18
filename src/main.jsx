import { QueryClient, QueryClientProvider } from "react-query";
import QuizContextProvider from "./store/quiz-context.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnWindowFocusInvisible: false,
      cacheTime: 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
