import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="w-full bg-cyan-900 text-white py-20 flex items-center justify-center"
    >
      <div className="md:w-4/5 w-11/12 flex items-start justify-between lg:flex-row flex-col ">
        <span className=" lg:w-1/3 w-full">
          <Link href="/">
            <h1
              className="text-2xl font-semibold "
              data-aos="fade-up"
              data-aos-delay="0"
            >
              MK Legal
            </h1>
          </Link>
          <br />
          <br />
          <div
            className="lg:w-[350px] w-full relative"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <iframe
              width="100%"
              height="440"
              src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=%20Two%20Rivers%20Mall%2C%20Nairobi%20Kenya+(Mk%20legal)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
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
        <span className="lg:w-2/3 w-full flex items-start justify-between h-fit flex-col">
          <div className="w-full flex md:flex-row flex-col items-start justify-between">
            <span>
              <h1 className="text-4xl " data-aos="fade-up" data-aos-delay="0">
                Contact Details
              </h1>
              <br />
              <div
                className="flex items-center text-white"
                data-aos="fade-up"
                data-aos-delay="25"
              >
                <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;
                <p className="text-slate-50">
                  1st Floor, Southern Tower <br />
                  Two Rivers Lifestyle Centre, Limuru Road <br />
                  P.O. Box 63109 - 00604, Nairobi, Kenya
                </p>
              </div>
              <br />
              <div
                className="text-white flex items-center"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;
                <a href="tel:+254797747689">
                  <p className="text-slate-50">(254) 797747689</p>
                </a>
              </div>
              <br />

              <div
                className="text-white flex items-center"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;
                <a href="https://wa.me/254797747689">
                  <p className="text-slate-50">Whatsapp Message</p>
                </a>
              </div>
              <br />

              <div
                className="text-white flex items-center"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;
                <a href="mailto:info@mklegal.co.ke">
                  <p className="text-slate-50">info@mklegal.co.ke</p>
                </a>
              </div>

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

            <div
              className="flex text-xl text-white"
              data-aos="fade-up"
              data-aos-delay="75"
            >
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
          <div
            className="w-full border-t-[1px] border-slate-50/20"
            data-aos="fade-up"
            data-aos-delay="0"
          >
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
