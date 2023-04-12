import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full relative flex items-center py-20 justify-center">
      <section className="md:w-2/3 w-11/12  flex items-center  justify-between lg:flex-row flex-col-reverse py-20 md:px-0 ">
        <span className=" lg:w-1/2 w-full text-center">
          <h2 data-aos="fade-up" data-aos-delay="0" className="p-color">
            The Difference Is In Our <i>Approach</i>{" "}
          </h2>
          <br />
          <br />
          <p className="" data-aos="fade-up" data-aos-delay="50">
            Our client can expect world class legal services delivered with keen
            attention to their business and personal needs.
          </p>
          <p data-aos="fade-up" data-aos-delay="100">
            As a full-service commercial law firm in Nairobi we strive for
            excellence in everything we do.
          </p>
          <p data-aos="fade-up" data-aos-delay="100">
            We pride ourselves on our in-depth knowledge and experience. The
            firm has received recognition for its excellence and was a nomine in
            the SME law firm of the Year Category 2022 of the Nairobi Legal
            Awards.
          </p>
          <br />
          <Link href="#contacts">
            <button>
              {" "}
              <span>GET IN TOUCH</span>{" "}
            </button>
          </Link>
        </span>
        <div className="lg:w-fit w-full md:mb-0 mb-10">
          <img
            src="/about.jpg"
            data-aos="zoom-in"
            data-aos-delay="50"
            className="lg:w-[400px] w-full"
            alt="Mkl"
            loading="lazy"
          />
        </div>
      </section>
      <div className="bg-blue-gradient absolute top-[50%] left-[-5%] w-[200px] h-[200px] rounded-full"></div>
    </div>
  );
};

export default About;
