import React from "react";

// component
import Header from "./Header";
import HeaderTop from "./HeaderTop";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full absolute items-start h-full ">
      <HeaderTop />
      <Header />
    </nav>
  );
};

export default Navbar;
