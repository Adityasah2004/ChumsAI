import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

function FAQ() {
  return (
    <div className="max-w-lg mx-auto m-8 ">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
      <Accordion>
        <AccordionPanel className="w-full">
          <AccordionTitle className="bg-gray-900 dark:bg-gray-900 p-3 cursor-pointer">
            What makes our AI platform unique? 
          </AccordionTitle>
          <AccordionContent className="bg-gray-800 dark:bg-gray-800 p-3">
            <p className="mb-2 text-gray-400 dark:text-gray-400">
              Our AI platform stands out due to its advanced features,
              personalized interactions, and seamless integration capabilities.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="w-full">
          <AccordionTitle className="bg-gray-900 dark:bg-gray-900 p-3 cursor-pointer">
            How can I integrate the AI platform with my existing systems?
          </AccordionTitle>
          <AccordionContent className="bg-gray-800 dark:bg-gray-800 p-3">
            <p className="mb-2 text-gray-400 dark:text-gray-400">
              Integration is straightforward with our provided APIs and
              documentation. Our support team is also available to assist you.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="w-full">
          <AccordionTitle className="bg-gray-900 dark:bg-gray-900 p-3 cursor-pointer">
            Can the AI platform be customized for specific industry needs?
          </AccordionTitle>
          <AccordionContent className="bg-gray-800 dark:bg-gray-800 p-3">
            <p className="mb-2 text-gray-400 dark:text-gray-400">
              Yes, our AI platform is highly customizable, and we work closely
              with clients to tailor solutions to their specific industry
              requirements.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="w-full">
          <AccordionTitle className="bg-gray-900 dark:bg-gray-900 p-3 cursor-pointer">
            What kind of support is available after implementation?
          </AccordionTitle>
          <AccordionContent className="bg-gray-800 dark:bg-gray-800 p-3">
            <p className="mb-2 text-gray-400 dark:text-gray-400">
              We provide ongoing support, including regular updates,
              troubleshooting, and assistance to ensure optimal performance
              post-implementation.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}

export default FAQ;
