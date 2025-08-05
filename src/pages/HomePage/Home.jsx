import React from "react";
import Banner from "../../components/HomePageComponents/Banner";
import ClientShowcase from "../../components/HomePageComponents/ClientShowcase";
import EmployeeSection from "../../components/HomePageComponents/EmployeeSection";
import A2ITGallery from "../../components/HomePageComponents/A2ITGallery";
import StatCard from "../../components/HomePageComponents/StatCard";
import WhoRWe from "../../components/HomePageComponents/WhoRWe";
import CompanyGallery from "../../components/HomePageComponents/CompanyGallery";
import WhatWeOffer from "./../../components/HomePageComponents/WhatWeOffer";

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
