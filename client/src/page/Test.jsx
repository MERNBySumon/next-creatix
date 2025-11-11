import React, { useState } from "react";
import {
  FaClock,
  FaSyncAlt,
  FaCheckCircle,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

const PACKAGES = {
  Basic: {
    title: "Starter Package",
    price: 15,
    delivery: "2-day delivery",
    revisions: 1,
    desc: "1 Page Design using ReactJS, NextJS, HTML, CSS, JavaScript, Typescript, Material UI",
    features: [
      "1 page",
      "Design customization",
      "Responsive design",
      "Source code",
    ],
  },
  Standard: {
    title: "Standard Package",
    price: 30,
    delivery: "3-day delivery",
    revisions: 2,
    desc: "2 Pages Design using ReactJS, NextJS, HTML, CSS, JavaScript, Typescript, Material UI",
    features: [
      "3 pages",
      "Design customization",
      "Content upload",
      "Responsive design",
      "Source code",
    ],
  },
  Premium: {
    title: "Business Package",
    price: 100,
    delivery: "7-day delivery",
    revisions: 3,
    desc: "5 Pages Frontend Web Developer using ReactJS, NextJS, HTML, CSS, JavaScript, Typescript, Material UI",
    features: [
      "10 pages",
      "Design customization",
      "Content upload",
      "Responsive design",
      "Source code",
      "Detailed code comments",
    ],
  },
};

const ToggleTab = ({ active, label, onClick, showDivider }) => (
  <button
    onClick={onClick}
    className={`py-2.5 transition-colors ${
      active
        ? "bg-neutral-900 text-white"
        : "text-neutral-600 hover:bg-neutral-50"
    } ${showDivider ? "relative" : ""}`}
  >
    {/* divider */}
    {showDivider && (
      <span className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-px bg-neutral-200" />
    )}
    <span className={`px-6 ${active ? "font-semibold" : ""}`}>{label}</span>
  </button>
);

const Test = () => {
  const [active, setActive] = useState("Premium"); // default: Premium
  const data = PACKAGES[active];

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Tabs (toggle) */}
        <div className="grid grid-cols-3 rounded-2xl border  text-sm font-medium overflow-hidden">
          {["Basic", "Standard", "Premium"].map((tab, i) => (
            <ToggleTab
              key={tab}
              label={tab}
              active={active === tab}
              onClick={() => setActive(tab)}
              showDivider={i !== 2} // divider after first two
            />
          ))}
        </div>

        {/* Card */}
        <div className="mt-3 rounded-2xl border bg-white shadow-sm">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-green-400">
                  {data.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {data.desc}
                </p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xl font-bold text-green-600">
                  ${data.price}
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="mt-4 flex items-center gap-4 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{data.delivery}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSyncAlt />
                <span>{data.revisions} Revisions</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-5 space-y-2">
              {data.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-neutral-800"
                >
                  <FaCheckCircle className="mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-3 font-medium transition hover:bg-black">
                Continue <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t p-4">
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-4 py-3 text-neutral-800 hover:bg-neutral-50">
              Contact me <FaChevronDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
