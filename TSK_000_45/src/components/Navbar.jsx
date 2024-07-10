import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleOff = () => {
    setMobileNav(false);
  };

  return (
    <>
      <header className="Xpadding py-7 relative">
        <div className="flex items-center justify-between">
          {/* Social Links */}
          <ul className="flex items-center gap-5">
            <li className="icon text-xl duration-300 hover:text-primary-color">
              <a href="/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="icon text-xl duration-300 hover:text-primary-color">
              <a href="/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li className="icon text-xl duration-300 hover:text-primary-color">
              <a href="/">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
          <h1 className="shopName text-[30px] md:text-5xl lg:text-[55px] italic text-primary-color cursor-pointer">
            The Cake Alchemist
          </h1>
          <div className="hidden lg:block">
            <Button bgColor={false} border={true}>
              Call Us: +92 334 5137178
            </Button>
          </div>
        </div>

        {/* Links */}
        <ul
          className={`${
            mobileNav ? "active" : "inactive"
          } navList hidden lg:flex items-center justify-center gap-6 mt-10 mb-5`}
        >
          <li onClick={handleOff} className="link afterLine">
            <Link to="/">home</Link>
          </li>
          <li onClick={handleOff} className="link afterLine">
            <a href="#about">about</a>
          </li>
          <li onClick={handleOff} className="link afterLine">
            <a href="#cakes">cakes</a>
          </li>
          <li onClick={handleOff} className="link afterLine">
            <a href="#blog">blog</a>
          </li>
          <li onClick={handleOff} className="link afterLine">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </header>

      {/* Hamburger Menu */}
      <div className="flex justify-end lg:hidden bg-nav-link-bg py-3 ">
        <div className="flex items-center gap-1 mr-3 bg-light-black px-2 py-0.5 rounded-[2px]">
          <strong className="uppercase">Menu</strong>
          <span
            onClick={handleNav}
            className="flex justify-center items-center text-xl cursor-pointer"
          >
            <ion-icon name="menu"></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
