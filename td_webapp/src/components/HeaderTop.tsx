import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Outlined version
import {
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const HeaderTop: React.FC = () => {
  return (
    <div className="z-1 top-0 left-0 py-3.5 bg-white w-full">
      <div className="container mx-auto max-w-6xl px-3">
        <div className="flex flex-wrap justify-between text-center">
          <div className="flex gap-x-3">
            <div className="flex justify-center items-center gap-x-2 text-slate-500">
              <div>
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </div>
              <div className="text-xs font-medium">
                CALL US NOW! +639123456789
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-2 text-slate-500">
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text-xs font-medium">
                theradiagnostics@gmail.com
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-2 text-slate-500">
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="text-xs font-medium">FIND OUR LOCATION</div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div>
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-slate-500 cursor-pointer"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-slate-500 cursor-pointer"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-slate-500 cursor-pointer"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-slate-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
