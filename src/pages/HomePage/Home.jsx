import React from "react";
import Banner from "../../components/HomePageComponents/Banner";
import ClientShowcase from "../../components/HomePageComponents/ClientShowcase";
import EmployeeSection from "../../components/HomePageComponents/EmployeeSection";
import A2ITGallery from "../../components/HomePageComponents/A2ITGallery";

const Home = () => {
  return (
    <>
      <Banner />
      <ClientShowcase />
      <EmployeeSection />
      <A2ITGallery />
    </>
  );
};

export default Home;
