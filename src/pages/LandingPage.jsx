import { useRef, useEffect } from "react";
// import { Button } from "flowbite-react";
// import { HiOutlineArrowRight } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa";
import Landing from '../assets/landing.png';
import "../styles/LandingPage.css";
import imageName from '../assets/About.png';


const LandingPage = () => {
    const circle1Ref = useRef(null);
    const circle2Ref = useRef(null);
    const circle3Ref = useRef(null);

    useEffect(() => {
        const circle1 = circle1Ref.current;
        const circle2 = circle2Ref.current;
        const circle3 = circle3Ref.current;

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
            moveToCorner(circle3);

            const moveCirclesRandomly = () => {
                const getRandomPosition = () => {
                    const x = Math.floor(Math.random() * (window.innerWidth - 150));
                    const y = Math.floor(Math.random() * (window.innerHeight - 150));
                    return { x, y };
                };

                const randomPosition1 = getRandomPosition(circle1.offsetWidth, circle1.offsetHeight);
                const randomPosition2 = getRandomPosition(circle2.offsetWidth, circle2.offsetHeight);
                const randomPosition3 = getRandomPosition(circle3.offsetWidth, circle3.offsetHeight);

                circle1.style.transition = "top 2s ease-in-out, left 2s ease-in-out";
                circle1.style.top = `${randomPosition1.y}px`;
                circle1.style.left = `${randomPosition1.x}px`;

                circle2.style.transition = "top 2s ease-in-out, left 2s ease-in-out";
                circle2.style.top = `${randomPosition2.y}px`;
                circle2.style.left = `${randomPosition2.x}px`;

                circle3.style.transition = "top 2s ease-in-out, left 2s ease-in-out";
                circle3.style.top = `${randomPosition3.y}px`;
                circle3.style.left = `${randomPosition3.x}px`;
            };

            setInterval(moveCirclesRandomly, 2000);
            moveCirclesRandomly();
            window.addEventListener('resize', moveCirclesRandomly);
        };

        moveCircles();
    }, []);

    return (
        <>
            <div className="">
                <div className=" w-full h-full overflow-x-hidden">
                    <div ref={circle1Ref} className="circle circle-1"></div>
                    <div ref={circle2Ref} className="circle circle-2"></div>
                    <div ref={circle3Ref} className="circle circle-3"></div>


                    <div className=" hero-section flex flex-col lg:flex-row justify-center items-center h-full bg-transparent overflow-hidden">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="text-center lg:text-left lg:p-10">
                                <h1 className="hero-heading">
                                    Your own personalized AI humanoid 3D Campanion
                                </h1>
                                <p className="text-lg lg:text-xl text-gray-400">
                                    Build & Discover your AI Friend and Work companion
                                </p>
                                {/* <div className="flex flex-col gap-2"> */}
                                    <div className="hr-div">
                                        <hr className="hz-line" />
                                    </div>
                                    <div className="hero-btns-div flex gap-4">
                                        <button className="create-btn flex justify-center items-center cursor-pointer py-3 px-4 whitespace-nowrap rounded-xl gap-2 bg-transparent text-white">
                                            Get Started
                                            <span className="material-symbols-outlined">
                                                arrow_forward
                                            </span>
                                        </button>
                                        <buttton
                                            className="discord-btn flex justify-center items-center cursor-pointer py-3 px-4 whitespace-nowrap rounded-xl gap-2 border">
                                            Discord
                                            <FaDiscord className="text-white text-2xl ml-2" />
                                        </buttton>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="hero-img-div lg:w-1/2 order-1 lg:order-2">
                            <img
                                src={Landing}
                                alt="Landing Page Image"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* <div> */}

                    <div className="flex flex-col mt-9 md:flex-row justify-center items-center md:space-x-8 m-6 md:m-16">
                        {/* <div className="phone-mockup-div"> */}
                            <img
                                src={imageName}
                                alt="About Page Image"
                                className="phone-mockup"
                            />
                        {/* </div> */}

                        <div className="text-div flex flex-col gap-2">
                            <h2 className="mb-4">
                                Making user interaction more Human like and Empathetic!
                            </h2>
                            <p className=" text-gray-400 mb-4">
                                At CHUMSAI, we bring you a cutting-edge platform that combines
                                various advanced technologies to create a truly personalized and
                                immersive customer experience.
                            </p>
                            {/* <div className="hr-div">
                                <hr className="hz-line w-2/3" />
                            </div> */}
                            {/* <div className="flex flex-wrap gap-4 justify-center md:justify-start"> */}
                                <buttton
                                    className="discord-btn flex justify-center items-center cursor-pointer py-3 px-4 whitespace-nowrap rounded-xl gap-2 border">
                                    Learn more
                                    <span className="material-symbols-outlined">
                                        open_in_new
                                    </span>
                                    {/* <FaDiscord className="text-white text-2xl ml-2" /> */}
                                </buttton>
                                {/* <Button outline gradientDuoTone="purpleToBlue">
                                    
                                    
                                </Button> */}
                            {/* </div> */}
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default LandingPage;
