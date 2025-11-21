import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// সব আইকন ইমপোর্ট করো
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as SiIcons from "react-icons/si";

// --------------------------------------------------

const getIcon = (iconName) => {
  if (FaIcons[iconName]) return FaIcons[iconName];
  if (GiIcons[iconName]) return GiIcons[iconName];
  if (SiIcons[iconName]) return SiIcons[iconName];
  return null;
};

// --------------------------------------------------

export const ServicesDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setService(found);
      });
  }, [id]);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg font-medium">Loading...</p>
      </div>
    );
  }

  // আইকন স্ট্রিং থেকে কম্পোনেন্ট বের করো
  const IconComponent = getIcon(service.icon);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-5">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <div className="flex justify-center mb-5">
          {IconComponent && (
            <IconComponent className="text-[#ff9900] text-6xl" />
          )}
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {service.title}
        </h1>

        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          {service.desc.map((item, index) => (
            <li
              key={index}
              className="hover:text-[#ff9900] transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* 🟧 Contact Button */}
        <div className="flex justify-center">
          <Link to={"/contactus"}>
            <button className="bg-[#ff9900] text-white hover:text-black  font-semibold px-6 py-2 rounded-lg transition-all duration-200">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
