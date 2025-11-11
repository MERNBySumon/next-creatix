import React, { useMemo, useState } from "react";
import {
  FaClock,
  FaSyncAlt,
  FaCheckCircle,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

// ছোট ট্যাব বাটন
const ToggleTab = ({ active, label, onClick, showDivider }) => (
  <button
    onClick={onClick}
    className={`py-2.5 transition-colors w-full ${
      active
        ? "bg-neutral-900 text-white"
        : "text-neutral-700 hover:bg-neutral-50"
    } ${showDivider ? "relative" : ""}`}
    type="button"
  >
    {showDivider && (
      <span className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-px bg-neutral-200" />
    )}
    <span className={`px-4 ${active ? "font-semibold" : ""}`}>{label}</span>
  </button>
);

const PriceCard = ({ service }) => {
  // service.packages থেকে ক্যাটাগরি তালিকা (যেমন: ["Basic","Standard","Premium"])
  const categories = useMemo(
    () => (service?.packages ? service.packages.map((p) => p.category) : []),
    [service]
  );

  // ডিফল্ট ট্যাব: "Premium" থাকলে সেটি, নাহলে প্রথমটি
  const [active, setActive] = useState(
    categories.includes("Premium") ? "Premium" : categories[0] || ""
  );

  // অ্যাকটিভ প্যাকেজ খুঁজে বের করা
  const activePackage = useMemo(() => {
    if (!service?.packages) return null;
    return (
      service.packages.find((p) => p.category === active) ||
      service.packages[0] ||
      null
    );
  }, [service, active]);

  // শুধুমাত্র দরকার হলে দামগুলোর অ্যারে (উদাহরণ: চার্ট/ক্যালকুলেশন)
  const prices = useMemo(() => {
    if (!service?.packages) return [];
    return service.packages.map((p) => p.price);
  }, [service]);

  if (!activePackage) return null;

  const {
    package_name,
    price,
    details: { description, delivery_time, revisions, features } = {},
  } = activePackage;

  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      {/* হেডার: সার্ভিস টাইটেল */}
      <div className="px-6 pt-6">
        <h2 className="text-lg font-semibold text-neutral-900">
          {service.title}
        </h2>
        {service.desc?.length ? (
          <p className="mt-1 text-sm text-neutral-600">{service.desc[0]}</p>
        ) : null}
      </div>

      {/* ট্যাবস */}
      <div className="mt-4 grid grid-cols-3 rounded-2xl border mx-6 overflow-hidden">
        {categories.slice(0, 3).map((cat, i) => (
          <ToggleTab
            key={cat}
            label={cat}
            active={active === cat}
            onClick={() => setActive(cat)}
            showDivider={i !== 2}
          />
        ))}
      </div>

      {/* কার্ড বডি */}
      <div className="p-6">
        {/* শিরোনাম + দাম */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-green-500 text-lg font-semibold">
              {package_name}
            </h3>
            {description && (
              <p className="text-sm text-neutral-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <div className="text-right shrink-0">
            <div className="text-2xl font-bold text-green-600">${price}</div>
          </div>
        </div>

        {/* মেটা */}
        <div className="mt-4 flex items-center gap-4 text-sm text-neutral-700">
          <div className="flex items-center gap-2">
            <FaClock />
            <span>{delivery_time}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaSyncAlt />
            <span>{revisions} Revisions</span>
          </div>
        </div>

        {/* ফিচারস */}
        {Array.isArray(features) && features.length > 0 && (
          <ul className="mt-5 space-y-2">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-sm text-neutral-800"
              >
                <FaCheckCircle className="mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-6">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-3 font-medium transition hover:bg-black"
          >
            Continue <FaArrowRight />
          </button>
        </div>
      </div>

      {/* কন্টাক্ট */}
      <div className="border-t p-4">
        <button
          type="button"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-4 py-3 text-neutral-800 hover:bg-neutral-50"
        >
          Contact me <FaChevronDown />
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
