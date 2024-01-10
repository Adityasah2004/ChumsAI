import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Head from "../components/Navbar";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/About";
import WhyUs from "../pages/WhyUs";
import Blogs from "../pages/Blogs";
import FAQ from "../components/FAQ";
import Down from "../components/Footer";
import Dashboard from "../pages/Dashboard";

export const AppRouter = () => {
    return (
      <div className="w-full h-full">
        
      <div>
        <Head/>
        <Routes>
          <Route path="/" element />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <LandingPage/>
        <AboutPage/>
        <WhyUs/>
        <Blogs/>
        <FAQ/>
        <Down/>
      </div>
      </div>
    );
  };
