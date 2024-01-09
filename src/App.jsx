import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/About';
import WhyUs from './pages/WhyUs';
import Blogs from './pages/Blogs';
import FAQ from './components/FAQ';
import Down from './components/Footer';
import SignUpForm from './pages/SignUpForm';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Head />
        <Routes>
          <Route path="/Home" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signup" element={<SignUpForm />} />
          {/* Add more routes for other sections if needed */}
        </Routes>
        <AboutPage/>
      <WhyUs/>
      <Blogs/>
        <FAQ />
        <Down />
      </div>
    </Router>
  );
}

export default App;
