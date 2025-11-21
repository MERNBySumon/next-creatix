import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    // <div>
    //   <img src="" alt="" />
    //   <h1>404</h1>
    //   <p>page is no found</p>
    //   <Link to={"/"}>Go to Home</Link>
    // </div>

    <section className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-[120px] font-extrabold text-orange-500 leading-none">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-semibold text-white mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-2">
        The page you are looking for does not exist.
      </p>
      <Link to={"/"}>
        <button
          className="
          mt-8 
          bg-orange-500 
          text-white
          font-semibold 
          px-6 
          py-3 
          rounded-xl 
          hover:bg-orange-600 
          transition
        "
        >
          Go to Homepage
        </button>
      </Link>
    </section>
  );
};

export default ErrorPage;
