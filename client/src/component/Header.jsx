import React from "react";
import bgImage from "../assets/image/heroim.jpg";
import PriceCard from "./PriceCard";

// ------------------------------
import heroImg from "../assets/image/backgroundImg.jpg"; // তোমার হিরো ইমেজ বসাও
import aboutImg from "../assets/image/backgroundImg.jpg";
import partner1 from "../assets/image/backgroundImg.jpg";
import partner2 from "../assets/image/backgroundImg.jpg";
import partner3 from "../assets/image/backgroundImg.jpg";

const Header = () => {
  return (
    <div className="">
      {/* --------------------------------- */}
      <div
        className="relative flex items-center justify-start min-h-screen bg-cover bg-center px-4 sm:px-8 md:px-12"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001133]/90 via-[#001133]/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-left text-white space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-snug sm:leading-tight md:leading-tight font-extrabold">
            Your Vision, <br />
            <span className="text-[#ffb700]">Our Creative Innovation</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200">
            We turn your ideas into stunning digital experiences with creativity
            and precision.
          </p>

          <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#ff9000] text-white font-semibold rounded-lg shadow-lg hover:bg-[#ff7a00] transition">
            Get Started
          </button>
        </div>
      </div>
      <PriceCard></PriceCard>
    </div>
  );
};

export default Header;
