import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <div className=" md:w-5/6 w-full m-auto ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
