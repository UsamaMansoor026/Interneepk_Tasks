import React from "react";
import Logo from "../assets/mainLogo.webp";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="flex items-center justify-between container py-7 bg-pink-200 mx-auto">
      {/* Logo */}
      <div>
        <img
          className="w-[200px] cursor-pointer"
          src={Logo}
          alt="Internee.pk"
        />
      </div>
      <ul className="flex items-center gap-2">
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
          <div className="flex items-center gap-2">
            <Button isBackground={true}>Job Portal</Button>
            <Button isBackground={false}>Internee's Login</Button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
