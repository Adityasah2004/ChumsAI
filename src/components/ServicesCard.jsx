import { Card } from "flowbite-react";

function Services() {
    return (
        <div className="mt-20 px-10 text-center">
            <h2 className="text-4xl mb-6">Our Services</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-10 pt-10">
                <Card className="card max-w-sm card-with-hover md:w-1/3">
                    <h5 className="text-2xl tracking-tight dark:text-white">
                        AI Companion
                    </h5>
                    <p className="font-normal text-gray-400 dark:text-gray-400">
                        Our AI companion is your 24/7 virtual assistant, providing instant
                        support, answering queries, and enhancing user engagement.
                        Seamlessly integrate this intelligent solution for enhanced customer
                        interactions.
                    </p>
                </Card>

                <Card className="card max-w-sm card-with-hover md:w-1/3">
                    <h5 className="text-2xl tracking-tight  dark:text-white">
                        Voice-enabled AI Companion
                    </h5>
                    <p className="font-normal text-gray-400 dark:text-gray-400">
                        Experience the future of communication with our voice-enabled AI
                        chatbot. Effortlessly interact with users through natural language
                        processing, making conversations more intuitive and engaging.
                    </p>
                </Card>

                <Card className="card max-w-sm card-with-hover md:w-1/3">
                    <h5 className="text-2xl tracking-tight  dark:text-white">
                        3D AI Companion
                    </h5>
                    <p className="font-normal text-gray-400 dark:text-gray-400">
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
            transition: background-position 1s ease-in-out;

          }

          .card-with-hover:hover {
            background-position: 100% 100%;
          }
        `}
            </style>
        </div>
    );
}

export default Services;
