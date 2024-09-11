import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TechCardProps {
  title: string;
  content: string;
  icon?: IconDefinition;
}

const TechCard = ({ title, content, icon }: TechCardProps) => {
  return (
    <div className="w-1/4 min-w-[270px] min-h-[200px] p-4 bg-white border border-gray-200 rounded-lg shadow-xs hover:shadow-lg overflow-hidden text-center">
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="h-[60px] mx-auto mb-4 gradient-text"
        />
      )}
      <div className="flex-1 overflow-hidden">
        <h2 className="text-md font-semibold mb-2">{title}</h2>
        <p className="text-slate-500 text-sm line-clamp-4">{content}</p>
      </div>
    </div>
  );
};

export default TechCard;
