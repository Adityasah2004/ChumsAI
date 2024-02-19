// AppRouter.jsx
// import React from "react";
import Head from "../components/Navbar";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/About";
import WhyUs from "../pages/WhyUs";
import Blogs from "../pages/Blogs";
import FAQ from "../components/FAQ";
import Down from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CompanionCreation from "../components/CompanionCreation";
import Settings from "../components/settings";
import Chat from "../components/Chat";
import Side from "../components/Sidebar";
import NotFound from "../pages/NotFound";
import { Helmet } from "react-helmet";

const AppRouter = () => {
    const location = useLocation();
    return (
        <div className="w-full h-full">
            {(location.pathname === "/dashboard" || location.pathname === "/chat" || location.pathname === "/settings" || location.pathname === "/companion-creation") ||  location.pathname === "*" ? null : <Head />}
            <Helmet>
                <title>Chums AI</title>
                <meta name="description" content="Chums AI" />
            </Helmet>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/whyus" component={WhyUs} />
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/sidebar" component={Side} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/companion-creation" component={CompanionCreation} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/chat" component={Chat} />
                {/* error page */}
                <Route path="*" component={NotFound} />
            </Switch>
            {(location.pathname === "/dashboard" || location.pathname === "/chat" || location.pathname === "/settings" || location.pathname === "/companion-creation" || location.pathname === "/about" || location.pathname === "/whyus" || location.pathname === "/" || location.pathname === "/blogs") ? null : <Chat />}
            {(location.pathname === "/dashboard" || location.pathname === "/chat" || location.pathname === "/companion-creation" || location.pathname === "/about" || location.pathname === "/whyus" || location.pathname === "/" || location.pathname === "/blogs") ? null : <Chat />}
            {(location.pathname === "/dashboard" || location.pathname === "/chat" || location.pathname === "/about" || location.pathname === "/whyus" || location.pathname === "/" || location.pathname === "/blogs") ? null : <Dashboard />}
            {(location.pathname === "/dashboard" || location.pathname === "/chat" || location.pathname === "/settings" || location.pathname === "/companion-creation" || location.pathname === "/about" || location.pathname === "/whyus" || location.pathname === "/blogs") ? null : <AboutPage />}
            {(location.pathname === "/dashboard" || location.pathname === "/chat" || location.pathname === "/settings" || location.pathname === "/companion-creation" || location.pathname === "/about" || location.pathname === "/whyus" || location.pathname === "/blogs") ? null : <WhyUs />}
            {(location.pathname === "/dashboard" || location.pathname === "/chat" || location.pathname === "/settings" || location.pathname === "/companion-creation" || location.pathname === "/about" || location.pathname === "/whyus" || location.pathname === "/blogs") ? null : <Blogs />}
            {(location.pathname === "/dashboard" || location.pathname === "/chat" || location.pathname === "/settings" || location.pathname === "/companion-creation" || location.pathname === "/about" || location.pathname === "/whyus" || location.pathname === "/blogs") ? null : <FAQ />}
            {(location.pathname === "/dashboard" || location.pathname === "/chat" || location.pathname === "/settings" || location.pathname === "/companion-creation" || location.pathname === "/about" || location.pathname === "/whyus" || location.pathname === "/blogs") ? null : <Down />}
        </div>
    );
};

export default AppRouter;
