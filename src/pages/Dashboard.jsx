import { Helmet } from 'react-helmet';
import {lazy, Suspense} from 'react';
// import CompanionList from '../components/CompanionCard';
const CompanionList = lazy(() => import('../components/CompanionCard'));

const Dashboard = () => {
    return (
        <div className="flex">
            <Helmet>
                <title>Dashboard | Chums AI</title>
                <meta name="description" content="Dashboard" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
            <CompanionList />
            </Suspense>
        </div>
    );
};

export default Dashboard;
