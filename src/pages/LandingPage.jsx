// import { FaDiscord } from "react-icons/fa";
import { Helmet } from "react-helmet";
import LandingHero from "../components/LandingHero";
import Features from "../components/Features";
// import Industry from "../components/Industry";
import Potential from "../components/Potential";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const LandingPage = () => {

    return (
        <>
            <Helmet>
                <title>Chums AI</title>
                <meta name="description" content="Chums AI" />
            </Helmet>
            <Navbar/>
            <LandingHero/>
            <Features/>
            {/* <Industry/> */}
            <Potential/>
            <Blogs/>
            <FAQ/>
            <Footer/>
        </>
    );
};

export default LandingPage;
