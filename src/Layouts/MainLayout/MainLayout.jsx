import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../pages/HomePage/Home";
import TopBar from "../../components/Navbar/TopBar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/shared/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <section className="bg-black">
        <TopBar />
        <Navbar />
        <Outlet />
        <Footer />
      </section>

      <ScrollToTop />
    </>
  );
};

export default MainLayout;
