import { Carousel } from "flowbite-react";

function Features() {
  return (
    <div className="py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">OUR FEATURES</h2>
      <div className="h-auto sm:h-32 xl:h-40 2xl:h-48">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white card-with-hover">
            <div className="flex items-center w-full p-16">
              <div className="flex-shrink-0 mr-8">
                <img
                  src="src\assets\img.jpg"
                  alt="Feature Image"
                  className="w-24 h-24 object-cover rounded-full"
                  style={{
                    borderRadius: "32px",
                    boxShadow: "20px 30px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
              <div className="text-left">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  Conversational Intelligence
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                  A conversational AI platform with Automated Speech
                  Recognition, Natural Language processing, and Speech to Text
                  generation capabilities.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white card-with-hover">
            <div className="flex items-center w-full p-16">
              <div className="flex-shrink-0 mr-8">
                <img
                  src="src\assets\img.jpg"
                  alt="Feature Image"
                  className="w-24 h-24 object-cover rounded-full"
                  style={{
                    borderRadius: "32px",
                    boxShadow: "20px 30px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
              <div className="text-left">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  Visual Intelligence
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                  State of the art 3D Visualization capability to create
                  compelling product visualizations and high-quality
                  visualizations in low GPU devices.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white card-with-hover">
            <div className="flex items-center w-full p-16">
              <div className="flex-shrink-0 mr-8">
                <img
                  src="src\assets\img.jpg"
                  alt="Feature Image"
                  className="w-24 h-24 object-cover rounded-full"
                  style={{
                    borderRadius: "32px",
                    boxShadow: "20px 30px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
              <div className="text-left">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  Real-Time Adaptive Personalization
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                  An online learning genetic algorithm that is a
                  multi-dimensional affinity engine which predicts affinities
                  between customer & product attributes.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white card-with-hover">
            <div className="flex items-center w-full p-16">
              <div className="flex-shrink-0 mr-8">
                <img
                  src="src\assets\img.jpg"
                  alt="Feature Image"
                  className="w-24 h-24 object-cover rounded-full"
                  style={{
                    borderRadius: "32px",
                    boxShadow: "20px 30px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
              <div className="text-left">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  Channel Diversity
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                  Provide a unified experience across multiple channels like
                  Web, App, Kiosk systems, and Social media, based on the
                  customer's needs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white card-with-hover">
            <div className="flex items-center w-full p-16">
              <div className="flex-shrink-0 mr-8">
                <img
                  src="src\assets\img.jpg"
                  alt="Feature Image"
                  className="w-24 h-24 object-cover rounded-full"
                  style={{
                    borderRadius: "32px",
                    boxShadow: "20px 30px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
              <div className="text-left">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  Unified Intelligent Data Platform
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                  Backed by a centralized database and intelligence layer that
                  manages personalization across channels and conversations.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white card-with-hover">
            <div className="flex items-center w-full p-16">
              <div className="flex-shrink-0 mr-8">
                <img
                  src="src\assets\img.jpg"
                  alt="Feature Image"
                  className="w-24 h-24 object-cover rounded-full"
                  style={{
                    borderRadius: "32px",
                    boxShadow: "20px 30px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
              <div className="text-left">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  Seamless Integrations
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                  Powered with REST APIs and SDKs, a highly integrable platform
                  enabling smooth data exchange and collaboration across
                  applications.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white card-with-hover">
            <div className="flex items-center w-full p-16">
              <div className="flex-shrink-0 mr-8">
                <img
                  src="src\assets\img.jpg"
                  alt="Feature Image"
                  className="w-24 h-24 object-cover rounded-full"
                  style={{
                    borderRadius: "32px",
                    boxShadow: "20px 30px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
              <div className="text-left">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  Tailored Kiosk Systems for Industries
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                  Revolutionize your industry with our customized kiosk systems.
                  Whether you're in the hospitality, restaurant, showroom, or
                  any other business, our innovative solutions enhance customer
                  experiences, streamline operations, and drive efficiency.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <style>
        {`
          .card-with-hover {
            transition: background-position 0.5s ease;
            background-size: 400% 400%;
          }

          .card-with-hover:hover {
            animation: gradientShift 3s ease infinite;
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 100% 100%;
            }
          }
          /* Media query for mobile view */
          @media (max-width: 640px) {
            .h-auto {
              width: 500px;
              height: 300px; /* Adjust the height as needed */
            }
          }
        `}
      </style>
    </div>
  );
}

export default Features;
