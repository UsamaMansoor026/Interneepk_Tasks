import React from "react";
import styles from "./Home.module.css";
import Hero from "../components/Hero/Hero";
import { internshipCards, logos } from "../assets/assets";
import Internships from "../components/Internship/Internships";
import { InternshipImageCard } from "../components/Card/Card";
import Blog from "../components/Blog/Blog";
import Jobs from "../components/Jobs/Jobs";
import WhyUs from "../components/WhyUs/WhyUs";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div className={styles.shadowDamn}>
        <img src={logos.mainLogo} alt="Internee.pk" />
      </div>
      <Hero />

      <section className="mt-20 md:mt-36">
        <div className="flex justify-center">
          <img className="w-20" src={logos.Logo} alt="" />
        </div>
        <div className="flex flex-col text-center mt-6 gap-5">
          <h1 className={styles.tagline}>Who is internee.pk?</h1>
          <p className={styles.secSubText}>
            The ultimate platform designed to turbocharge the IT sector in
            Pakistan! We recognize the immense potential of talented individuals
            in the country and aim to bridge the gap between them and the
            thriving IT industry. Internee.pk offers a comprehensive range of
            virtual internship opportunities exclusively in the IT field.
          </p>
          <p className="font-bold text-lg text-secondary">
            👇 Click Below and grab your internship now 👇
          </p>
        </div>
        <Internships />
      </section>

      {/* ======== */}
      <div className={styles.container}>
        <p>
          <span>Internships every months</span> Introducing Internee.pk, the
          ultimate platform designed to turbocharge the IT sector in Pakistan!
          We recognize the immense potential of talented individuals in the
          country and aim to bridge the gap between them and the thriving IT
          industry. Internee.pk offers a comprehensive range of virtual
          internship opportunities exclusively in the IT field.
        </p>
        <div>
          <button className={styles.smallBtn}>Browse Internship</button>
        </div>
      </div>

      {/* ======= */}
      <section className={styles.internshipWrapper}>
        {internshipCards.map((item) => (
          <InternshipImageCard item={item} />
        ))}
      </section>

      {/* Blog */}
      <Blog />

      {/* Jobs */}
      <Jobs />

      {/* why US */}
      <WhyUs />

      {/* Testimonials */}
      <Testimonial />
    </>
  );
};

export default Home;
