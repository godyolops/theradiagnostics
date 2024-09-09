import React from "react";

// component
import SpecialistComponent from "../../common/Specialist/SpecialistComponent";

// image
import BannerBg from "../../assets/home/banner-bg.jpg";
import AboutUsDoctor from "../../assets/about/aboutus-doctor.png";

const About: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full top-14 items-start mb-14">
        <div className="relative w-full overflow-hidden">
          <img
            src={BannerBg}
            alt=""
            className="inset-0 w-full object-cover max-h-96 h-96 scale-105 z-0"
          />
          <div className="z-10 absolute top-1/2 w-full">
            <div className="container mx-auto max-w-6xl px-3 py-6">
              <div className="text-5xl font-bold mb-2 text-gray-800">
                About Us
              </div>
              <div className="text-slate-500 mb-4">Home | About Us</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container mx-auto flex row-auto items-center max-w-6xl px-3 pb-32 pt-16">
          <div className="z-10">
            <img src={AboutUsDoctor} alt="" className="z-50" />
          </div>
          <div className="p-28 -ml-10 border-8 border-gray-100">
            <div className="text-4xl font-bold mb-2 text-gray-800">
              Welcome to our clinic
            </div>
            <div className="text-slate-500 mb-4 pt-4 text-sm">
              Subdue whales void god which living don't midst lesser <br />
              yielding over lights whose. Cattle greater brought sixth fly den
              dry good tree isn't seed stars were.
            </div>
            <div className="text-slate-500 mb-4 text-sm">
              Subdue whales void god which living don't midst lesser <br />
              yielding over lights whose. Cattle greater brought sixth fly den{" "}
              <br />
              dry good tree isn't seed stars were.
            </div>
            <button className="tracking-widest bg-gradient-to-r from-blue-500 to-green-500 text-white mt-4 text-sm py-3 px-8 font-bold">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mb-28">
        <div className="my-10 flex flex-col items-center justify-center">
          <div className="mb-40 text-6xl font-medium">Our Specialist</div>
          <SpecialistComponent doctor="doctor1" />
          <SpecialistComponent doctor="doctor2" />
          <SpecialistComponent doctor="doctor1" />
        </div>
      </div>
    </div>
  );
};

export default About;
