import React from "react";
import Banner from "../../components/HomePageComponents/Banner";
import ClientShowcase from "../../components/HomePageComponents/ClientShowcase";
import EmployeeSection from "../../components/HomePageComponents/EmployeeSection";
import A2ITGallery from "../../components/HomePageComponents/A2ITGallery";
import StatCard from "../../components/HomePageComponents/StatCard";
import WhoRWe from "../../components/HomePageComponents/WhoRWe";
import WhatWeOffer from "../../components/HomePageComponents/WHatWeOffer";
import Footer from "../../components/Footer/Footer";
import CompanyGallery from "../../components/HomePageComponents/CompanyGallery";

const Home = () => {
  return (
    <>
      <Banner />
      <WhoRWe />
      <WhatWeOffer />
      <ClientShowcase />
      <StatCard />
      <CompanyGallery />
      {/* <A2ITGallery /> */}
      <EmployeeSection />
    </>
  );
};

export default Home;
