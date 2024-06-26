import React, { useEffect, useState } from "react";
import Logo from "../assets/mainLogo.webp";
import Button from "./Button";

const Header = () => {
  /* Tracking the Windows Width */
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowsWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    if (windowsWidth > 1100) {
      setToggleMenu(false);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowsWidth]);

  /* State that handle menu toggle */
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="flex items-center justify-between relative px-16 py-7 shadow-lg mx-auto">
      {/* Logo */}
      <div>
        <img
          className="w-[200px] cursor-pointer"
          src={Logo}
          alt="Internee.pk"
        />
      </div>

      {/* Links and Buttons */}
      <ul className={`${toggleMenu ? "activeMenu" : "menu"}`}>
        <li className="li">
          <a href="/">Internship</a>
        </li>
        <li className="li">
          <a href="/">Company Collaborations</a>
        </li>
        <li className="li">
          <a href="/">Contact Us</a>
        </li>
        <li>
          <div className="btn__container">
            <Button isBackground={true}>Job Portal</Button>
            <Button isBackground={false}>Internee's Login</Button>
          </div>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={() => handleMenu()} className="hamburger">
        <ion-icon
          name={`${toggleMenu ? "close-sharp" : "menu-sharp"}`}
        ></ion-icon>
      </div>
    </nav>
  );
};

export default Header;
