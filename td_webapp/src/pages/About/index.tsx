import React from "react";

// image
import BannerBg from "../../assets/home/banner-bg.jpg";
import AboutUsDoctor from "../../assets/about/aboutus-doctor.png";

const About: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full max-h-96 h-96 -top-14">
        <div className="absolute w-full max-h-screen">
            <div className="relative w-full h-screen overflow-hidden">
              <img src={BannerBg} alt="" className="absolute inset-0 w-full h-2/4 object-cover scale-105 z-0"/>
              <div className="z-10 absolute top-1/4 w-full">
                <div className="container mx-auto max-w-6xl px-3">
                  <div className="text-5xl font-bold mb-2 text-gray-800">About Us</div>
                  <div className="text-slate-500 mb-4">Home | About Us</div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="relative w-full">
        <div className="container mx-auto flex row-auto items-center max-w-6xl px-3 pb-32 pt-16">
          <div className="z-50">
            <img src={AboutUsDoctor} alt="" className="z-50"/>
          </div>
          <div className="z-40 p-28 -ml-10 border-8 border-gray-100">
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
            yielding over lights whose. Cattle greater brought sixth fly den <br />
            dry good tree isn't seed stars were.
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white mt-4 text-sm py-3 px-11">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
