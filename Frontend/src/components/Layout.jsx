import React from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar/NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
