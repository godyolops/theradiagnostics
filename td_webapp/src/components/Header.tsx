import React, { useState } from "react";

// router
import { Link } from "react-router-dom";

// image
import LogoImg from "../assets/navbar/logo-img.png";
import LogoName from "../assets/navbar/logo-name.png";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="w-full sticky top-10 z-50 my-3.5 bg-transparent">
            <div className="container mx-auto flex justify-between items-center max-w-6xl px-3">
                <div className="flex">
                <img src={LogoImg} alt="" height={32} width={30} />
                <img src={LogoName} alt="" height={41} width={250} />
                </div>
                <div className="hidden md:flex space-x-4">
                <Link to="/" className="text-xs font-sans font-medium text-slate-700 py-1.5 px-2.5">HOME</Link>
                <Link to="/about" className="text-xs font-sans font-medium text-slate-700 py-1.5 px-2.5">ABOUT</Link>
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
}

export default Header;
