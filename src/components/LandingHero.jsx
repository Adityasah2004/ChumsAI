import "../styles/LandingHero.css";
import LandingAvatar from "../components/LandingAvatar";

const LandingHero = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="left-div">
                    <h1 className="hero-heading">
                        Your own personalized <br /> AI humanoid - <span>3D Companion</span>
                    </h1>
                    <p className=" text-gray-400">
                        Build & Discover your AI Friend and Work companion
                    </p>
                    <div className="hero-btns-div">
                        {/* <buttton
                            className="discord-btn whitespace-nowrap">
                            Discord
                            <FaDiscord className="disc-icon text-white text-2xl ml-2" />
                        </buttton> */}
                        <button className="create-btn whitespace-nowrap">
                            Get Started
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
                <div className="hero-img-div">
                    <LandingAvatar/>
                </div>
            </div>
            <div className="video-div">
                <img className="video-div-img1" src="./v1.svg" alt="" />
                <video src="https://www.apple.com/105/media/us/mac/family/2023/1b2bbf5c-ddc5-44a1-9dfb-7a51c49143fa/anim/welcome/xlarge_2x.mp4" autoPlay loop loading="lazy"/>
                <img className="video-div-img2" src="./v1.svg" alt="" />
            </div>
        </div>
    )
}

export default LandingHero
