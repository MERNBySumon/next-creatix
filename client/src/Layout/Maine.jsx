// import React from "react";
// import Nabbar from "../component/Nabbar";
// import { Outlet } from "react-router-dom";
// import Footer from "../component/Footer";

// const Maine = () => {
//   return (
//     // <div className="bg-black text-white">
//     <div className="bg-white text-black">
//       {/* <Nabbar></Nabbar> */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Nabbar />
//       </div>

//       <Outlet></Outlet>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Maine;
import React from "react";
import Nabbar from "../component/Nabbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const Maine = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nabbar />
      </div>

      {/* কনটেন্ট যাতে নেভবারের নিচ থেকে শুরু হয় */}
      <div className="pt-[60px]">
        {" "}
        {/* এখানে 80px তোমার নেভবারের উচ্চতা অনুযায়ী */}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Maine;
