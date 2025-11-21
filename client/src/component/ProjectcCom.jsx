import React from "react";
import CountUp from "react-countup";

function ProjectcCom() {
  return (
    <div className="w-[950px] mx-auto rounded-2xl shadow-md hover:shadow-xl transition">
      <section className="bg-[#ffe5cc] text-black py-16 rounded-2xl">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-around text-center gap-8">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">
              <CountUp start={0} end={1250} duration={3} />+
            </h2>
            <p className="text-[black] mt-2">Projects completed</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">
              <CountUp start={0} end={600} duration={3} />+
            </h2>
            <p className="text-[black] mt-2">Happy Clients</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">
              <CountUp start={0} end={10} duration={3} />+
            </h2>
            <p className="text-[black] mt-2">Creative Experts</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">
              <CountUp start={0} end={2} duration={3} />+
            </h2>
            <p className="text-[black] mt-2">Years of Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectcCom;
