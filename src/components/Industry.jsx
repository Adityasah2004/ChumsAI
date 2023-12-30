import { Card } from 'flowbite-react';

function Industry() {
  const generateCardContent = (title, description) => (
    <div className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );

  const cardContents = [
    {
      title: 'Acquisition 1 Title',
      description: 'Description for Acquisition 1',
    },
    {
      title: 'Acquisition 1 Title',
      description: 'Description for Acquisition 1',
    },
    {
      title: 'Acquisition 1 Title',
      description: 'Description for Acquisition 1',
    },
    {
      title: 'Acquisition 1 Title',
      description: 'Description for Acquisition 1',
    },
    {
      title: 'Acquisition 1 Title',
      description: 'Description for Acquisition 1',
    },
    {
      title: 'Acquisition 1 Title',
      description: 'Description for Acquisition 1',
    },
    {
      title: 'Acquisition 1 Title',
      description: 'Description for Acquisition 1',
    },
    {
      title: 'Acquisition 1 Title',
      description: 'Description for Acquisition 1',
    },
  ];

  const cards = cardContents.map((content, index) => (
    <Card key={index} className="flex mb-4">
      {generateCardContent(content.title, content.description)}
    </Card>
  ));

  return (
    <div className="flex">
      <div className="w-1/2 pr-4"> {/* Added pr-4 for right margin */}
        {cards.slice(0, 4)}
      </div>
      <div className="w-1/2 pl-4"> {/* Added pl-4 for left margin */}
        {cards.slice(4)}
      </div>
    </div>
  );
}

export default Industry;
