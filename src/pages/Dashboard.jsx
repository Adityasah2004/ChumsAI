import { Helmet } from 'react-helmet';
import CompanionList from '../components/CompanionCard';

const Dashboard = () => {
    return (
        <div className="flex">
            <Helmet>
                <title>Dashboard | Chums AI</title>
                <meta name="description" content="Dashboard" />
            </Helmet>
            <CompanionList />
        </div>
    );
};

export default Dashboard;
