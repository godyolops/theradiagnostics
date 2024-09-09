import React, { useEffect, useState } from "react";

// router
import { Link, useLocation } from "react-router-dom";

// image
import LogoImg from "../assets/navbar/mainlogo.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the current location

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50); // Adjust this value to control when the header changes
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the link is active
  const isActive = (path: string) => {
    return location.pathname === path ? "activeLinkBorder" : ""; // Add active class
  };

  return (
    <div
      className={`w-full sticky top-0 z-50 py-3.5 transform transition-all duration-700 ease-in-out ${
        scrolled ? "bg-[#F9F9FD] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-6xl px-3">
        <div className="flex">
          <img src={LogoImg} alt="" height={55} width={228} />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className={`text-xs font-bold text-slate-700 py-1.5 px-2.5 ${isActive(
              "/"
            )}`}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={`text-xs font-bold text-slate-700 py-1.5 px-2.5 ${isActive(
              "/about"
            )}`}
          >
            ABOUT
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
