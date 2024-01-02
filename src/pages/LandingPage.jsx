import React, { useRef, useEffect } from "react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  useEffect(() => {
    const circle1 = circle1Ref.current;
    const circle2 = circle2Ref.current;

    const moveCircles = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const circleWidth = circle1.offsetWidth;

      const moveToCorner = (circle) => {
        const cornerPositions = [
          { x: 0, y: 0 },
          { x: screenWidth - circleWidth, y: 0 },
          { x: screenWidth - circleWidth, y: screenHeight - circleWidth },
          { x: 0, y: screenHeight - circleWidth },
        ];

        const randomCorner = cornerPositions[Math.floor(Math.random() * 4)];
        circle.style.transition = "top 2s ease-out, left 2s ease-out";
        circle.style.top = `${randomCorner.y}px`;
        circle.style.left = `${randomCorner.x}px`;
      };

      moveToCorner(circle1);
      moveToCorner(circle2);

      const moveCirclesRandomly = () => {
        const getRandomPosition = () => {
          const x = Math.floor(Math.random() * screenWidth);
          const y = Math.floor(Math.random() * screenHeight);
          return { x, y };
        };

        const randomPosition1 = getRandomPosition();
        const randomPosition2 = getRandomPosition();

        circle1.style.transition = "top 2s ease-in-out, left 2s ease-in-out";
        circle1.style.top = `${randomPosition1.y}px`;
        circle1.style.left = `${randomPosition1.x}px`;

        circle2.style.transition = "top 2s ease-in-out, left 2s ease-in-out";
        circle2.style.top = `${randomPosition2.y}px`;
        circle2.style.left = `${randomPosition2.x}px`;
      };

      setInterval(moveCirclesRandomly, 5000);
      moveCirclesRandomly();
    };

    moveCircles();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div ref={circle1Ref} className="circle circle-1"></div>
        <div ref={circle2Ref} className="circle circle-2"></div>
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="text-left w-1/2 p-10">
          <h1 className="text-4xl font-bold mb-4">
            YOUR OWN PERSONALIZED AI HUMANOID 3D COMPANION
          </h1>
          <p className="text-lg text-gray-600">
            Build & Discover your AI Friend and Work companion to
          </p>
          <div className="mt-8">
            <hr className="border-t-2 border-gradient-to-r from-blue-500 to-purple-500 mb-4" />
            <div className="flex flex-wrap gap-4">
              <Button gradientDuoTone="purpleToBlue">
                Create Your Companion
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button outline gradientDuoTone="purpleToBlue">
                Discord
                <FaDiscord className="text-purple-500 text-2xl ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <iframe
            title="Embedded Frame"
            className="w-full h-screen"
            src=""
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
