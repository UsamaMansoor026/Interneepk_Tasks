import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-3">
      <hr className="mx-3 md:mx-16 lg:mx-20 bg-white/60 h-[1px] border-none" />

      <div className="my-16 mx-5 md:mx-16 lg:mx-20 flex flex-col justify-start items-start lg:gap-0 gap-9 lg:flex-row lg:justify-between lg:items-center">
        {/* Social Links */}
        <ul className="flex items-center gap-2 flex-wrap">
          <li className="border border-white/60 py-3 px-6 flex items-center gap-2 cursor-pointer hover:text-primary-color hover:border-primary-color duration-200">
            <a href="/" className="flex justify-center items-center">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <span className="font-semibold">Facebook</span>
          </li>
          <li className="border border-white/60 py-3 px-6 flex items-center gap-2 cursor-pointer hover:text-primary-color hover:border-primary-color duration-200">
            <a href="/" className="flex justify-center items-center">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <span className="font-semibold">Instagram</span>
          </li>
          <li className="border border-white/60 py-3 px-6 flex items-center gap-2 cursor-pointer hover:text-primary-color hover:border-primary-color duration-200">
            <a href="/" className="flex justify-center items-center">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <span className="font-semibold">Twitter</span>
          </li>
        </ul>

        {/* Address and contact number */}
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-[60%] lg:w-[40%] flex flex-col gap-2">
            <p className="text-primary-color font-semibold text-xl">Address</p>
            <p className="">4736 Poe Lane, HOT SPRINGS, Montana-59845</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-primary-color font-semibold text-xl">Contact</p>
            <p className="leading-tight">
              913-473-7000 <br /> contact@cakeshop.com
            </p>
          </div>
        </div>
      </div>

      <hr className="mx-3 md:mx-16 lg:mx-20 bg-white/60 h-[1px] border-none" />
      <p className="text-center mt-5">Copyright &copy; | All right reserved</p>
    </footer>
  );
};

export default Footer;
