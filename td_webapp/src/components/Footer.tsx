import React from "react";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 max-h-64 h-20 place-content-center z-50">
      <div className="container mx-auto max-w-6xl px-3 flex justify-between">
        <div className="text-white place-content-center">
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </div>
        <div className="flex gap-x-3">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-slate-500 cursor-pointer p-2.5 bg-white hover:bg-gradient-to-r from-blue-500 to-green-500"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-slate-500 cursor-pointer p-2.5  bg-white hover:bg-gradient-to-r from-blue-500 to-green-500"
          />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-slate-500 cursor-pointer p-2.5  bg-white hover:bg-gradient-to-r from-blue-500 to-green-500"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-slate-500 cursor-pointer p-2.5  bg-white hover:bg-gradient-to-r from-blue-500 to-green-500"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
