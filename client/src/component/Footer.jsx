import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ffe5cc] text-black pt-12 pb-6 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-[#ff9000] mb-2">
            NEXT CREATIX
          </h2>
          <p className="text-sm ">Togins Goesine</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ff9000]">
            Quick Links
          </h3>
          <ul className="space-y-2text-sm">
            <li>Next Services</li>
            <li>Notorem dilutucne</li>
            <li>Cuote Affairs</li>
            <li>Rommy cinpromktem</li>
            <li>Neeney Nett Coonege</li>
            <li>Urotskit</li>
          </ul>
        </div>

        {/* Office Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ff9000]">
            Our Time
          </h3>
          <ul className="space-y-2  text-sm">
            <li>Accommodation Store</li>
            <li>Tel: 239 7232</li>
            <li>Email: creatixsite.com</li>
            <li>Inmloie Hum</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ff9000]">
            Contact Us
          </h3>
          <ul className="space-y-2  text-sm mb-5">
            <li>Full Address</li>
            <li>Phone: +90 123 9686 60</li>
            <li>Working: 10:30–11:05am</li>
          </ul>

          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-[#ff9000] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#ff9000] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#ff9000] transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-[#ff9000] transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#ff9000] transition">
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
