import { Card } from 'flowbite-react';

function Industry() {
  const cardContent = (
    <div className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </div>
  );

  // Creating an array of 8 items to map through and render the Card component
  const cards = new Array(8).fill().map((_, index) => (
    <Card key={index} className="flex mb-4">
      {cardContent}
    </Card>
  ));

  return (
    <div className="flex flex-wrap">
      <div className="w-1/2">
        {cards.slice(0, 4)} {/* Render the first 4 cards in the first column */}
      </div>
      <div className="w-1/2">
        {cards.slice(4)} {/* Render the remaining 4 cards in the second column */}
      </div>
    </div>
  );
}

export default Industry;
