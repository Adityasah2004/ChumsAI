import '../styles/Potential.css';
import potentialImg from '../assets/landing.png';

const potentialContents = [
    {
        item: "Empatheic AI Platform"
    },
    {
        item: "Generative AI powered Virtual Avatars"
    },
    {
        item: "Allows API Integration"
    },
    {
        item: "Social Platform Integration"
    }
]

const Potential = () => {
    return (
        <section className='flex flex-col items-center py-10'>
            <p className='potential-heading'>Potential Growth</p>
            <div className='potential-div'>
                <ul className='flex flex-col gap-3 w-auto'>
                    {
                        potentialContents.map((content, index) => {
                            return (
                                <div key={index} className="item flex text-white items-center" data-aos="fade-right">
                                    <img src="./v1.svg" alt="list bullet" className='bullet'/>
                                    <li className=''>
                                        {content.item}
                                    </li>
                                </div>
                            );
                        })
                    }
                </ul>
                <div className='potential-img-div'>
                    <img src="./ellipse.png" alt="" className='ellipse absolute left-0 bottom-0 -z-10' />
                    <img src={potentialImg} alt="" className='avatars-img'/>
                </div>
            </div>
        </section>
    );
};

export default Potential;
