import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Portfolio from "../pages/PortfolioPage/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
    ],
  },
]);
