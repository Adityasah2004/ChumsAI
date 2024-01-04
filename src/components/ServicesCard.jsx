import { Card } from "flowbite-react";

function Services() {
  return (
    <div className="py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">OUR SERVICES</h2>
      <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-4">
        <Card href="#" className="max-w-sm card-with-hover md:w-1/3">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            AI Companion
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Our AI companion is your 24/7 virtual assistant, providing instant
            support, answering queries, and enhancing user engagement.
            Seamlessly integrate this intelligent solution for enhanced customer
            interactions.
          </p>
        </Card>  

        <Card href="#" className="max-w-sm card-with-hover md:w-1/3">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Voice-enabled AI Companion
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Experience the future of communication with our voice-enabled AI
            chatbot. Effortlessly interact with users through natural language
            processing, making conversations more intuitive and engaging.
          </p>
        </Card>

        <Card href="#" className="max-w-sm card-with-hover md:w-1/3">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            3D AI Companion
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Meet our 3D AI character, your interactive companion. Engage users
            with a lifelike virtual assistant that brings a new dimension to
            communication, making interactions memorable and enjoyable.
          </p>
        </Card>
      </div>
      <style>
        {`
          .card-with-hover {
            border-radius: 12px;
            border: 1.5px solid #3C3B3B;
            background: linear-gradient(121deg, rgba(57, 57, 57, 0.20) -12.04%, rgba(102, 101, 101, 0.45) 14.93%, rgba(57, 57, 57, 0.20) 37.02%, rgba(57, 57, 57, 0.20) 57.86%);
            background-size: 400% 400%;
            transition: background-position 0.5s ease;
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
        `}
      </style>
    </div>
  );
}

export default Services;
