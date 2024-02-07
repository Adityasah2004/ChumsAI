import React from "react";
import Industry from "../components/Industry";
import DropText1 from "../components/Dropdown1";
import DropText2 from "../components/DropDown2";
import imageName from "../assets/why.webp";

const WhyUs = () => {
  return (
    <div className="m-8">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:m-16">
        <div className="md:w-1/2">
          <img src={imageName} alt="Why Page Image" className="w-full h-auto" />
        </div>

        <div className="text-left md:w-1/2 md:p-10">
          <h1 className="text-4xl font-bold mb-4">WHY ChumsAI?</h1>
          <hr className="border-t-2 border-gradient-to-r from-blue-900 to-purple-100 mb-4" />
          <p className="text-lg text-gray-400 mb-4">
            Embrace the future of AI-driven excellence with our transformative
            AI innovations that surpass ordinary solutions. Our cutting-edge
            technologies, such as intelligent chatbots, voice interactions, and
            3D characters, redefine user engagement. Seamless API integrations
            and customized kiosk systems keep your business ahead in the digital
            landscape. With a commitment to innovation and industry-specific
            expertise, we are the ideal partner for businesses looking to
            elevate operations and customer experiences. Join us in shaping the
            future of AI excellence.
          </p>
        </div>
      </div>
      <Industry />
      <DropText1 />
      <DropText2 />
    </div>
  );
};

export default WhyUs;
