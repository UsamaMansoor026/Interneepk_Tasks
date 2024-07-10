import React from "react";
import Button from "./Button";
import { instaImgGallery } from "../assets/assets";

const InstagramGallery = () => {
  return (
    <>
      <h2 className="mt-24 text-center text-[36px] md:text-5xl mb-9">
        Follow us on Instagram
      </h2>
      <div className="text-center">
        <Button bgColor={false} border={true}>
          <div className="flex items-center gap-2">
            <span className="flex items-center">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
            <span>CakesShop</span>
          </div>
        </Button>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 lg:grid-cols-4 dash mx-9 md:mx-16 lg:mx-24 gap-5 py-12">
        {instaImgGallery.map((image) => (
          <div className="overflow-hidden">
            <img
              src={image.image}
              className="w-full cursor-pointer duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default InstagramGallery;
