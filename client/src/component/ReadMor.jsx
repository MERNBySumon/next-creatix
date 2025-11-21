import React from "react";
import heromig from "../assets/image/readmor.jpg";
import { Link } from "react-router-dom";

export const ReadMor = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative text-center py-20 px-4"
        style={{
          backgroundImage: `url(${heromig})`, // এখানে তোমার ইমেজ URL বসাও
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What I Do
          </h1>
          <p className="text-xl md:text-[18px] text-white">
            we will offer a diverse range of creative and technical solutions
            designed to meet modern digital needs, helping individuals and
            businesses achieve their goals with quality, efficiency, and
            innovation.
          </p>

          <div className="mt-8">
            <Link to={"/contactus"}>
              <p className="btn bg-[#ff9000] text-amber-50 border-none shadow-none hover:text-black">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {/* 1 */}
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-700">
              Web Development
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Frontend Development (HTML, CSS, JavaScript)</li>
              <li>Backend & Database</li>
              <li>Fullstack Web Apps</li>
              <li>Performance & Security</li>
              <li>CMS & API Integration</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-pink-700">
              Graphic Design
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Book cover design</li>
              <li>Packaging & Label Design</li>
              <li>Social Media Graphics</li>
              <li>Mockups Packaging/Brand identity/Product</li>
              <li>Photo Editing</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-orange-700">
              Digital Marketing
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>SEO & Content Marketing</li>
              <li>Social Media Marketing</li>
              <li>PPC Advertising</li>
              <li>Email & Affiliate Marketing</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-700">
              Writing & Translation
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Book Writing & Formatting</li>
              <li>Content & Blog Writing</li>
              <li>Grammar and spelling checks</li>
              <li>Case studies</li>
              <li>Scriptwriting</li>
              {/* <li>Website / App Translation</li> */}
              {/* <li>Subtitle & Dubbing</li> */}
            </ul>
          </div>

          {/* 5 */}
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-700">
              AI Services
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>AI Image & Video Editing</li>
              <li>Text to Speech</li>
              <li>Video & Animation</li>
              <li>Voice Over</li>
              <li>Content Generation</li>
            </ul>
          </div>

          {/* 6 */}

          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-red-700">
              Video & Animation
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Video Editing</li>
              <li>2D/3D Animation</li>
              <li>Motion Graphics</li>
              <li>Video Planning</li>
              <li>Rendering & Formatting</li>
            </ul>
          </div>

          {/* 7 */}
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-green-700">
              Software & Apps
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>UI/UX Design</li>
              <li>App Development</li>
              <li>Testing & Deployment</li>
              <li>Maintenance & Updates</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
