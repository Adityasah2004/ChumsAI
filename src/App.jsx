import Head from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Blogs from "./pages/Blogs";
import FAQ from "./components/FAQ";
import Down from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Head />
      <LandingPage />
      <AboutPage />
      <WhyUs />
      <Blogs />
      <FAQ />
      <Down />
    </>
  );
}

export default App;
