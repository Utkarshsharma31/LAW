import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";


/* Inner Pages */
import Profile from "pages/Profile";
import Resetpassword from "pages/ResetPassword";
import LoginPage from "pages/Login.js";
import Dashboard from "pages/Dashboard.js";
import VendorDashboard from "pages/VendorDashboard.js";
import SignupPage from "pages/Signup.js";
import Auser from "pages/AttUser.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

import ComponentRenderer from "ComponentRenderer.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
         <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
          
        </Route>
        <Route path="/TermsOfServicePage">
          <TermsOfServicePage />
        </Route>
        <Route path="/LoginPage">
          <LoginPage />
        </Route>
        <Route path="/SignupPage">
          <SignupPage />
        </Route>
        {/* <Route path="/AboutUsPage">
        <AboutUsPage />
        </Route> */}
        <Route path="/Auser">
        <Auser />
        </Route>
        <Route path="/PrivacyPolicyPage">
          <PrivacyPolicyPage />
        </Route>
        <Route path="/ContactUsPage">
          <ContactUsPage />
        </Route>
        <Route path="/BlogIndexPage">
          <BlogIndexPage />
        </Route>
        <Route path="/Resetpassword">
        <Resetpassword />
        </Route>
        <Route path="/Profile">
        <Profile />
        </Route>
        <Route path="/AboutUsPage">
        <VendorDashboard />
        </Route>
        <Route path="/">
          <SaaSProductLandingPage />
        </Route>

      </Switch>
    </Router>
  );
}


