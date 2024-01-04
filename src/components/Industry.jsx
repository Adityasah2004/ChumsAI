import { Card } from "flowbite-react";

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
          className="w-1/2 h-auto object-cover object-center"
        />
      </div>
    </div>
  );

  const cardContents = [
    {
      title: "Education",
      description:
        "Personalizes learning, interactive tutorials, adapts to student needs, fosters engagement.",
      imageUrl: "url_to_education_image.jpg",
    },
    {
      title: "Healthcare",
      description:
        "Assists in patient monitoring, medication reminders, emotional support, enhances well-being.",
      imageUrl: "url_to_education_image.jpg",
    },
    {
      title: "Entertainment",
      description:
        "Enhances gaming, interactive storytelling, providing engaging experiences.",
      imageUrl: "url_to_education_image.jpg",
    },
    {
      title: "Customer Service",
      description:
        "Handles queries, provides instant assistance, enhances user experience with empathy.",
      imageUrl: "url_to_education_image.jpg",
    },
    {
      title: "Fashion",
      description:
        "Acts as a virtual stylist, recommends personalized fashion choices, revolutionizes shopping.",
      imageUrl: "url_to_education_image.jpg",
    },
    {
      title: "Real Estate",
      description:
        "Offers virtual property tours, answers queries, provides detailed information, improves efficiency.",
      imageUrl: "url_to_education_image.jpg",
    },
    {
      title: "Automotive",
      description:
        "Aids drivers with navigation, vehicle info, maintenance reminders, enhances driving experience.",
      imageUrl: "url_to_education_image.jpg",
    },
    {
      title: "Retail",
      description:
        "Offers personalized shopping recommendations, helps navigate products, provides engaging experience.",
      imageUrl: "url_to_education_image.jpg",
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