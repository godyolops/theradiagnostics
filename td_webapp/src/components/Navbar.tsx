import React, { useState } from "react";
import { Link } from "react-router-dom";
import TestLogo from "../testlogo.png";
import TestLogo2 from "../testlogo2.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex text-white text-lg font-bold">
          <img src={TestLogo} alt="" height={40} width={40} />
          <img src={TestLogo2} alt="" height={40} width={500} />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link
            // sample url only
            to="https://www.google.com"
            target="_blank"
          >
            Button 1
          </Link>
          <Link
            // sample url only
            to="https://www.youtube.com"
            target="_blank"
          >
            Button 2
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link
              // sample url only
              to="https://www.google.com"
              target="_blank"
              onClick={toggleMenu}
            >
              Button 1
            </Link>
            <Link
              // sample url only
              to="https://www.youtube.com"
              target="_blank"
              onClick={toggleMenu}
            >
              Button 2
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
