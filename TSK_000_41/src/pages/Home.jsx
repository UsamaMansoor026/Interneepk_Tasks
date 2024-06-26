import React from "react";
import styles from "./Home.module.css";
import Hero from "../components/Hero/Hero";
import { logos } from "../assets/assets";

const Home = () => {
  return (
    <div>
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
        </div>
      </section>
    </div>
  );
};

export default Home;
