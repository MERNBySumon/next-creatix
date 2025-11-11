import React from "react";
import Test from "./Test";
import Nabbar from "../component/Nabbar";
import Header from "../component/Header";
import ExpertiseSection from "../component/ExpertiseSection";
import heroImg from "../assets/image/backgroundImg.jpg"; // তোমার হিরো ইমেজ বসাও
import aboutImg from "../assets/image/whati.jpg";
import partner1 from "../assets/image/backgroundImg.jpg";
import partner2 from "../assets/image/backgroundImg.jpg";
import partner3 from "../assets/image/backgroundImg.jpg";
import ceo from "../assets/image/ceo.jpg";
import alf from "../assets/image/alfou.jpg";
import sifu from "../assets/image/sifu.jpg";
import ProjectcCom from "../component/ProjectcCom";

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <ProjectcCom></ProjectcCom>

      <ExpertiseSection></ExpertiseSection>
      {/* <div className="mx-8 leading-none">
        <h2 className="text-2xl mt-5">READY TO START YOUR PROJECT</h2>
        <p className="my-3">let's build someething amazing together</p>
        <button className="btn mb-7 bg-[#ff9000] border-none shadow-none">
          GET A FREE QUOTE
        </button>
      </div> */}
      {/* 🧠 About Section */}
      <section className="py-20 bg-white text-center px-8">
        <h2 className="text-4xl font-bold text-[#000000] mb-6">What We Do?</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We create dynamic learning programs and partnerships to prepare
          future-ready professionals for the digital world.
        </p>
        <div className="mt-12 flex flex-col md:flex-row gap-10 justify-center items-center">
          <img
            src={aboutImg}
            alt="About"
            className="w-full md:w-[40%] rounded-lg shadow-lg"
          />
          <div className="text-left max-w-md">
            <h3 className="text-2xl font-bold mb-3">
              A dynamic and innovative company
            </h3>
            <p className="text-gray-600 mb-4">
              We combine creativity, technology, and experience to provide
              industry-standard IT education and corporate solutions.
            </p>
            <button className="bg-[#ff9000] text-white px-6 py-3 rounded-lg hover:bg-[#ff7a00]">
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* 💼 How It Works */}
      <section className="py-20 bg-gray-50 text-center px-8">
        <h2 className="text-4xl font-bold text-[#000000] mb-12">
          How does it Work?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Start Learning", "Get Certified", "Start Working"].map(
            (step, i) => (
              <div
                key={i}
                className="bg-[#ffeace] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-3 text-[#ff9000]">{`0${
                  i + 1
                }. ${step}`}</h3>
                <p className="text-gray-600">
                  {i === 0 &&
                    "Join our courses and gain hands-on IT skills from industry experts."}
                  {i === 1 &&
                    "Get internationally recognized certifications after successful completion."}
                  {i === 2 &&
                    "Start your dream career with our placement assistance program."}
                </p>
              </div>
            )
          )}
        </div>
      </section>
      {/* Our Leadership section */}

      <section className="flex flex-col items-center justify-center py-20 ">
        <h2 className="text-4xl font-bold mb-10">
          Our <span className="text-[#ff9900]">Leadership</span>{" "}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Co-CEO */}
          <div className="border-2 border-[#ff9900] rounded-xl w-56 h-72 flex flex-col items-center justify-center text-center hover:scale-105 transition overflow-hidden">
            <img
              src={sifu}
              alt="Co CEO"
              className="w-full h-3/4 object-cover"
            />
            <div className="py-3">
              <h3 className="text-lg font-semibold">Sifu Sumon</h3>
              <p className="text-[#ff9900] text-sm">Co CEO</p>
            </div>
          </div>

          {/* CEO */}
          <div className="border-2 border-[#ff9900] rounded-xl w-60 h-80 flex flex-col items-center justify-center text-center hover:scale-105 transition overflow-hidden">
            <img src={ceo} alt="CEO" className="w-full h-3/4 object-cover" />
            <div className="py-3">
              <h3 className="text-xl font-semibold">Nozrul Islam Pappy </h3>
              <p className="text-[#ff9900] text-sm">CEO & Founder</p>
            </div>
          </div>

          {/* Right Co-CEO */}
          <div className="border-2 border-[#ff9900] rounded-xl w-56 h-72 flex flex-col items-center justify-center text-center hover:scale-105 transition overflow-hidden">
            <img src={alf} alt="Co CEO" className="w-full h-3/4 object-cover" />
            <div className="py-3">
              <h3 className="text-lg font-semibold">Al Fayez Hridoy</h3>
              <p className="text-[#ff9900] text-sm">Co CEO</p>
            </div>
          </div>
        </div>
      </section>
      {/* 💬 Testimonials */}
      <section className="py-20 bg-[#ffe5cc]  text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((t) => (
            <div key={t} className="bg-white p-8 rounded-xl">
              <p className="text-black mb-4">
                “This training helped me upgrade my skills and get a better job
                in IT.”
              </p>
              <h4 className="font-semibold text-[#ff9000]">Mahmud Hasan</h4>
              <p className="text-sm text-gray-400">Junior Web Developer</p>
            </div>
          ))}
        </div>
      </section>
      {/* 📣 Call to Action */}
      <section className="py-20  text-center">
        <h2 className="text-4xl font-bold mb-4">READY TO START YOUR PROJECT</h2>
        <p className="text-lg mb-8">let's build someething amazing together</p>
        <button className="px-8 py-3 bg-[#ff9000] text-white font-semibold rounded-lg hover:bg-[#ff7a00] transition">
          Contact Us
        </button>
      </section>
      {/* ===================== */}
    </div>
  );
};
