import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { internships } from "../../assets/assets";
import Card from "../Card/Card";

const Internships = () => {
  return (
    <section>
      <Swiper
        breakpoints={{
          600: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {internships.map((internship, index) => (
          <SwiperSlide key={index}>
            <Card internship={internship} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Internships;
