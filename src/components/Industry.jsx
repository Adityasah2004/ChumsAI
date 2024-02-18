import Education from "../assets/education.png";
import Healthcare from "../assets/healtcare.png";
import Entertainment from "../assets/entertainment.png";
import CustomerService from "../assets/coustomer services.png";
import Fashion from "../assets/fashion.png";
import RealEstate from "../assets/real estate.png";
import Automotive from "../assets/automotive.png";
import Retail from "../assets/retail.png";
import '../styles/Industry.css';

const cardContents = [
    {
        title: "Education",
        classname: "industry-card1",
        imageUrl: Education,
    },
    {
        title: "Healthcare",
        classname: "industry-card2",
        imageUrl: Healthcare,
    },
    {
        title: "Entertainment",
        classname: "industry-card3",
        imageUrl: Entertainment,
    },
    {
        title: "Customer Service",
        classname: "industry-card4",
        imageUrl: CustomerService,
    },
    {
        title: "Fashion",
        classname: "industry-card5",
        imageUrl: Fashion,
    },
    {
        title: "Real Estate",
        classname: "industry-card6",
        imageUrl: RealEstate,
    },
    {
        title: "Automotive",
        classname: "industry-card7",
        imageUrl: Automotive,
    },
    {
        title: "Retail",
        classname: "industry-card8",
        imageUrl: Retail,
    },
];

const Industry = () => (
    <div className="mb-8">
        <h2 className="industry-heading">Industry</h2>
        <div className="industry-grid">
            {cardContents.map((content, index) => {
                return (
                    <div className={`${content.classname} industry-card`} key={index} >
                        <img
                            src={content.imageUrl}
                            alt={content.title}
                            className="industry-image"
                        />
                        {/* <div className="mt-4 w-full md:w-1/2 md:pl-4"> */}
                            <p className="text-white mb-2">{content.title}</p>
                            {/* <p className="text-gray-400 dark:text-gray-400">{description}</p> */}
                        {/* </div> */}
                    </div>
                );
            }
            )}
        </div>
    </div>
);

export default Industry;