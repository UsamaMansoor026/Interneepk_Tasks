import React from "react";
import "../index.css";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { galleryImages } from "../assets/assets";
import Carousal from "../components/Carousal";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs";
import InstagramGallery from "../components/InstagramGallery";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Banner>
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full bg-black/40"></div>
        <div className="container flex gap-8 pl-24 py-36 flex-col">
          <h1 className="animated text-5xl md:text-[55px] lg:text-[65px] font-extralight leading-[1.2] opacity-85">
            Healthy Made <br />
            Delicious Cake
          </h1>
          <Button border={true} bgColor={true}>
            Order Now
          </Button>
        </div>
      </Banner>

      {/* Hero Sub Section */}
      <section id="about" className="py-20">
        <h1 className="w-[70%] lg:w-[40%] text-center mx-auto text-[26px] md:text-[30px] lg:text-[40px] leading-[1.3]">
          This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
        </h1>
        <div className="mx-auto w-[90px] h-[2px] mt-6 mb-10 bg-primary-color" />
        {/* ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center md:justify-start items-center px-[50px] md:pl-[110px] lg:pl-[145px]">
          {/* ===Left Portion=== */}
          <div className="flex flex-col w-full md:w-[60%] lg:w-full gap-3">
            <h3 className="w-[100%] lg:w-[70%] text-2xl text-primary-color">
              This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit
              in voluptate velit esse cillum.
            </p>
            <p className="text-white">
              Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercita tion ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute dolor in reprehen derit in voluptate velit
              esse cillum.
            </p>
          </div>

          {/* ===Right Portion=== */}
          <div>
            <img src={galleryImages.Gallery2} alt="" />
          </div>
        </div>
      </section>

      {/* Cart Items */}
      <Carousal />

      {/* Video Section */}
      <div className="py-9 mx-6 md:mx-16 lg:mx-24 relative">
        <img
          className="w-full object-cover aspect-video"
          src={galleryImages.Gallery3}
          alt=""
        />
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-color p-5 md:p-7 lg:p-9 rounded-full text-2xl md:text-4xl text-light-black flex justify-center items-center cursor-pointer hover:bg-white hover:text-primary-color duration-200">
          <ion-icon name="play-sharp"></ion-icon>
        </span>
      </div>

      {/* Testimonials section */}
      <Testimonial />

      {/* Blogs Section */}
      <Blogs />

      {/* Imstagram Gallery */}
      <InstagramGallery />

      {/* Contact Form */}
      <ContactForm />
    </>
  );
};

export default Home;
