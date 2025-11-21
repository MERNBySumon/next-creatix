import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BlogeDetails = () => {
  const { id } = useParams();
  const [bloge, setBloge] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setBloge(found);
      });
  }, [id]);

  console.log(bloge);

  if (!bloge) {
    // লোডিং স্টেট
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg font-medium">Loading...</p>
      </div>
    );
  }

  // ডেটা লোড হলে কনটেন্ট দেখাবে
  return (
    <div className="prose mx-auto my-12 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">{bloge.title}</h1>
      <div className="mb-4 text-sm text-gray-500">
        <span>By {bloge.author}</span> •{" "}
        <time>{new Date(bloge.date).toLocaleDateString()}</time> •{" "}
        <span>{bloge.category}</span>
      </div>
      <img
        src={bloge.image}
        alt={bloge.title}
        className="w-full rounded-lg mb-6"
      />
      <p className="text-gray-700 mb-4">{bloge.excerpt}</p>
      {bloge.content.map((para, idx) => (
        <p key={idx} className="text-gray-800 mb-3">
          {para}
        </p>
      ))}
    </div>
  );
};
