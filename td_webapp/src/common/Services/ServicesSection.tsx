import ServiceCard from "./ServiceCard";
import {
  faHouseChimneyMedical,
  faKitMedical,
  faMicrochip,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

const TechnologySection = () => {
  return (
    <div className="container mx-auto flex justify-between items-center max-w-6xl px-3">
      <div className="flex justify-between gap-x-4">
        <ServiceCard title="ADVANCE TECHNOLOGY" content="" icon={faMicrochip} />
        <ServiceCard
          title="COMFORTABLE PLACE"
          content=""
          icon={faHouseChimneyMedical}
        />
        <ServiceCard title="QUALITY EQUIPMENT" content="" icon={faKitMedical} />
        <ServiceCard title="FRIENDLY STAFF" content="" icon={faUserGroup} />
      </div>
    </div>
  );
};

export default TechnologySection;
