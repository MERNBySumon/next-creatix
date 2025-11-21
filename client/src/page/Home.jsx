import React from "react";
import Test from "./Test";
import Nabbar from "../component/Nabbar";
import Header from "../component/Header";
import ExpertiseSection from "../component/ExpertiseSection";
import aboutImg from "../assets/image/whati.jpg";
import ceo from "../assets/image/ceo.jpg";
import alf from "../assets/image/Ridoy .jpg";
import sifu from "../assets/image/sifu.jpg";
import ProjectcCom from "../component/ProjectcCom";
import { Link } from "react-router-dom";
import { WorkProcess } from "../component/WorkProcess";

export const Home = () => {
  return (
    <div>
      {/* ------------------------------------------ */}
      <div className="relative">
        <Header />
        <div
          className="
      hidden
      lg:flex
      absolute
      left-1/2
      bottom-[-120px]
      -translate-x-1/2
      justify-center
      w-full
    "
        >
          <ProjectcCom />
        </div>

        {/* মাঝারি ও ছোট স্ক্রিনে নিচে */}
        <div className="flex lg:hidden justify-center mt-6">
          <ProjectcCom />
        </div>
      </div>
      {/* --------------------------- */}
      <ExpertiseSection></ExpertiseSection>
      {/* 🧠 About Section */}
      <section className="py-0 bg-white text-center px-8">
        <h2 className="text-4xl font-bold text-[#000000] mb-5">What We Do?</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          “We merge creativity and technology to build impactful digital
          solutions that turn your ideas into powerful business outcomes.”
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-10 justify-center items-center">
          <img
            src={aboutImg}
            alt="About"
            className="w-full md:w-[40%] rounded-lg shadow-lg"
          />
          <div className="text-left max-w-md">
            <h3 className="text-2xl font-bold mb-3">
              A Dynamic And Innovative Agency
            </h3>
            <p className="text-gray-600 mb-4 text-justify">
              “We push boundaries with fresh ideas and smart digital solutions,
              combining creativity and innovation to help brands grow, connect,
              and stand out in a competitive world. Our approach ensures
              meaningful impact and long-term success for every business we work
              with.”
            </p>
            <Link to={"/readmor"}>
              <button className="bg-[#ff9000] text-[15px] font-semibold text-white px-5 py-2 rounded-lg hover:text-black">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="py-20">
        <WorkProcess></WorkProcess>
      </div>

      <section className="flex flex-col items-center justify-center mb-20 ">
        <h2 className="text-4xl font-bold mb-5">
          Our <span className="text-[#ff9900] ">Leadership</span>{" "}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-center mb-8">
          “Our leadership brings experience, vision, and innovation, guiding the
          team toward excellence and long-term success.”
        </p>
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
              <p className="text-[#ff9900] text-sm">Co-CEO</p>
            </div>
          </div>

          {/* CEO */}
          <div className="border-2 border-[#ff9900] rounded-xl w-56 h-72 flex flex-col items-center justify-center text-center hover:scale-105 transition overflow-hidden">
            <img src={ceo} alt="Co CEO" className="w-full h-3/4 object-cover" />
            <div className="py-3">
              <h3 className="text-lg font-semibold">Md. Nozrul Islam</h3>
              <p className="text-[#ff9900] text-sm">CEO & Founder</p>
            </div>
          </div>

          {/* <div className="border-2 border-[#ff9900] rounded-xl w-60 h-80 flex flex-col items-center justify-center text-center hover:scale-105 transition overflow-hidden">
            <img src={ceo} alt="CEO" className="w-full h-3/4 object-cover" />
            <div className="py-3">
              <h3 className="text-xl font-semibold">Nozrul Islam Pappy </h3>
              <p className="text-[#ff9900] text-sm">CEO & Founder</p>
            </div>
          </div> */}

          {/* Right Co-CEO */}
          <div className="border-2 border-[#ff9900] rounded-xl w-56 h-72 flex flex-col items-center justify-center text-center hover:scale-105 transition overflow-hidden">
            <img src={alf} alt="Co CEO" className="w-full h-3/4 object-cover" />
            <div className="py-3">
              <h3 className="text-lg font-semibold">Al Fayez Hridoy</h3>
              <p className="text-[#ff9900] text-sm">Co-CEO</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#ffe5cc] text-center">
        {/* <h2 className="text-4xl font-bold mb-5">Testimonials</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-center mb-8">
          “Client feedback reflects our dedication, service quality, and the
          meaningful impact we create through every project.”
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((t, index) => (
            <div
              key={t}
              className={`
          bg-white p-8 rounded-xl transition 
          ${index >= 3 ? "blur-sm opacity-60 pointer-events-none" : ""}
        `}
            >
              <p className="text-black mb-4">
                “This training helped me upgrade my skills and get a better job
                in IT.”
              </p>
              <h4 className="font-semibold text-[#ff9000]">Mahmud Hasan</h4>
              <p className="text-sm text-gray-400">Junior Web Developer</p>
            </div>
          ))}
        </div> */}

        {/* ============================================= */}
        {/* 💬 Testimonials */}
        <section className="py-0 bg-[#ffe5cc] text-center">
          <h2 className="text-4xl font-bold mb-5">Testimonials</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-center mb-8">
            “Client feedback reflects our dedication, service quality, and the
            meaningful impact we create through every project.”
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                id: 1,
                name: "ABDALSAMAD2001",
                image: "/images/abdalsamad2001.jpg",
                message:
                  "He is brilliant and excel, thank you for being patient with me!",
              },
              {
                id: 2,
                name: "Sally Marsh",
                image: "/images/Sally_Marsh.jpg",
                message:
                  "Fantastic job! Highly recommended and would love to work with him again.",
              },
              {
                id: 3,
                name: "Alexwrites1",
                image: "/images/alexwrites1.jpg",
                message:
                  "He started working right away and delivered within hours. Great communication and amazing design quality.",
              },
              {
                id: 4,
                name: "John Doe",
                image: "/images/user4.jpg",
                message:
                  "Outstanding quality and timely delivery. Definitely worth working with!",
              },
              {
                id: 5,
                name: "Sarah Marks",
                image: "/images/user5.jpg",
                message: "Very professional and creative. Will work again!",
              },
              {
                id: 6,
                name: "Michael Lee",
                image: "/images/user6.jpg",
                message:
                  "Perfect delivery and amazing understanding of requirements.",
              },
            ].map((t, index) => {
              const isLocked = index >= 3; // নিচের তিনটা কার্ড

              return (
                <div
                  key={t.id}
                  tabIndex={isLocked ? -1 : 0}
                  aria-disabled={isLocked}
                  className={`
            bg-white p-8 rounded-xl transition text-center
            ${
              isLocked
                ? "blur-sm opacity-60 pointer-events-none select-none"
                : ""
            }
          `}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="mx-auto w-20 h-20 rounded-full mb-4 object-cover"
                  />

                  <p className="text-black mb-4">“{t.message}”</p>

                  <h4 className="font-semibold text-[#ff9000]">{t.name}</h4>

                  {/* ---------------------- */}
                  <div className="rating mt-2">
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
                  {/* ---------------------- */}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================================================= */}

        {/* Read More Button */}
        <div className="mt-10">
          <Link to={"/tastimonials"}>
            <button className="bg-[#ff9000] text-white px-6 py-3 rounded-lg font-semibold hover:text-black transition">
              Read More
            </button>
          </Link>
        </div>
      </section>

      {/* 📣 Call to Action */}
      <section className="py-20  text-center">
        <h2 className="text-4xl font-bold mb-4">Ready To Start Your Project</h2>
        <p className="text-lg mb-8">let's build someething amazing together</p>
        <Link to={"/contactus"}>
          <button className="px-8 py-3 bg-[#ff9000] text-white font-semibold rounded-lg hover:text-black transition">
            Contact Us
          </button>
        </Link>
      </section>
      {/* ===================== */}
    </div>
  );
};
