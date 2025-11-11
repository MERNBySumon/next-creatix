import React from "react";
import { motion } from "framer-motion";
import damoimg from "../assets/image/damoicon.png";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as SiIcons from "react-icons/si";

const getIcon = (iconName) => {
  if (FaIcons[iconName]) return FaIcons[iconName];
  if (GiIcons[iconName]) return GiIcons[iconName];
  if (SiIcons[iconName]) return SiIcons[iconName];
  return null;
};

const CardItemhero = ({ service }) => {
  const { id, title, icon } = service;
  console.log(id);

  const Icon = getIcon(icon);

  return (
    <div className="m-3 w-[300px] rounded-2xl">
      <div className="bg-[#ffe5cc] mx-auto text-center rounded-2xl">
        <div className="text-3xl w-full flex justify-center text-[#ff9000] pt-4">
          {Icon && <Icon />}
        </div>
        <p className="my-6">{title}</p>
        <div className="w-12 h-1 bg-[#ff9000] mx-auto" />
      </div>
    </div>
    // ---------------------------
  );
};

export default CardItemhero;
