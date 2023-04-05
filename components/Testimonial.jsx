import React from "react";

export default function Testimonial() {
  const testimony = [
    {
      name: "John Doe",
      text: "I was in a difficult child custody battle and the team at the law firm helped me every step of the way. Their expertise and guidance made all the difference.",
    },
    {
      name: "Jane Smith",
      text: "I couldn't have asked for a better team to represent me in my divorce case. They were professional, compassionate, and dedicated to getting me the best possible outcome.",
    },
    {
      name: "Bob Johnson",
      text: "After my car accident, the law firm helped me get the compensation I needed to cover my medical expenses and lost wages. I am so grateful for their help.",
    },
  ];

  return (
    <div className="w-full py-20 my-20 flex items-center justify-center ">
      <div className="w-11/12 flex items-center justify-center flex-col">
        <span className="text-center">
          <h2 data-aos="fade-up" data-aos-delay="0">
            {" "}
            <i>Testimonials</i> From Clients
          </h2>
          <h4 data-aos="fade-up" data-aos-delay="50">
            An honest look into how we work
          </h4>
        </span>
        <br />
        <br />
        <br />
        <div className="md:w-4/5 w-full flex justify-between flex-wrap my-20">
          {testimony.map((test, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay="100"
              className={`lg:w-1/4 w-full bg-gradient-to-r from-slate-50 to-slate-100  p-5 flex items-center flex-col text-center rounded-xl ${
                testimony.length === index + 1 ? "mb-0" : "lg:mb-0 mb-5"
              }`}
            >
              <i class="fa-solid fa-quote-left text-blue-400 text-lg"></i>
              <br />
              <br />
              <p>{test.text}</p>
              <br />
              <br />
              <div className="text-red-400 bg-slate-400 w-full h-[1px]" />

              <h4 className="text-lg mt-5 text-blue-600">
                - &nbsp;
                {test.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
