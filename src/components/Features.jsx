import '../styles/Features.css'

function Features() {
    return (
        <section className='flex flex-col justify-center items-center my-5 py-10 gap-10' id='features'>
            <p className='features-heading'>
                <span>New Generation</span> features of <span>AI</span>
            </p>
            <div className='features-grid'>
                <div className='feature-card1' data-aos="zoom-in">
                    <div className='feature-card-content'>
                        <h3 className="feature-card-heading">AI-Powered</h3>
                        <p>A conversational AI platform with speech recognition and NLP</p>
                    </div>
                </div>
                <div className='feature-card2' data-aos="zoom-in">
                    <div className='feature-card-content'>
                        <h3 className="feature-card-heading">Visual Intelligence</h3>
                        <p>State of the art 3D Visualization</p>
                    </div>
                </div>
                <div className='feature-card3' data-aos="zoom-in">
                    <div className='feature-card-content'>
                        <h3 className="feature-card-heading">Real Time</h3>
                        <p>An online learning algorithm</p>
                    </div>
                </div>
                <div className='feature-card4' data-aos="zoom-in">
                    <div className='feature-card-content'>
                        <h3 className="feature-card-heading">Voice call</h3>
                        <p>Talk to your AI friend any time</p>
                    </div>
                </div>
                <div className='feature-card5' data-aos="zoom-in">
                    <div className='feature-card-content'>
                        <h3 className="feature-card-heading">Seamless Integrations</h3>
                        <p>Powered with Rest APIs and SDKs</p>
                    </div>
                </div>
                <div className='feature-card6' data-aos="zoom-in">
                    <div className='feature-card-content'>
                        <h3 className="feature-card-heading">Video call</h3>
                        <p>Face time with AI</p>
                    </div>
                </div>
                <div className='feature-card7' data-aos="zoom-in">
                    <div className='feature-card-content'>
                        <h3 className="feature-card-heading">Support 29 Languages</h3>
                        <p>AI can understand and speak 29 languages</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
