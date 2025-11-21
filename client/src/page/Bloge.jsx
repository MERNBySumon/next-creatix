import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Bloge = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);
  console.log(blogs);
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-5">
          Latest <span className="text-[#ff9900]">Blog Posts</span>
        </h2>
        <p className="text-center mb-8">
          “Explore our newest articles filled with industry insights, design
          inspiration,
          <br /> and practical guidance to help you grow, create, and stay ahead
          in the digital landscape.”
        </p>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {blogs.map((post) => (
            <Link to={`/bloge/${post.id}`}>
              <div
                key={post.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-orange-500 font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mt-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                    <span>✍️ {post.author}</span>
                    <span>📅 {post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bloge;
