// import React from "react";
import Services from "../components/ServicesCard";
import Features from "../components/Features";
import { Helmet } from "react-helmet";
// import { Button } from "flowbite-react";
// import { HiExternalLink } from "react-icons/hi";


const AboutPage = () => {
    return (
        <div className="flex flex-col mt-5 gap-10">
            <Helmet>
                <title>About Us | Chums AI</title>
                <meta name="description" content="About Chums AI" />
            </Helmet>
            <Services />
            <Features />
        </div>
    );
};

export default AboutPage;
