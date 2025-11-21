// import React from "react";
// import {
//   FaRegLightbulb,
//   FaSearch,
//   FaRegEdit,
//   FaCog,
//   FaGift,
//   FaHeadset,
// } from "react-icons/fa";

// export const WorkProcess = () => {
//   const steps = [
//     {
//       id: 1,
//       title: "Understanding Instruction",
//       icon: <FaRegLightbulb size={20} />,
//     },
//     { id: 2, title: "Analysis & Research", icon: <FaSearch size={20} /> },
//     { id: 3, title: "Plan & Making Concepts", icon: <FaRegEdit size={20} /> },
//     { id: 4, title: "Start Working", icon: <FaCog size={20} /> },
//     { id: 5, title: "Recheck", icon: <FaGift size={20} /> },
//     { id: 6, title: "Deliver", icon: <FaGift size={20} /> },
//     { id: 7, title: "Support", icon: <FaHeadset size={20} /> },
//   ];

//   return (
//     <div className="w-full py-6">
//       <div className="max-w-7xl mx-auto px-2">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Our Working Process
//         </h2>

//         {/* Responsive Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 justify-items-center">
//           {steps.map(({ id, title, icon }) => (
//             <div
//               key={id}
//               className="w-28 rounded-xl shadow-sm hover:shadow-md transition"
//             >
//               <div className="bg-[#ffe5cc] text-center rounded-xl py-3 px-2">
//                 <div className="text-2xl text-[#ff9000] mb-2 flex justify-center">
//                   {icon}
//                 </div>
//                 <p className="text-xs font-medium">{title}</p>
//                 <div className="w-10 h-0.5 bg-[#ff9000] mx-auto rounded mt-1" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import {
  FaRegLightbulb,
  FaSearch,
  FaRegEdit,
  FaCog,
  FaGift,
  FaHeadset,
  FaHandHoldingHeart,
} from "react-icons/fa";

export const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Understanding Instruction",
      icon: <FaRegLightbulb size={18} />,
    },
    { id: 2, title: "Analysis & Research", icon: <FaSearch size={25} /> },
    { id: 3, title: "Plan & Making Concepts", icon: <FaRegEdit size={25} /> },
    { id: 4, title: "Start Working", icon: <FaCog size={25} /> },
    { id: 5, title: "Recheck", icon: <FaGift size={25} /> },
    { id: 6, title: "Deliver", icon: <FaHandHoldingHeart size={25} /> },
    { id: 7, title: "Support", icon: <FaHeadset size={25} /> },
  ];

  return (
    <div className="w-full ">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl font-bold text-center mb-5">
          Our Working Process
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-center mb-8">
          “We follow a clear and efficient workflow that ensures every project
          is delivered with quality, precision, and transparency.”
        </p>
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 justify-items-center">
          {steps.map(({ id, title, icon }) => (
            <div
              key={id}
              className="w-33 h-28 rounded-lg shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="bg-[#ffe5cc] text-center rounded-lg py-2 px-1 flex flex-col justify-between h-full">
                <div className="text-xl text-[#ff9000] mb-1 flex justify-center">
                  {icon}
                </div>
                <p className="text-[15px] font-medium text-center">{title}</p>
                <div className="w-8 h-[2px] bg-[#ff9000] mx-auto rounded mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
