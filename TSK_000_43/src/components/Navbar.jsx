import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-lg flex justify-around items-center py-7">
      <Link to="/" className="font-bold text-3xl">
        ReduxStore
      </Link>
      <Link
        to={"/cart"}
        className="text-xl font-semibold hover:text-white duration-200"
      >
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;
