import React from "react";

export default function Services() {
  const industries = [
    { name: "Construction and Infrastructure" },
    { name: "Real Estate" },
    { name: "Company Laws" },
    { name: "Financial Services and Banking Law" },
    { name: "Tax Law" },
    { name: "Public Sector" },
    { name: "Employment and Labour Disputes" },
    { name: "Immigration Law" },
    { name: "Media and Entertainment Law" },
    { name: "Technology And Intellectual Property Law" },
  ];
  return (
    <div className="w-full relative overflow-hidden flex items-center justify-center py-36">
      <div className="md:w-4/5 w-full flex flex-col items-center justify-center">
        <div id="service-banner" data-aos="zoom-in" data-aos-delay="0" />
        <br />
        <br />

        <div className="w-11/12 flex lg:flex-row flex-col items-start justify-between">
          <h2 data-aos="fade-up" data-aos-delay="50" className="p-color">
            Scope Of <i>Work</i>{" "}
          </h2>
          <span className="lg:w-1/2 w-full">
            <p data-aos="fade-up" data-aos-delay="100">
              From complex business transactions to sensitive family matters,
              our experienced Attorneys are able to offer legal solutions in
              several key industry sectors including:
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="120">
              And we pride ourselves on our in-depth knowledge and experience in
              several key industry sectors, including;
            </p>
            <br />

            <ul>
              {industries.map((i) => (
                <li
                  key={i.name}
                  className="ml-4 text-cyan-900"
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  <i className="fa-solid p-color fa-check-circle"></i>
                  &nbsp;&nbsp; {i.name}
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>
      <div className="bg-blue-gradient absolute top-[50%] right-[-5%] w-[200px] h-[200px] rounded-full"></div>
    </div>
  );
}
