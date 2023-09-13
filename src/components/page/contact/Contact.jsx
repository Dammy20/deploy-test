import React from "react";
import AboutUsCounter from "../../common/AboutUsCounter";
import Breadcrumb from "../../common/Breadcrumb";
import ContactWrapper from "./ContactWrapper";

function Contact() {
  return (
    <>
    <Breadcrumb pageName = 'Contact Us' pageTitle = 'Contact Us '/>
    <ContactWrapper/>
    <AboutUsCounter/>  
    </>
  );
}

export default Contact;
