import React from 'react'
import { useState, useEffect } from "react";
import Footer from "../common/Footer";
// import Header from "../common/Header";
import Header3 from '../page/HomePage3/Header3';
import HomePage3 from '../page/HomePage3/HomePage3';
import Preloader from "./Preloader";
function Layout3() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  return (
    <>
        <>
      {loading ? (
        <Preloader styles="preloader style-3" />
      ) : (
        <>
          <Header3 />
          <HomePage3 />
          <Footer />
        </>
      )}
    </>   
    </>
  )
}

export default Layout3