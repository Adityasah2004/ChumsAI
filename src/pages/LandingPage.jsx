import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
// import LandingHero from "../components/LandingHero";
const LandingHero = lazy(() => import("../components/LandingHero"));
// import Features from "../components/Features";
const Features = lazy(() => import("../components/Features"));
// import Potential from "../components/Potential";
const Potential = lazy(() => import("../components/Potential"));
// import Navbar from "../components/Navbar";
const Navbar = lazy(() => import("../components/Navbar"));
// import Blogs from "../components/Blogs";
const Blogs = lazy(() => import("../components/Blogs"));
// import FAQ from "../components/FAQ";
const FAQ = lazy(() => import("../components/FAQ"));
// import Footer from "../components/Footer";
const Footer = lazy(() => import("../components/Footer"));

const LandingPage = () => {

    return (
        <>
            <Helmet>
                <title>Chums AI</title>
                <meta name="description" content="Chums AI" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <LandingHero/>
            </Suspense>
            {/* <LandingHero/> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Features/>
            </Suspense>
            {/* <Features/> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Potential/>
            </Suspense>
            {/* <Potential/> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Blogs/>
            </Suspense>
            {/* <Blogs/> */}
            <Suspense fallback={<div>Loading...</div>}>
                <FAQ/>
            </Suspense>
            {/* <FAQ/> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Footer/>
            </Suspense>
            {/* <Footer/> */}
        </>
    );
};

export default LandingPage;
