import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ResultsPage from "./pages/Results";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/results", element: <ResultsPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
