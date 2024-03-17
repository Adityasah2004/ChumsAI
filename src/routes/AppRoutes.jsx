import React from "react";
// import LandingPage from "../pages/LandingPage";
const LandingPage = React.lazy(() => import("../pages/LandingPage"));
// import Dashboard from "../pages/Dashboard";
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
// import Documentation from '../pages/Documentation';
const Documentation = React.lazy(() => import('../pages/Documentation'));
// import TermsConditions from "../pages/TermsConditions";
const TermsConditions = React.lazy(() => import("../pages/TermsConditions"));
// import PrivacyPolicy from "../pages/PrivacyPolicy";
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
// import CompanionCreation from "../pages/CompanionCreation";
const CompanionCreation = React.lazy(() => import("../pages/CompanionCreation"));
// import SendVerification from "../pages/SendVerification";
const SendVerification = React.lazy(() => import("../pages/SendVerification"));
// import Settings from "../pages/Settings";
const Settings = React.lazy(() => import("../pages/Settings"));
// import Chat from "../pages/Chat";
const Chat = React.lazy(() => import("../pages/Chat"));
// import Contact from "../pages/Contact";
const Contact = React.lazy(() => import("../pages/Contact"));
// import Login from "../pages/Login";
const Login = React.lazy(() => import("../pages/Login"));
// import Signup from "../pages/Signup";
const Signup = React.lazy(() => import("../pages/Signup"));
// import VerificationCode from "../pages/VerificationCode";
const VerificationCode = React.lazy(() => import("../pages/VerificationCode"));
// import AdminPanel from "../pages/AdminPanel";
const AdminPanel = React.lazy(() => import("../pages/AdminPanel"));
// import NotFound from "../pages/NotFound";
const NotFound = React.lazy(() => import("../pages/NotFound"));
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

const AppRouter = () => {

    return (
        <div className="w-full h-full">
            <Helmet>
                <title>Chums AI</title>
                <meta name="description" content="Chums AI" />
            </Helmet>
            <Switch>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={LandingPage} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/signup" component={Signup} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/verify-email" component={SendVerification} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/verification-code" component={VerificationCode} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/login" component={Login} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/admin" component={AdminPanel} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/dashboard/:id" component={Dashboard} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/companion-creation" component={CompanionCreation} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/settings/:id" component={Settings} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/chat/:id/:companion" component={Chat} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/contact" component={Contact} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/documentation" component={Documentation} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/terms" component={TermsConditions} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/privacy" component={PrivacyPolicy} />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route path="*" component={NotFound} />
                </React.Suspense>
            </Switch>
        </div>
    );
};

export default AppRouter;
