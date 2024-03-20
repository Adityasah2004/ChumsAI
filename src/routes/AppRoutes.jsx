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
            <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/verify-email" component={SendVerification} />
                    <Route exact path="/verification-code" component={VerificationCode} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/admin" component={AdminPanel} />
                    <Route exact path="/dashboard/:id" component={Dashboard} />
                    <Route exact path="/companion-creation/:id" component={CompanionCreation} />
                    <Route exact path="/settings/:id" component={Settings} />
                    <Route exact path="/chat/:id/:companion" component={Chat} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/documentation" component={Documentation} />
                    <Route exact path="/terms" component={TermsConditions} />
                    <Route exact path="/privacy" component={PrivacyPolicy} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </React.Suspense>
        </div>
    );
};

export default AppRouter;
