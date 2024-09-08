import React from "react";

// images
import facebookIcon from "../assets/navbar-top/facebook-icon.png";
import instagramIcon from "../assets/navbar-top/instagram-icon.png";
import linkedinIcon from "../assets/navbar-top/linkedin-icon.png";
import twitterIcon from "../assets/navbar-top/twitter-icon.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 max-h-64 h-20 place-content-center z-50">
            <div className="container mx-auto max-w-6xl px-3 flex justify-between">
                <div className="text-white place-content-center">
                    Copyright ©2024 All rights reserved | This template is made with  by Colorlib
                </div>
                <div className="flex">
                    <div className="p-2.5 bg-white mr-4 mt-1.5 b-2 hover:bg-gradient-to-r from-blue-500 to-green-500">
                     <img src={facebookIcon} alt="" height={1} width={12} className="hover:fill-white"/>
                    </div>
                    <div className="p-2.5 bg-white mr-4 mt-1.5 b-2 hover:bg-gradient-to-r from-blue-500 to-green-500">
                        <img src={instagramIcon} alt="" height={1} width={12} className=""/>
                    </div>
                    <div className="p-2.5  bg-white mr-4 mt-1.5 b-2 hover:bg-gradient-to-r from-blue-500 to-green-500">
                        <img src={linkedinIcon} alt="" height={1} width={12} className=""/>
                    </div>
                    <div className="p-2.5 bg-white mr-4 mt-1.5 b-2 hover:bg-gradient-to-r from-blue-500 to-green-500">
                        <img src={twitterIcon} alt="" height={1} width={12} className=""/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
