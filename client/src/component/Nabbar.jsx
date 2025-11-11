import React from "react";
import { Link, NavLink } from "react-router-dom";
import navlogo from "../assets/image/favicon.png";
const Nabbar = () => {
  const listItem = (
    <>
      {/* aboutus */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff9000] font-semibold uppercase"
              : " font-semibold uppercase"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff9000] font-semibold uppercase"
              : " font-semibold uppercase"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Services"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff9000] font-semibold uppercase"
              : "font-semibold uppercase"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Portfolio"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff9000] font-semibold uppercase"
              : " font-semibold uppercase"
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/price"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff9000] font-semibold uppercase"
              : " font-semibold uppercase"
          }
        >
          Price
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tastimonials"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff9000] font-semibold uppercase"
              : " font-semibold uppercase"
          }
        >
          Tastimonials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bloge"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff9000] font-semibold uppercase"
              : " font-semibold uppercase"
          }
        >
          Bloge
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#ffe5cc]">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {listItem}
            </ul>
          </div>
          <Link>
            <img className="w-[30px]" src={navlogo} alt="Next Creatix Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{listItem}</ul>
        </div>
        <div className="navbar-end shadow-none">
          <Link to={"/contactus"}>
            <p className="btn bg-[#ff9000] text-amber-50 border-none shadow-none">
              Contact Us
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nabbar;
