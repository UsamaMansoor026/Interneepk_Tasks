import React from "react";

const Button = ({ children, isBackground }) => {
  return (
    <div
      className={`${
        isBackground ? "bg-primary text-white" : "text-primary"
      } border-2 border-primary hover:opacity-80 duration-200 cursor-pointer font-semibold rounded-[50px] px-[23px] py-[13px] text-[16px]`}
    >
      {children}
    </div>
  );
};

export default Button;
