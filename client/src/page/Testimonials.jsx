import React, { useEffect, useState } from "react";

function Testimonials() {
  const [testimonials, settestimonials] = useState([]);
  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => settestimonials(data));
  }, []);
  console.log(testimonials);

  return (
    <div>
      <section className="py-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-5">
          What Our <span className="text-[#ff9900]">Clients Say</span>
        </h2>
        <p className="text-center mb-8">
          “Our clients share their journeys of collaboration, satisfaction,
          <br /> and success—highlighting the passion, dedication, and
          excellence behind every project we deliver.”
        </p>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white shadow-md rounded-2xl p-6 text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">“{t.message}”</p>
              <h3 className="font-bold text-lg">{t.name}</h3>
              {/* ---------------------------------rating--------------------------------------- */}
              <div className="rating">
                <div
                  className="mask mask-star h-4 w-4"
                  aria-label="1 star"
                ></div>
                <div
                  className="mask mask-star h-4 w-4"
                  aria-label="2 star"
                ></div>
                <div
                  className="mask mask-star h-4 w-4"
                  aria-label="3 star"
                ></div>
                <div
                  className="mask mask-star h-4 w-4"
                  aria-label="4 star"
                ></div>
                <div
                  className="mask mask-star h-4 w-4"
                  aria-label="5 star"
                  aria-current="true"
                ></div>
              </div>
              {/* ------------------------------------------------------------------------ */}
              {/* <span className="text-sm text-gray-500">{t.designation}</span> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
