import React, { useEffect, useState } from "react";
import Scerbicecard from "../component/Scerbicecard";
import sariviceima from "../assets/image/service.jpg";
const Services = () => {
  const [service, setservice] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setservice(data));
  }, []);
  console.log(service);

  return (
    <div>
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#ff9000]">Services</span>
            </h2>
            <p className="  mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed text-justify">
              We combine creativity and technology to turn your ideas into
              reality. From Graphic Design to Web Development and Software-App
              solutions—we cover it all. Through Digital Marketing, Video &
              Animation, we help your brand grow stronger. Our AI Services bring
              cutting-edge solutions, while Writing & Translation make your
              content perfect. Together, we provide a complete digital solution
              for your business.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={sariviceima}
              alt="Service Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 m-5 ">
        {service.map((service) => (
          <Scerbicecard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
