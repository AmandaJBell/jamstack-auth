import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";

import "./layout.css";

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://jamstack-auth-netlify-amanda.netlify.app">
    <header>
      <Link to="/">JAMStack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
