import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const DropText2 = () => {
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
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold mb-4">
        MAXIMIZE REVENUE POTENTIAL with CHUMS AI
      </h1>
      <p className="text-lg text-gray-400 mb-6">
        State of the art artificial intelligence to create experiences at scale
      </p>

      <div className="flex justify-between items-center">
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer mb-2"
            onClick={() => toggleDropdown("dropdown1")}
          >
            Empathetic AI Platform
          </h2>
          {dropdown1 && (
            <p className="text-gray-400 mb-6">
              The Empathetic AI Platform uses advanced artificial intelligence
              to understand and respond to human emotions, fostering deeper
              connections. By integrating emotional intelligence, it creates
              empathetic user experiences, revolutionizing AI-human interactions
              with a human-like approach.
            </p>
          )}
          <hr className="border-t-2 border-gradient-to-r from-blue-900 to-purple-100 mb-4" />
        </div>
        {dropdown1 ? (
          <AiOutlineMinus
            className="text-2xl cursor-pointer"
            onClick={() => toggleDropdown("dropdown1")}
            style={{ color: "red" }} 
          />
        ) : (
          <AiOutlinePlus
            className="text-2xl cursor-pointer"
            onClick={() => toggleDropdown("dropdown1")}
            style={{ color: "red" }} 
          />
        )}
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h2
            className="text-xl font-semibold cursor-pointer mb-2"
            onClick={() => toggleDropdown("dropdown2")}
          >
            Generative AI powered Virtual Avatars
          </h2>
          {dropdown2 && (
            <p className="text-gray-400 mb-6">
              Virtual avatar technology with AI brain that revolutionizes
              human-computer interactions, combining lifelike avatars with
              intelligent AI. Enhanced conversations, personalization, and
              adaptive recommendations create an engaging user experience.
            </p>
          )}
          <hr className="border-t-2 border-gradient-to-r from-blue-900 to-purple-100 mb-4" />
        </div>
        {dropdown2 ? (
          <AiOutlineMinus
            className="text-2xl cursor-pointer"
            onClick={() => toggleDropdown("dropdown2")}
            style={{ color: "red" }} 
          />
        ) : (
          <AiOutlinePlus
            className="text-2xl cursor-pointer"
            onClick={() => toggleDropdown("dropdown2")}
            style={{ color: "red" }} 
          />
        )}
      </div>
    </div>
  );
};

export default DropText2;
