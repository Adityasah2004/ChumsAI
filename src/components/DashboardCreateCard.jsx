import '../styles/DashboardCreateCard.css';
import { Link } from 'react-router-dom';
import localStorageUtils from '../Hooks/localStorageUtils';
import aiPlaceholder from '../assets/AIplaceholder.png';

const userId = localStorageUtils.getUserId();

const DashboardCreateCard = () => {
    return (
        <Link to={`/companion-creation/${userId}`} className="create-comp-card flex flex-col border border-dashed h-full p-2 rounded-xl gap-2 justify-center">
            <div className='flex items-center justify-center relative'>
                {/* <span className="material-symbols-outlined text-gray-800" style={{fontSize: "200px"}}>
                    add_circle
                </span> */}
                <img className="create-comp-card-img" src={aiPlaceholder} alt="ai placeholder" />
            </div>
            <div>
                <h2 className="text-white text-xl mb-2 whitespace-normal lg:whitespace-nowrap">Create your custom companion</h2>
                <p className="text-gray-500 text-xs mt-2 mb-2 whitespace-normal lg:whitespace-nowrap">Click here to create your custom AI companion</p>
            </div>
        </Link>
    )
}

export default DashboardCreateCard;