import React from "react";

// component
import Header from "./Header";
import HeaderTop from "./HeaderTop";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full relative">
      <HeaderTop />
      <Header />
    </nav>
  );
};

export default Navbar;
