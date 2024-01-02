import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const DropText1= () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "dropdown1") {
      setDropdown1(!dropdown1);
      setDropdown2(false);
    } else if (dropdown === "dropdown2") {
      setDropdown2(!dropdown2);
      setDropdown1(false);
    }
  };

  return (
    <div className="text-center mt-16">
      <h1 className="text-3xl font-bold mb-4">INTEGRATION</h1>
      <p className="text-lg text-gray-600 mb-6">
        Integration Solutions forSeamless Operations
      </p>

      <div className="flex justify-between items-center">
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer mb-2"
            onClick={() => toggleDropdown("dropdown1")}
          >
            API INTEGRATION
          </h2>
          {dropdown1 && (
            <p className="text-gray-600 mb-6">
              Streamline your processes by integrating our AI solutions into
              your website or platform. Our API integration services ensure
              compatibility across various websites, delivering a cohesive and
              efficient user experience.
            </p>
          )}
          <hr className="border-t-2 border-gradient-to-r from-blue-500 to-purple-500 mb-4" />
        </div>
        <AiOutlinePlus
          className="text-2xl cursor-pointer"
          onClick={() => toggleDropdown("dropdown1")}
        />
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer mb-2"
            onClick={() => toggleDropdown("dropdown2")}
          >
            Social Platform Access
          </h2>
          {dropdown2 && (
            <p className="text-gray-600 mb-6">
              Enhance your social media presence and engagement. Our AI
              solutions seamlessly integrate with popular social platforms,
              providing you with the tools to connect, interact, and expand your
              reach.
            </p>
          )}
          <hr className="border-t-2 border-gradient-to-r from-blue-500 to-purple-500 mb-4" />
        </div>
        <AiOutlinePlus
          className="text-2xl cursor-pointer"
          onClick={() => toggleDropdown("dropdown2")}
        />
      </div>
      <hr className="border-t-2 border-gradient-to-r from-blue-500 to-purple-500 mt-6" />
    </div>
  );
};

export default DropText1;
