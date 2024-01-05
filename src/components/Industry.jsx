import { Card } from "flowbite-react";
import Education from '../assets/education.png';
import Healthcare from '../assets/healtcare.png';
import Entertainment from '../assets/entertainment.png';
import CustomerService from '../assets/coustomer services.png';
import Fashion from '../assets/fashion.png';
import RealEstate from '../assets/real estate.png';
import Automotive from '../assets/automotive.png';
import Retail from '../assets/retail.png';

function Industry() {
  const generateCardContent = (title, description, imageUrl) => (
    <div className="text-left max-w-lg mx-auto p-4 md:p-0">
      <div className="flex rounded-lg overflow-hidden">
        <div className="p-6 w-1/2">
          <h5 className="text-xl font-bold mb-2">{title}</h5>
          <p>{description}</p>
        </div>
        <img
          src={imageUrl}
          alt={title}
          className="w-1/2 object-contain object-center"
          style={{ width: "250px", height: "150px" }}
        />
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
    <Card key={index} className="flex mb-4 card-with-hover">
      {generateCardContent(
        content.title,
        content.description,
        content.imageUrl
      )}
    </Card>
  ));

  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-4">INDUSTRY</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        {cards}
      </div>
    </div>
  );
}

export default Industry;

<style>
  {`
    .card-with-hover {
      transition: background-position 0.5s ease;
      background-size: 400% 400%;
      margin-bottom: 1rem;
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
</style>;
