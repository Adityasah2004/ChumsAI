import React from "react";
import Industry from "../components/Industry";
import DropText1 from "../components/Dropdown1";
import DropText2 from "../components/DropDown2";

const WhyUs = () => {
  return (
    <div className="m-8">
        <h2 className="text-3xl font-bold mb-4">WHAT WE DO?</h2>
      <div className="flex justify-center items-center m-16">
        <div className="w-1/2">
          <img
            src="src/assets/why.webp"
            alt="Why Page Image"
            className="w-full h-auto"
          />
        </div>

        <div className="text-left w-1/2 p-10">
          <h1 className="text-4xl font-bold mb-4">WHY CHUMSAI?</h1>
          <hr className="border-t-2 border-gradient-to-r from-blue-500 to-purple-500 mb-4" />
          <p className="text-lg text-gray-600 mb-4">
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
      <DropText1/>
      <DropText2/>
    </div>
  );
};

export default WhyUs;
