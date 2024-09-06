import React from "react";

// images
import facebookIcon from "../assets/navbar-top/facebook-icon.png";
import instagramIcon from "../assets/navbar-top/instagram-icon.png";
import linkedinIcon from "../assets/navbar-top/linkedin-icon.png";
import twitterIcon from "../assets/navbar-top/twitter-icon.png";

const HeaderTop: React.FC = () => {
    return (
        <div className="z-1 top-0 left-0 py-3.5 bg-white w-full">
            <div className="container mx-auto max-w-6xl px-3">
            <div className="flex flex-wrap justify-between text-center">
                    <div className="flex">
                        <div className="mr-4 text-slate-500 text-xs font-sans font-medium mt-1.5 b-2">
                            CALL US NOW! +639123456789
                        </div>
                        <div className="mr-4 text-slate-500 text-xs font-sans font-medium mt-1.5 b-2">
                            MEDICAL@EXAMPLE.COM
                        </div>
                        <div className="text-slate-500 text-xs font-sans font-medium mt-1.5 b-2">
                            FIND OUT LOCATION
                        </div>
                    </div>
                    <div className="flex">
                        <img src={facebookIcon} alt="" height={2} width={12} className="mr-4 mt-1.5 b-2 grayscale-50"/>
                        <img src={instagramIcon} alt="" height={1} width={12} className="mr-4 mt-1.5 b-2"/>
                        <img src={linkedinIcon} alt="" height={1} width={12} className="mr-4 mt-1.5 b-2"/>
                        <img src={twitterIcon} alt="" height={1} width={12} className="mt-1.5 b-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
