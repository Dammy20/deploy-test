import React from "react";
import { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HomePageOne from "../page/home/HomePageOne";
import Preloader from "./Preloader";
function MainLayout() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader styles="preloader" />
      ) : (
        <>
          <Header />
          <HomePageOne />
          <Footer />
        </>
      )}
    </>
  );
}

export default MainLayout;