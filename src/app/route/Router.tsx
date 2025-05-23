import { createBrowserRouter } from "react-router";
import RootLayout from "@app/layout/RootLayout.tsx";
import HomePage from "@home/HomePage.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
