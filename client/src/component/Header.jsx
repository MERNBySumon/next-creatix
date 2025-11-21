import React from "react";
import bgImage from "../assets/image/heroim.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="">
      <div
        className="relative flex items-center justify-start min-h-screen bg-cover bg-center px-4 sm:px-8 md:px-12"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="relative z-10 max-w-2xl text-left text-white space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-snug sm:leading-tight md:leading-tight font-extrabold">
            Your Vision, <br />
            <span className="text-[#ffb700]">
              Our Creative <span>Innovation</span>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200">
            We turn your ideas into stunning digital experiences, blending
            creativity with precise execution. From concept to completion, we
            craft solutions that inspire, engage, and elevate your brand. Every
            detail is shaped with passion, innovation, and a commitment to
            excellence.
          </p>
          <Link to={"/services"}>
            <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#ff9000] text-white font-semibold rounded-lg shadow-lg hover:bg-[#ff7a00] transition hover:text-black">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
