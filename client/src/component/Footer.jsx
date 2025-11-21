import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/image/favicon.png";

const Footer = () => {
  return (
    <footer className="bg-[#ffe5cc] text-black pt-12 pb-6 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo and About */}
        <div>
          {/* <h2 className="text-2xl font-bold text-[#ff9000] mb-2">
            NEXT CREATIX
          </h2> */}
          {/* <p className="text-sm ">Bhola 8300</p> */}
          <img src={logo} alt="foooter logo" className="w-[200px]" />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ff9000]">
            Quick Links
          </h3>
          <ul className="space-y-2text-sm">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/aboutus"}>
              <li>About Us</li>
            </Link>
            <Link to={"/services"}>
              <li>Service</li>
            </Link>
            <Link to={"/portfolio"}>
              <li>Portfolio</li>
            </Link>
            <Link to={"/tastimonials"}>
              <li>Tastimonials</li>
            </Link>
            <Link to={"/bloge"}>
              <li>Blog</li>
            </Link>
          </ul>
        </div>

        {/* Office Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ff9000]">
            Our Time
          </h3>
          <ul className="space-y-2  text-sm">
            <li>IT Agency Bangladesh </li>
            <li>Open-Close: 9.00 am -11.00 pm</li>
            <li>What'sapp: +880 177869980</li>
            <li>Work Email: nextcreatix@gmail.com</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ff9000]">
            Contact Us
          </h3>
          <ul className="space-y-2  text-sm mb-5">
            {/* <li>Full Address: Bapta Bhola 8300</li>
            <li className="ml-12">Bhola Barishal Bangladesh</li> */}
            <li>
              Phone: +880 177869980 <br />
            </li>
            <li className="ml-12"> +880 1300052218 </li>
            <li>Email: nextcreatix@gmail.com</li>
            <li className="ml-10">info@nextcreatix.com</li>
          </ul>

          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://www.facebook.com/nextcreatix"
              className="hover:text-[#ff9000] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/nextcreatix/#"
              className="hover:text-[#ff9000] transition"
            >
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#ff9000] transition">
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@nextcreatix"
              className="hover:text-[#ff9000] transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/nextcreatix"
              className="hover:text-[#ff9000] transition"
            >
              <FaTwitter />
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-400">Follow us</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © 2025 NEXT CREATIX. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
