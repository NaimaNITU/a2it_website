import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Portfolio from "../pages/PortfolioPage/Portfolio";
import ContactUs from "../pages/ContactUs";
import BlogPage from "../pages/BlogPage/BlogPage";
import ServicePage from "../pages/ServicePage/ServicePage";
import ServiceWebDev from "./../pages/ServicePage/ServiceWebDev";
import ServiceMobileApp from "../pages/ServicePage/ServiceMobileApp";
import ServiceEcommerce from "../pages/ServicePage/ServiceEcommerce";
import ServiceERP from "../pages/ServicePage/ServiceERP";
import ServiceDigitalMarketing from "./../pages/ServicePage/ServiceDigitalMarketing";
import ServiceSocialMedia from "../pages/ServicePage/ServiceSocialMedia";
import ServiceHosting from "../pages/ServicePage/ServiceHosting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "blog", element: <BlogPage /> },
      { path: "services/web-development", element: <ServiceWebDev /> },
      { path: "/services/mobile-app", element: <ServiceMobileApp /> },
      { path: "/services/ecommerce", element: <ServiceEcommerce /> },
      { path: "/services/erp", element: <ServiceERP /> },
      { path: "/services/seo", element: <ServiceDigitalMarketing /> },
      { path: "/services/social-media", element: <ServiceSocialMedia /> },
      { path: "/services/server-hosting", element: <ServiceHosting /> },
    ],
  },
]);
