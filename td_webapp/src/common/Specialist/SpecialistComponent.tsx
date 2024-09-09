import React from "react";

// image
import doctor1 from "../../assets/about/doctor1.png";
import doctor2 from "../../assets/about/doctor2.png";

interface SpecialistComponentProps {
  doctor?: string;
}

const SpecialistComponent: React.FC<SpecialistComponentProps> = ({
  doctor,
}: SpecialistComponentProps) => {
  return (
    <div className="mb-6 mt-[90px] pt-10 pr-20 pb-5 pl-10 bg-gray-50 items-start w-[500px]">
      <img
        src={doctor === "doctor1" ? doctor1 : doctor2}
        alt=""
        className="mb-6 -mt-[90px]"
      />
      <div className="font-semibold text-lg mb-2">
        {doctor === "doctor1" ? "DAREN JHONSON" : "BLACK HEIDEN"}
      </div>
      <div className="mb-2 text-sm font-normal text-gray-500">
        Hp Specialist
      </div>
      <div className="mb-4 pt-4 font-normal text-[15px] text-gray-500">
        Elementum libero hac leo integer. Risus hac road
        <br />
        parturient feugiat. Litora cursus hendrerit bib elit
        <br />
        Tempus inceptos posuere metus.
      </div>
    </div>
  );
};

export default SpecialistComponent;
