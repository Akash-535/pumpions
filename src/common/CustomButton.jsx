import React from "react";

const CustomButton = ({ text, myClass, textTwo }) => {
  return (
    <button
      className={`bg-[url(/assets/images/button-bg.webp)] bg-cover bg-center bg-no-repeat w-full max-w-[254px] mx-auto cursor-pointer min-h-[69px] relative max-h-[69px] overflow-hidden group ${myClass}`}
    >
      <span className="absolute top-1/2 left-0 -translate-y-1/2 text-center w-full group-hover:-top-full duration-300 ease-linear">
        {text}
      </span>
      <span className="absolute -bottom-full left-0 translate-y-1/2 text-center w-full group-hover:bottom-1/2 duration-300 ease-linear">
        {textTwo}
      </span>
    </button>
  );
};

export default CustomButton;
