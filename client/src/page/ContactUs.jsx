import React from "react";
import emailjs from "@emailjs/browser";
import {
  FaHeadset,
  FaUserFriends,
  FaShareAlt,
  FaFacebook,
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lvn3crp", // EmailJS থেকে কপি করো
        "template_j3mhbu8", // EmailJS থেকে কপি করো
        e.target, // ফর্ম ডাটা
        "wUM7-WvXcLbPb-r6l" // EmailJS থেকে কপি করোwUM7-WvXcLbPb-r6l
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };
  return (
    <div className="my-11 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 shadow-lg rounded-2xl p-6 ">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="border border-gray-300 focus:border-[#ff9000] focus:ring-1 focus:ring-[#ff9000] p-3 w-full rounded-md outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="border border-gray-300 focus:border-[#ff9000] focus:ring-1 focus:ring-[#ff9000] p-3 w-full rounded-md outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                required
                className="border border-gray-300 focus:border-[#ff9000] focus:ring-1 focus:ring-[#ff9000] p-3 w-full rounded-md h-32 resize-none outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#ff9000] hover:text-black py-3 px-4 rounded-md text-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="w-full md:w-1/2 rounded-2xl p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4 ">Contact Information</h3>

          <div className="space-y-2  mb-6">
            <p>
              <span className="font-semibold">Call Us:</span> +880 1300052218
            </p>
            <p>
              <span className="font-semibold">Email Us:</span>{" "}
              nextcreatix@gmail.com
            </p>
            <p>
              <span className="font-semibold">Find our location: </span>
              Baptah Mahogon Pol, Bhola Sadar, Bhola
            </p>
          </div>

          <div className="rounded-lg overflow-hidden mb-4">
            <iframe
              title="Next Creatix Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.8153002719173!2d90.64043607398942!3d22.69791862836809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754d5005b549ff7%3A0x8a5db0dffcedb2d5!2sNext%20Creatix!5e0!3m2!1sbn!2sbd!4v1754340814033!5m2!1sbn!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* <p className=" mb-4">Baptah Mahogon Pol, Bhola Sadar, Bhola</p> */}

          <div className="flex gap-5 text-2xl text-[#ff9000]">
            {/* </Link>
            <Link to={''}></Link> */}
            <Link to={"https://www.facebook.com/nextcreatix"}>
              <FaFacebook className="hover:text-[#1877F2] transition" />
            </Link>
            <Link to={"https://www.instagram.com/nextcreatix/#"}>
              <FaInstagram className="hover:text-[#E1306C] transition" />
            </Link>
            <Link to={""}>
              <FaLinkedin className="hover:text-[#0A66C2] transition" />
            </Link>
            <Link to={"https://www.youtube.com/@nextcreatix"}>
              <FaYoutube className="hover:text-[#FF0000] transition" />
            </Link>
            <Link to={"https://x.com/nextcreatix"}>
              <FaTwitter className="hover:text-[#1DA1F2] transition" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
