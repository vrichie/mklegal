import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white py-20 flex items-center justify-center">
      <div className="md:w-4/5 w-11/12 flex items-start justify-between md:flex-row flex-col ">
        <span className="">
          <h1 className="text-2xl " data-aos="fade-up" data-aos-delay="0">
            Mkl legal
          </h1>
          <br />
          <br />
          <div
            className="md:w-[400px] w-full relative"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <iframe
              width="100%"
              height="440"
              src="https://maps.google.com/maps?width=400&amp;height=440&amp;hl=en&amp;q=nairobi%2C%20kenya+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <div id="rwe">
              <small id="rew">
                Powered by{" "}
                <a href="http://www.googlemapsgenerator.com/es/">
                  Googlemapsgenerator.com/es/
                </a>{" "}
                & <a href="https://xn--snabbln5000-28a.com/">låna 5000</a>
              </small>
            </div>
          </div>
          <br />
          <br />
        </span>
        <span className="md:w-2/3 w-full flex items-start justify-between h-fit flex-col">
          <div className="w-full flex md:flex-row flex-col items-start justify-between">
            <span>
              <h1 className="text-4xl " data-aos="fade-up" data-aos-delay="0">
                Contact Details
              </h1>
              <br />
              <p className="text-white" data-aos="fade-up" data-aos-delay="25">
                123 Anywehere St <br />
                Nairobi ,Kenya
              </p>
              <br />

              <p className="text-white" data-aos="fade-up" data-aos-delay="50">
                (254) 334 23432
                <br />
                info@mkl.com
              </p>

              <br />
              <br />
            </span>
            <span>
              <h1 className="text-4xl " data-aos="fade-up" data-aos-delay="0">
                Office Hours
              </h1>
              <br />
              <p className="text-white" data-aos="fade-up" data-aos-delay="25">
                Monday to Friday <br />
                9:00 am to 6:00 pm
              </p>
              <br />
              <p className="text-white" data-aos="fade-up" data-aos-delay="50">
                Saturday <br />
                9:00 am to 12 noon
              </p>
              <br />
              <p className="text-white" data-aos="fade-up" data-aos-delay="75">
                Closed on Sundays
              </p>
            </span>
          </div>
          <br />
          <br className="lg:block hidden lg:mt-20" />

          <div>
            <h1 className="text-4xl " data-aos="fade-up" data-aos-delay="50">
              Follow Us
            </h1>
            <br />

            <div className="flex text-xl text-white">
              <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;
              <i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;
              <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;
            </div>
            <br />

            <p className="text-white" data-aos="fade-up" data-aos-delay="100">
              We are an accessible workplace. Persons with disabilities are
              welcome to apply.
            </p>
          </div>
          <br />
          <div className="w-full border-t-[1px] border-slate-50/20">
            <br />
            <p className="text-white">
              &copy; 2023 MK Legal. All rights reserved.
            </p>
          </div>
        </span>
      </div>
    </footer>
  );
}
