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
    <div className="container mx-auto flex justify-between items-center max-w-6xl px-3 py-14">
      <div className="flex justify-between gap-x-4">
        <ServiceCard
          title="ADVANCE TECHNOLOGY"
          content="Creeping for female light years that lesser can't evening heaven isn't bearing tree appearCreeping for female light years that lesser can't evening heaven isn't bearing tree appear"
          icon={faMicrochip}
        />
        <ServiceCard
          title="COMFORTABLE PLACE"
          content="Creeping for female light years that lesser can't evening heaven isn't bearing tree appear"
          icon={faHouseChimneyMedical}
        />
        <ServiceCard
          title="QUALITY EQUIPMENT"
          content="Creeping for female light years that lesser can't evening heaven isn't bearing tree appear"
          icon={faKitMedical}
        />
        <ServiceCard
          title="FRIENDLY STAFF"
          content="Creeping for female light years that lesser can't evening heaven isn't bearing tree appear"
          icon={faUserGroup}
        />
      </div>
    </div>
  );
};

export default TechnologySection;
