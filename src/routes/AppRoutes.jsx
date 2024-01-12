// AppRouter.jsx
import React from "react";
import Head from "../components/Navbar";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/About";
import WhyUs from "../pages/WhyUs";
import Blogs from "../pages/Blogs";
import FAQ from "../components/FAQ";
import Down from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AppRouter = () => {
  const location = useLocation();
  return (
    <div className="w-full h-full">
      {location.pathname === "/dashboard" ? null : <Head />}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/whyus" component={WhyUs} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      {location.pathname === "/dashboard" ? null : <AboutPage />}
      {location.pathname === "/dashboard" ? null : <WhyUs />}
      {location.pathname === "/dashboard" ? null : <Blogs />}
      {location.pathname === "/dashboard" ? null : <FAQ />}
      {location.pathname === "/dashboard" ? null : <Down />}
    </div>
  );
};

export default AppRouter;
