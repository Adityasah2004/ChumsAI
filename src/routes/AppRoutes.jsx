import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Documentation from '../pages/Documentation';
import TermsConditions from "../pages/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import { Switch, Route } from "react-router-dom";
import CompanionCreation from "../pages/CompanionCreation";
import SendVerification from "../pages/SendVerification";
import Settings from "../pages/Settings";
import Chat from "../pages/Chat";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import { Helmet } from "react-helmet";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import VerificationCode from "../pages/VerificationCode";
import AdminPanel from "../pages/AdminPanel";

const AppRouter = () => {

    return (
        <div className="w-full h-full">
            <Helmet>
                <title>Chums AI</title>
                <meta name="description" content="Chums AI" />
            </Helmet>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/verify-email" component={SendVerification} />
                <Route exact path="/verification-code" component={VerificationCode} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/admin" component={AdminPanel} />
                <Route exact path="/dashboard/:id" component={Dashboard} />
                <Route exact path="/companion-creation" component={CompanionCreation} />
                <Route exact path="/settings/:id" component={Settings} />
                <Route exact path="/chat/:id/:companion" component={Chat} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/documentation" component={Documentation} />
                <Route exact path="/terms" component={TermsConditions} />
                <Route exact path="/privacy" component={PrivacyPolicy} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
};

export default AppRouter;
