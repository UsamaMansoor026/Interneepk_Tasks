import React from "react";
import Logo from "../assets/mainLogo.webp";

const Header = () => {
  return (
    <nav className="flex items-center gap-8">
      {/* Logo */}
      <div>
        <img className="w-[200px]" src={Logo} alt="Internee.pk" />
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <a href="/">Internship</a>
        </li>
        <li>
          <a href="/">Company Collaborations</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <div>
            <button>Job Portal</button>
            <button>Internee's Login</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
