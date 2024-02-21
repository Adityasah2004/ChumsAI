import Industry from "../components/Industry";
import Potential from "../components/Potential";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const WhyUs = () => {
    return (
        <div className="my-8 py-10">
            <Helmet>
                <title>Why Chums AI | Chums AI</title>
                <meta name="description" content="Embrace the future of AI-driven excellence with our transformative AI innovations that surpass ordinary solutions. Our cutting-edge technologies, such as intelligent chatbots, voice interactions, and 3D characters, redefine user engagement. Seamless API integrations and customized kiosk systems keep your business ahead in the digital landscape. With a commitment to innovation and industry-specific expertise, we are the ideal partner for businesses looking to elevate operations and customer experiences. Join us in shaping the future of AI excellence." />
            </Helmet>
            <Navbar/>
            <Industry />
            <Potential/>
        </div>
    );
};

export default WhyUs;
