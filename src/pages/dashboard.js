import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import IdentityModal from "react-netlify-identity-widget";
import Layout from "../components/layout";
import Profile from "../components/profile";
import PrivateRoute from "../components/private-route";
import RouteBase from "../components/route-base";
import RouteLogin from "../components/route-login";
import RouteSecret from "../components/route-secret";
import { navigate } from "gatsby";

import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({ location }) => {
  const [ isVisible, setVisability ] = useState(false)

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  const showModal = () => setVisability(!isVisible);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <RouteBase path="/dashboard/base" />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin showModal={showModal} path="/dashboard/login" />
      </Router>
      <IdentityModal showDialog={isVisible} onCloseDialog={showModal} />
    </Layout>
  );
};

export default Dashboard;
