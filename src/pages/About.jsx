import React from "react";
import Services from "../components/ServicesCard";
import Features from "../components/Features";
import { Button } from "flowbite-react";
import { HiExternalLink } from "react-icons/hi";

const AboutPage = () => {
  return (
    <div className="m-8">
      <div className="flex justify-center items-center m-16">
        <div className="w-1/2">
          <img
            src="src/assets/About.png"
            alt="About Page Image"
            className="w-full h-auto"
          />
        </div>

        <div className="text-left w-1/2 p-10">
          <h1 className="text-4xl font-bold mb-4">
            Making user interaction more Humanlike and Empathetic!
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            At CHUMSAI, we bring you a cutting-edge platform that combines
            various advanced technologies to create a truly personalized and
            immersive customer experience.
          </p>
          <hr className="border-t-2 border-gradient-to-r from-blue-500 to-purple-500 mb-4" />
          <div className="flex flex-wrap gap-4">
            <Button outline gradientDuoTone="purpleToBlue">
              Learn more
              <HiExternalLink className="text-purple-500 text-2xl ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <Services />
      <Features />
    </div>
  );
};

export default AboutPage;
