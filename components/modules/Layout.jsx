import React from "react";
import Footer from "../templates/Footer";
import Navbar from "../templates/Navbar";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
