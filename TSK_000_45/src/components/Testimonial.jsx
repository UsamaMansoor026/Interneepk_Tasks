import React from "react";
import { customersTestimonial } from "../assets/assets";

const Testimonial = () => {
  return (
    <section className="mx-4 md:mx-16 lg:mx-20 py-7">
      <h1 className="text-center text-4xl opacity-95">Food Lover's Say</h1>
      <div className="testimonial grid grid-cols-2 md:grid-cols-3 gap-y-8 sm:px-6 mt-4">
        {customersTestimonial.map((item, index) => (
          <article
            className="border border-white/70 lg:border-l-0 lg:last:border-r-0 pt-8 pb-16 px-4 lg:px-7 relative flex flex-col gap-5"
            key={index}
          >
            {/* Rating Stars */}
            <div className="mb-12">
              <div className="text-primary-color flex items-center gap-1 mb-1.5">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
              <q className="text-lg lg:text-2xl text-light-gray font-medium leading-[1.4]">
                {item.comment}
              </q>
            </div>
            {/* Customer Info */}
            <div className="flex items-center gap-2 absolute bottom-4">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
