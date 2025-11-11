import React from "react";
import Nabbar from "../component/Nabbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const Maine = () => {
  return (
    // <div className="bg-black text-white">
    <div className="bg-white text-black">
      <Nabbar></Nabbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Maine;
