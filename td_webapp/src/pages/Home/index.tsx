import React from "react";

// image
import BannerBg from "../../assets/home/banner-bg.jpg";
import ServicesSection from "../../common/Services/ServicesSection";
import ProfilesSection from "../../common/Profiles/ProfilesSection";

const Home: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full items-start top-14 mb-14">
        <div className="relative w-full overflow-hidden">
          <img
            src={BannerBg}
            alt=""
            className="inset-0 w-full object-cover max-h-128 h-128 scale-105 z-0"
          />
          <div className="z-10 absolute top-1/3 w-full">
            <div className="container mx-auto max-w-6xl px-3">
              <div className="text-base font-normal mb-2">
                Caring for better life
              </div>
              <div className="text-5xl font-bold mb-2 text-gray-800">
                Leading the way in <br /> medical excellence
              </div>
              <div className="text-slate-500 mb-4">
                Earth greater grass for good. Place for divide evening yielding{" "}
                <br /> them that. Creeping beginning over gathered brought.
              </div>
              <button
                onClick={() =>
                  window.open("https://forms.gle/FzqSrYHrNs8JgvQP6")
                }
                className="tracking-widest bg-gradient-to-r from-blue-500 to-green-500 text-white mt-4 text-sm py-3 px-8 font-bold"
              >
                Be a Member
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-14">
        <div className="text-6xl font-medium pb-14">Services</div>
        <div className="flex gap-4 justify-between">
          <ServicesSection />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-14">
        <div className="text-6xl font-medium pb-14">Company Profile</div>
        <div className="flex gap-4 justify-between">
          <ProfilesSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
