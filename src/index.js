import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/App";
import { UserProvider } from "./components/common/UserContext";
import MainLayout from "./components/layout/MainLayout";
import Contact from "./components/page/contact/Contact";

import ErrorPage from "./components/page/error/ErrorPage";
import SignUp from "./components/page/signUp/SignUp";
import Faq from "./components/page/faq/Faq";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CreateProduct from "./components/page/createproduct/CreateProduct";
import Login from "./components/page/login/Login";
import AuctionDetails from "./components/page/auctionDetails/AuctionDetails";
import Dashboard from "./components/page/dashboard/Dashboard";
import Blog from "./components/page/blog/Blog";
import BlogDetails from "./components/page/BlogDetails/BlogDetails";
import LiveAuction from "./components/page/LiveAuction.jsx/LiveAuction";
import Products from "./components/page/Products.jsx/ProductsWrap";
import HowItWork from "./components/page/howItWork/HowItWork";
import About from "./components/page/about/About";
import Layout2 from "./components/layout/Layout2";
import Layout3 from "./components/layout/Layout3";
import Change from './components/page/change/Change'
import Wallet from './components/page/wallet/Wallet'
import Merchant from "./components/page/joinMerchant/Merchant";
import { AuthContext } from "./components/common/AuthProvider";
// import 'react-lazy-load-image-component/src/effects/blur.css';
import "./index.css"
import AuthProvider from "./components/common/AuthProvider";

//Default Warniing Error Hide
// console.log = console.warn = console.error = () => {};

/*
=>version : 0.1
=>Event : Rendering al content to web
=>Action: define all routes and page
@return HTML
*/

function Root() {
  return <>
   
    <ToastContainer/>
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={MainLayout} />
      <Route exact path="/index2" component={Layout2} />
        <Route exact path="/index3" component={Layout3} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/forgotpassword`}
          component={ErrorPage}
        />
         
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/resetpassword`}
          component={Change}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/faq`}
          component={Faq}
        /> 
        
          <Route
          exact
          path={`${process.env.PUBLIC_URL}/signup`}
          component={SignUp}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/dashboard`}
          component={Dashboard}
        />
         <Route
          exact
          path={`${process.env.PUBLIC_URL}/login`}
          component={Login}
        />
      <Layout>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/about`}
          component={About}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/contact`}
          component={Contact}
          />
           <Route
          exact
          path={`${process.env.PUBLIC_URL}/change`}
          component={Change}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog`}
          component={Blog}
        />
      
       <UserProvider>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/auction-details`}
          component={AuctionDetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/dashboard`}
          component={Dashboard}
          />
          <Route
          exact
          path={`${process.env.PUBLIC_URL}/createproduct`}
          component={CreateProduct}
          />
          <Route
          exact
          path={`${process.env.PUBLIC_URL}/wallet`}
          component={Wallet}
        />
       
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-details`}
          component={BlogDetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/product`}
          component={LiveAuction}
            />
            <Route
          exact
          path={`${process.env.PUBLIC_URL}/products`}
          component = {Products}
        />
        
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/how-works`}
          component={HowItWork}
        />
        
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/join-merchant`}
          component={Merchant}
            /> 
            </UserProvider>
      </Layout> 
    </Switch>
      </BrowserRouter>
     
</>
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
   
      <AuthProvider>
         <UserProvider>
      <GoogleOAuthProvider clientId="653426009511-opa32q6phtjqpqmtm0lsjnei8d53vmd7.apps.googleusercontent.com">
      <Root />
          </GoogleOAuthProvider>
          </UserProvider>
      </AuthProvider>
      
  </React.StrictMode>,
  document.getElementById("root")
);
