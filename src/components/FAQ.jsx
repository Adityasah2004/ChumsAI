import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

function FAQ() {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>What makes our AI platform unique?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Our AI platform stands out due to its advanced features, personalized interactions, and seamless integration capabilities.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>How can I integrate the AI platform with my existing systems?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Integration is straightforward with our provided APIs and documentation. Our support team is also available to assist you.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Can the AI platform be customized for specific industry needs?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, our AI platform is highly customizable, and we work closely with clients to tailor solutions to their specific industry requirements.
          </p>
        </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
        <AccordionTitle>What kind of support is available after implementation?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We provide ongoing support, including regular updates, troubleshooting, and assistance to ensure optimal performance post-implementation.
          </p>
        </AccordionContent> 
      </AccordionPanel>
    </Accordion>
  );
}

export default FAQ;