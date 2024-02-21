import Features from "../components/Features";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const AboutPage = () => {
    return (
        <div className="py-4">
            <Helmet>
                <title>About Us | Chums AI</title>
                <meta name="description" content="About Chums AI" />
            </Helmet>
            <Navbar/>
            <Features />
        </div>
    );
};

export default AboutPage;
