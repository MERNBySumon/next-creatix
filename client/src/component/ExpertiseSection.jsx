import React, { useEffect, useState } from "react";
import CardItemhero from "./CardItemhero";
import damoimg from "../assets/image/damoicon.png";
import {
  FaCode,
  FaPaintBrush,
  FaPenNib,
  FaBullhorn,
  FaSearch,
} from "react-icons/fa";

const ExpertiseSection = () => {
  const items = [
    { icon: FaCode, label: "Web Development" },
    { icon: FaPaintBrush, label: "Graphics Design" },
    { icon: FaPenNib, label: "Content Writing" },
    { icon: FaBullhorn, label: "Digital Marketing" },
    { icon: FaSearch, label: "SEO" },
  ];
  // ------------------------------------
  const [service, setservice] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setservice(data));
  }, []);
  // console.log(service);

  // ------------------------------------

  return (
    // <div>
    //   <h2 className="uppercase m-8 font-bold text-2xl text-black">
    //     our service
    //   </h2>
    //   <div className=" mx-6 flex flex-row lg:justify-between ">
    //     {service.map((item) => (
    //       <CardItemhero key={item.id} service={item} />
    //     ))}
    //   </div>
    // </div>
    // -----------------------------------------
    <div className="px-4 py-8">
      <h2 className=" text-4xl font-bold text-center mb-8  text-black">
        Our Service
      </h2>

      <div
        className="
      flex 
      flex-wrap 
      justify-center 
      gap-6
    "
      >
        {service.map((item) => (
          <div
            key={item.id}
            className="
          w-full 
          sm:w-[48%] 
          md:w-[31%] 
          lg:w-[22%] 
          xl:w-[12.5%]   /* বড় স্ক্রিনে ৭টা কার্ড এক লাইনে */
          flex 
          justify-center
        "
          >
            <CardItemhero service={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
