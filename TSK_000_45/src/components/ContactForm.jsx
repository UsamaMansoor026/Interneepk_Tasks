import React from "react";
import { galleryImages } from "../assets/assets";
import Button from "./Button";

const ContactForm = () => {
  return (
    <section id="contact" className="mx-9 md:mx-16 lg:mx-24 mt-16 mb-8">
      <h1 className="font-semibold text-4xl mb-5">Get in Touch</h1>

      {/* Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="overflow-hidden">
          <img
            className="w-full aspect-[1/0.6] md:aspect-[1/0.4] lg:aspect-[1/0.77] object-cover"
            src={galleryImages.Gallery2}
            alt=""
          />
        </div>

        <form className="flex flex-col gap-5 border border-primary-color px-4 py-9 md:p-9">
          {/* Email and Name Fields */}
          <div className="flex items-center gap-4 justify-between">
            <input
              className="inputs"
              type="text"
              placeholder="Your Name..."
              required
            />
            <input
              className="inputs"
              type="email"
              placeholder="Your Email..."
              required
            />
          </div>
          <input className="inputs" type="text" placeholder="Subject..." />
          <textarea className="inputs textarea" placeholder="Your Message..." />
          <Button bgColor={true} border={true}>
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
