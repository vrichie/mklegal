import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Focus from "../components/Focus";
import Testimonial from "../components/Testimonial";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to MK Legal</title>
        <meta
          name="description"
          content="MK Legal is a top commercial law firm in Nairobi, delivering world-class legal services to multi-national companies, local entrepreneurs, and pro bono clients."
        />
        <link rel="icon" href="/mkl1.jpg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navbar />
      <Hero
        heading=" Welcome to MK Legal "
        message="MK Legal is a top commercial law firm in Nairobi, delivering world-class legal services to individuals, multi-national companies, local entrepreneurs and pro-bono clients. Our experienced team of lawyers are committed to upholding the highest ethical standards and achieving the best possible outcomes for our clients."
      />
      <About />
      <Focus />
      <Services />
      <Team />
      <Testimonial />
      <Footer />
    </>
  );
}
