import { FaDiscord } from "react-icons/fa";
import Landing from '../assets/landing.png';
import "../styles/LandingPage.css";
import imageName from '../assets/About.png';
import { Helmet } from "react-helmet";
import LandingAvatar from "../components/LandingAvatar";


const LandingPage = () => {

    return (
        <>
            <div className="">
                <Helmet>
                    <title>Chums AI</title>
                    <meta name="description" content="Chums AI" />
                </Helmet>

                <div className=" hero-section flex flex-col lg:flex-row justify-center items-center  h-screen bg-transparent overflow-hidden">
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
                                <button className="create-btn flex justify-center items-center cursor-pointer py-3 px-4 whitespace-nowrap rounded-xl gap-2 text-white">
                                    Get Started
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </button>
                                <buttton
                                    className="discord-btn flex justify-center items-center cursor-pointer py-3 px-4 whitespace-nowrap rounded-xl gap-2 border">
                                    Discord
                                    <FaDiscord className="disc-icon text-white text-2xl ml-2" />
                                </buttton>
                            </div>
                        </div>
                    </div>
                    <div className="hero-img-div h-screen">
                        <LandingAvatar className="" />
                    </div>
                </div>

                <div className="flex flex-col mt-9 md:flex-row justify-center items-center md:space-x-8 m-6 md:m-16">
                    <img
                        src={imageName}
                        alt="About Page Image"
                        className="phone-mockup"
                    />

                    <div className="text-div flex flex-col gap-2">
                        <h2 className="mb-4">
                            Making user interaction more Human like and Empathetic!
                        </h2>
                        <p className=" text-gray-400 mb-4">
                            At CHUMSAI, we bring you a cutting-edge platform that combines
                            various advanced technologies to create a truly personalized and
                            immersive customer experience.
                        </p>
                        <buttton
                            className="discord-btn flex justify-center items-center cursor-pointer py-3 px-4 whitespace-nowrap rounded-xl gap-2 border">
                            Learn more
                            <span className="material-symbols-outlined">
                                open_in_new
                            </span>
                        </buttton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
