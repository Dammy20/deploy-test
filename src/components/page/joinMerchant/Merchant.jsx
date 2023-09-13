import React from "react";
import AboutUsCounter from "../../common/AboutUsCounter";
import Breadcrumb from "../../common/Breadcrumb";
import MerchantWrap from "./MerchantWrap";

function Merchant() {
  return (
    <>
      <Breadcrumb pageName="Join Merchant" pageTitle="Join Merchant" />
      <MerchantWrap />
      <AboutUsCounter />
    </>
  );
}

export default Merchant;
