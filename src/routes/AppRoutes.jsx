// AppRouter.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Head from "../components/Navbar";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/About";
import WhyUs from "../pages/WhyUs";
import Blogs from "../pages/Blogs";
import FAQ from "../components/FAQ";
import Down from "../components/Footer";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  const navigate = useNavigate();
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    // Check if the current route is the dashboard
    if (navigate && navigate()) {
      setIsDashboard(navigate().location.pathname === "/dashboard");

      // If not, navigate to the home page
      if (!isDashboard) {
        navigate("/");
      }
    }
  }, [navigate, isDashboard]);

  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!isDashboard && <Head />}
      {!isDashboard && <FAQ />}
      {!isDashboard && <Down />}
    </div>
  );
};

export default AppRouter;
