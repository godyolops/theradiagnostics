import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProfileCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  fbUrl?: string;
  instaUrl?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
}

const ProfileCard = ({
  name,
  role,
  description,
  imageUrl,
}: ProfileCardProps) => {
  return (
    <div className="group w-1/4 min-h-[320px] bg-white border border-gray-200 rounded-lg shadow-xs hover:shadow-md overflow-hidden text-center flex flex-col">
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="w-full object-cover" // Ensure the image fills the card width and has a fixed height
        />
      )}
      <div className="flex-grow">
        <div className="group-hover:bg-gradient-to-r from-blue-500 to-green-500 p-4 bg-[#F9F9FD]">
          <div className="font-bold text-md">{name}</div>
          <div className="font-bold text-slate-500 text-sm">{role}</div>
        </div>
        <div className="text-slate-500 text-sm line-clamp-4 p-4">
          {description}
        </div>
        <div className="flex gap-4 justify-center p-4">
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
  );
};

export default ProfileCard;
