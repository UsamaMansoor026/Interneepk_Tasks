import React from "react";

const Button = ({ children, bgColor, border }) => {
  return (
    <div>
      <button
        className={`${
          bgColor
            ? "bg-primary-color text-sec-text hover:bg-transparent hover:text-white"
            : "bg-transparent hover:bg-primary-color hover:text-white"
        } ${
          border ? "border border-primary-color" : "border-none"
        } py-2 px-6 text-primary-color font-bold duration-300 relative z-[500]`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
