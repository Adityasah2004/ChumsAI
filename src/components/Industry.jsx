import React from "react";
import { Card } from "flowbite-react";
import styled, { keyframes } from 'styled-components';
import Education from "../assets/education.png";
import Healthcare from "../assets/healtcare.png";
import Entertainment from "../assets/entertainment.png";
import CustomerService from "../assets/coustomer services.png";
import Fashion from "../assets/fashion.png";
import RealEstate from "../assets/real estate.png";
import Automotive from "../assets/automotive.png";
import Retail from "../assets/retail.png";

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// New styles for the separate CSS class with hover effect
const HoverCard = styled(Card)`
  border-radius: 12px;
  border: 1.5px solid #3C3B3B;
  background: linear-gradient(121deg, rgba(57, 57, 57, 0.20) -12.04%, rgba(102, 101, 101, 0.45) 14.93%, rgba(57, 57, 57, 0.20) 37.02%, rgba(57, 57, 57, 0.20) 57.86%);
  background-size: 400% 400%;
  transition: background-position 0.5s ease;

  &:hover {
    animation: ${gradientShift} 3s ease infinite;
  }
`;

const generateCardContent = (title, description, imageUrl) => (
  <div className="text-left max-w-lg mx-auto p-4 md:p-0">
    <div className="flex flex-col rounded-lg overflow-hidden md:flex-row">
      <img
        src={imageUrl}
        alt={title}
        className="w-full md:w-1/2 object-contain object-center mb-4 md:mb-0"
        style={{ height: "150px" }}
      />
      <div className="mt-4 w-full md:w-1/2 md:pl-4">
        <h5 className="text-white text-xl font-bold mb-2">{title}</h5>
        <p className="text-gray-400 dark:text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

const cardContents = [
  {
    title: "Education",
    description:
      "Personalizes learning, interactive tutorials, adapts to student needs, fosters engagement.",
    imageUrl: Education,
  },
  {
    title: "Healthcare",
    description:
      "Assists in patient monitoring, medication reminders, emotional support, enhances well-being.",
    imageUrl: Healthcare,
  },
  {
    title: "Entertainment",
    description:
      "Enhances gaming, interactive storytelling, providing engaging experiences.",
    imageUrl: Entertainment,
  },
  {
    title: "Customer Service",
    description:
      "Handles queries, provides instant assistance, enhances user experience with empathy.",
    imageUrl: CustomerService,
  },
  {
    title: "Fashion",
    description:
      "Acts as a virtual stylist, recommends personalized fashion choices, revolutionizes shopping.",
    imageUrl: Fashion,
  },
  {
    title: "Real Estate",
    description:
      "Offers virtual property tours, answers queries, provides detailed information, improves efficiency.",
    imageUrl: RealEstate,
  },
  {
    title: "Automotive",
    description:
      "Aids drivers with navigation, vehicle info, maintenance reminders, enhances driving experience.",
    imageUrl: Automotive,
  },
  {
    title: "Retail",
    description:
      "Offers personalized shopping recommendations, helps navigate products, provides engaging experience.",
    imageUrl: Retail,
  },
];

const cards = cardContents.map((content, index) => (
  <HoverCard key={index} className="flex mb-4 card-with-hover">
    {generateCardContent(content.title, content.description, content.imageUrl)}
  </HoverCard>
));

const Industry = () => (
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold mb-4">INDUSTRY</h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
      {cards}
    </div>
  </div>
);

export default Industry;

<style>
  {`
    @keyframes gradientShift {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }
  `}
</style>;
