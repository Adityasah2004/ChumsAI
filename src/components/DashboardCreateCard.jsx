import '../styles/DashboardCreateCard.css';
import { Link } from 'react-router-dom';

const DashboardCreateCard = () => {
    return (
        <Link to={`/companion-creation`} className="create-comp-card flex flex-col border border-dashed h-auto p-2 rounded-xl">
            <div className='flex items-center justify-center relative'>
                <span className="material-symbols-outlined absolute text-white top-14">
                    add_circle
                </span>
                <img className="create-comp-card-img" src="../src/assets/AI avatar placeholder.png" alt="ai placeholder" />
            </div>
            <h2 className="text-white text-xl mb-2 whitespace-nowrap">Create your custom companion</h2>
            <p className="text-gray-500 text-xs mt-2 mb-2 whitespace-nowrap">Click here to create your custom AI companion</p>
        </Link>
    )
}

export default DashboardCreateCard;