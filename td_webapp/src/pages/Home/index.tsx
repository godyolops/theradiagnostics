import React from "react";

// image
import BannerBg from "../../assets/home/banner-bg.jpg";

const Home: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-[675px] -top-14">
        <div className="absolute w-full h-full">
          <div className="relative w-full h-screen overflow-hidden">
            <img src={BannerBg} alt="" className="absolute inset-0 w-full h-full object-cover scale-125 z-0"/>
            <div className="z-10 absolute top-2/4 w-full">
              <div className="container mx-auto max-w-6xl px-3">
                <div className="text-base font-sans font-normal mb-2">Caring for better life</div>
                <div className="text-5xl font-bold mb-2 text-gray-800">Leading the way in <br /> medical excellence</div>
                <div className="text-slate-500 mb-4">Earth greater grass for good. Place for divide evening yielding <br /> them that. Creeping beginning over gathered brought.</div>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white mt-4 text-sm py-3 px-11">
                  BUY NOW!
                </button>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
