import React, { useState } from "react";
import heroBg from "../assets/image/woork.jpg";

const Portfolio = () => {
  const projects = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    image: `https://picsum.photos/seed/${i + 1}/600/400`,
    category: i % 2 === 0 ? "Web Design" : "Development",
  }));

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="font-sans text-gray-800">
        {/* 🔹 Hero Section */}
        <section
          className="relative flex flex-col justify-center items-center text-center text-white h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          <div className="absolute inset-0 bg-[#001133]/80"></div>
          <div className="relative z-10 space-y-4 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Our <span className="text-[#ff9000]">Portfolio</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Explore our latest creative projects, web designs, and
              innovations.
            </p>
          </div>
        </section>
        {/* 🖼 Portfolio Grid */}
        <section className="py-16 px-6 md:px-10 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-[#001133] mb-12">
            <span className="text-[#ff9000]">Featured</span> Works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#001133] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 📄 Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#001133] text-white hover:bg-[#002266]"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === i + 1
                    ? "bg-[#ff9000] text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#001133] text-white hover:bg-[#002266]"
              }`}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
