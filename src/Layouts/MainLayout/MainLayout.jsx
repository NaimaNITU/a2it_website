import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../pages/HomePage/Home";
import TopBar from "../../components/Navbar/TopBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <section className="bg-black">
        <TopBar />
        <Navbar />
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
