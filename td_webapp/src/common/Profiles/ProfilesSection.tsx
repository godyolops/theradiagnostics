import React from "react";
import ProfileCard from "./ProfileCard";
import DoctorLogo1 from "../../assets/doctor1.jpg";
import DoctorLogo2 from "../../assets/doctor2.jpg";
import DoctorLogo4 from "../../assets/doctor4.jpg";

const ProfilesSection = () => {
  return (
    <div className="container mx-auto flex justify-between items-center max-w-6xl px-3">
      <div className="flex justify-between gap-x-4">
        <ProfileCard
          name="Kieran Ross Marcelinus B. Coste"
          role="President"
          description="Creeping for female light years that lesser can't evening heaven isn't bearing tree appearCreeping for female light years that lesser can't evening heaven isn't bearing tree appear"
          imageUrl={DoctorLogo1}
        />
        <ProfileCard
          name="Peter Sly A. Alerta"
          role="Sales and Marketing Director"
          description="Creeping for female light years that lesser can't evening heaven isn't bearing tree appearCreeping for female light years that lesser can't evening heaven isn't bearing tree appear"
          imageUrl={DoctorLogo2}
        />
        <ProfileCard
          name="Michael David C. Gu"
          role="Clinic Operations Director"
          description="Creeping for female light years that lesser can't evening heaven isn't bearing tree appearCreeping for female light years that lesser can't evening heaven isn't bearing tree appear"
          imageUrl={DoctorLogo4}
        />
      </div>
    </div>
  );
};

export default ProfilesSection;
