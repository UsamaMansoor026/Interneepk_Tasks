import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { internships } from "../../assets/assets";
import Card from "../Card/Card";
import styles from "../Card/Card.module.css";

const Internships = () => {
  return (
    <section className={styles.internshipSection}>
      <Swiper
        className={styles.slider}
        breakpoints={{
          600: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 1,
          },
        }}
        loop={true}
        direction="horizontal"
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {internships.map((internship, index) => (
          <SwiperSlide key={index}>
            <Card internship={internship} />
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="text-center mt-5 pb-8 text-white text-2xl">
        Learn Skills, <span className="font-bold">Market will me yours.</span>
      </h2>
    </section>
  );
};

export default Internships;
