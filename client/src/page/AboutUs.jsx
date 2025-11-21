import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import backgundabout from "../assets/image/about.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <section className="">
        {/* Hero */}
        <div className="relative overflow-hidden">
          {/* optional bg image */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${backgundabout})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative px-6 md:px-12 lg:px-20 py-14 md:py-20">
            <h1 className="text-4xl md:text-5xl font-extrabold ">
              About <span className="text-[#ff9000]">Us</span>
            </h1>
            {/* <h2 className="mt-3 text-xl md:text-2xl font-semibold text-[#ff9000]">
              NEXT CREATIX
            </h2> */}
            <p className="mt-4 max-w-3xl text-justify ">
              Next Creatix is your go-to creative agency, where your vision
              meets our innovative solutions! Established in 2024, our
              close-knit team of 10+ talented individuals specializes in various
              services, including graphic design, web development, software
              applications, digital marketing, video and animation, and
              cutting-edge AI solutions. At Next Creatix, we believe that every
              idea deserves to shine. Whether you need eye-catching graphics, a
              stunning website, or cutting-edge digital marketing strategies,
              we’re here to collaborate with you every step of the way. Let’s
              bring your vision to life together!
            </p>

            {/* Mission / Vision cards */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="bg-[#ffcc99] rounded-2xl p-6 shadow-lg border border-white/5">
                <h3 className="text-lg font-bold">Our Vision</h3>
                <p className="mt-">
                  To deliver end-to-end creative and digital solutions that
                  simplify workflows, boost performance, and create meaningful,
                  memorable experiences for every customer.
                </p>
              </div>
              <div className="bg-[#ffcc99]/90 rounded-2xl p-6 shadow-lg border border-white/5">
                <h3 className="text-lg font-bold">Our Mission </h3>
                <p className="mt-2 ">
                  To become the most trusted creative and technology partner for
                  businesses—combining design, development, and data-driven
                  strategy to support long-term, sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="px-6 md:px-12 lg:px-20 py-12">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Our <span className="text-[#ff9000]">Expertise</span>
          </h3>

          <div className="mt-6 overflow-x-auto rounded-xl border border-[#ff9000] ">
            <table className="min-w-[720px] w-full text-left text-sm md:text-base">
              <thead className="">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold ">
                  <th>Service</th>
                  <th>Focus Area</th>
                  <th>What We Do</th>
                  <th>Brief Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="[&>td]:px-4 [&>td]:py-4">
                  <td className="font-semibold">Web Development</td>
                  <td>Design & Build</td>
                  <td>Next.js, React, Tailwind, Headless CMS</td>
                  <td className="">
                    Fast, responsive, accessible sites & dashboards with modern
                    stacks.
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-4">
                  <td className="font-semibold">Graphics Design</td>
                  <td>Brand & Marketing</td>
                  <td>Logos, Book & Social Kits</td>
                  <td className="">
                    Clear brand systems and scroll-stopping visuals.
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-4">
                  <td className="font-semibold">Content Writing</td>
                  <td>Marketing & Docs</td>
                  <td>Blogs, UX Copy, Product Docs</td>
                  <td className="">
                    Research-backed content optimized for clarity and
                    conversion.
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-4">
                  <td className="font-semibold">SEO & Growth</td>
                  <td>Acquisition</td>
                  <td>On-Page, Technical SEO, Analytics</td>
                  <td className="">
                    Improve rankings and track ROI with measurable growth plans.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Why choose us */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold">
                Why choose <span className="text-[#ff9000]">NEXT CREATIX</span>?
              </h4>
              <ul className="mt-4 space-y-3">
                {[
                  "100 % Premium Quality",
                  "Satisfaction Guarantee",
                  "24/7 Emergency Support Available",
                  "Friendly Communication and Easy Collaboration",
                  "2+ Years of Proven Experience",
                  "Money-Back Guarantee",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 text-[#ff9000]" />
                    <span className="">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className=" rounded-2xl p-6 border bg-[#ffe5cc] border-white/10 shadow-xl">
              <h5 className="text-lg font-semibold">Have a project in mind?</h5>
              <p className="mt-2">
                Tell us about your goals and we’ll propose a clear, actionable
                plan.
              </p>
              <Link
                to={"/contactus"}
                className="inline-block mt-5 rounded-xl text-white bg-[#ff9000] hover:text-black transition  font-bold px-6 py-3"
              >
                GET A FREE QUOTE{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
