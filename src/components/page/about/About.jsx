import React from "react";
import AboutUsCounter from "../../common/AboutUsCounter";
import Breadcrumb from "../../common/Breadcrumb";
import WhyCHooseUs from "../howItWork/WhyCHooseUs";
import AboutTestimonial from "./AboutTestimonial";
import WhoWeAreArea from "./WhoWeAreArea";

function About() {
  return (
    <>
      <Breadcrumb pageName="About Us" pageTitle="About Us" />
      <WhoWeAreArea/>
      <WhyCHooseUs/>
      <AboutTestimonial/>
      <AboutUsCounter/>
    </>
  );
}

export default About;
