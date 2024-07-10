import React from "react";
import "../index.css";
import { galleryImages } from "../assets/assets";

const Banner = ({ children }) => {
  return (
    <div
      style={{ background: `url(${galleryImages.Gallery1})` }}
      className="bannerClass md:h-[600px]"
    >
      {children}
    </div>
  );
};

export default Banner;
