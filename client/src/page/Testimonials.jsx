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
        <h2 className="text-4xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
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
              <span className="text-sm text-gray-500">{t.designation}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
