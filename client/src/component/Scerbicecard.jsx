import React from "react";

import { Link } from "react-router";

import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as SiIcons from "react-icons/si";

const getIcon = (iconName) => {
  if (FaIcons[iconName]) return FaIcons[iconName];
  if (GiIcons[iconName]) return GiIcons[iconName];
  if (SiIcons[iconName]) return SiIcons[iconName];
  return null;
};

const Scerbicecard = ({ service }) => {
  const { icon, title, desc } = service;
  const Icon = getIcon(icon);
  //   console.log(service.icon);
  return (
    <div>
      {/* <Link to={`/servicedetals/${id}`}> */}
      <section>
        <div className="bg-[#ffe5cc] text-black flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl shadow hover:shadow-md transition min-h-[150px] mx-4 my-4 break-words">
          <div className="text-3xl text-[#ff9000] flex-shrink-0">
            {Icon && <Icon />}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#ff9000]">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{desc}</p>
          </div>
        </div>
      </section>
      {/* </Link> */}
    </div>

    // -------------------------------
  );
};

export default Scerbicecard;
