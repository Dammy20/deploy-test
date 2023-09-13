import React from 'react'
import { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header2 from '../page/homepage2/Header2';
import HomePageTwo from '../page/homepage2/HomePageTwo';
import Preloader from "./Preloader";
function Layout2() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }, []);
  return (
    <>
        <>
      {loading ? (
        <Preloader styles="preloader style-2" />
      ) : (
        <>
          <Header2 />
          <HomePageTwo />
          <Footer />
        </>
      )}
    </>   
    </>
  )
}

export default Layout2