import { useEffect, lazy } from "react";
import "../styles/LandingHero.css";
// import heroVideo from "../assets/heroVideo.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import RenderOnViewportEntry from "./RenderOnViewportEntry";
// import { Suspense } from "react";
import Loader from "./Loader";
// import LandingAvatar from "../components/LandingAvatar";
const LandingAvatar = lazy(() => import('../components/LandingAvatar'));

const LandingHero = () => {
    let userId = localStorage.getItem('userId');

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div>
            <div className="hero-section">
                <div className="left-div">
                    <h1 className="hero-heading" data-aos="fade-up">
                        Feel the <big className=" text-teal-400">Connection</big>. <br /> Feel <big className="text-teal-400">Chums</big>.
                    </h1>
                    <p className=" text-gray-100" data-aos="fade-up" data-aos-delay="100">
                        Your own personalized AI humanoid &nbsp;
                        <big>3D Companion</big>
                        {/* Build & Discover your AI Friend and Work companion */}
                    </p>
                    <div className="hero-btns-div">
                        {/* <buttton
                            className="discord-btn whitespace-nowrap">
                            Discord
                            <FaDiscord className="disc-icon text-white text-2xl ml-2" />
                        </buttton> */}
                        <Link to={`/dashboard/${userId}`} className="create-btn whitespace-nowrap">
                            Get Started
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                </div>
                {/* <div className="hero-img-div"> */}
                    {/*  */}
                {/* </div> */}
                <div className="h-16 md:h-screen">

                </div>
            </div>
            {/* <p className="hero-p-video p-4 capitalize font-medium text-white">Build & Discover your AI companion</p> */}
            {/* <div className="video-div" > */}
                {/* <img className="video-div-img1" src="./v1.svg" alt="" /> */}
                {/* <video src={heroVideo} autoPlay loop playsInline muted data-aos="fade-up" /> */}
                {/* <video src="https://www.apple.com/105/media/us/mac/family/2023/1b2bbf5c-ddc5-44a1-9dfb-7a51c49143fa/anim/welcome/xlarge_2x.mp4" autoPlay loop playsInline muted data-aos="fade-up"></video> */}
                {/* <img className="video-div-img2 absolute right-0" src="./v1.svg" alt="" /> */}
            {/* </div> */}
            <div className="hero-down-div text-white font-bold text-5xl flex flex-col-reverse md:flex-row items-center h-screen gap-5 md:gap-70 my-40">
                <div className="w-1/2 hero-img-div">
                    <RenderOnViewportEntry
                        threshold={0.25}
                        // rootMargin='0px'
                        // root={null}
                        className="w-full h-full"
                    >
                        {/* <Suspense fallback={<div>Loading...</div>}> */}
                            <LandingAvatar />
                            {/* <Loader/> */}
                        {/* </Suspense> */}
                    </RenderOnViewportEntry>
                </div>
                <div className="flex flex-col md:items-start gap-4 md:gap-8">
                    <span data-aos='fade-left'>Remember.</span>
                    <span data-aos='fade-right'>Reconnect.</span>
                    <span data-aos='fade-left'>Relive.</span>
                </div>
            </div>
        </div>
    )
}

export default LandingHero
