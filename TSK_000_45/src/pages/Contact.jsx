import React from "react";
import Banner from "../components/Banner";

const Contact = () => {
  return (
    <div>
      <Banner>
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full bg-black/40"></div>
        <div className="container flex gap-8 pl-24 py-36 flex-col">
          <h1 className="animated text-5xl md:text-[55px] lg:text-[65px] font-extralight leading-[1.2] opacity-85">
            Contact Us
          </h1>
        </div>
      </Banner>
    </div>
  );
};

export default Contact;
