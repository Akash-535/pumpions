import React from "react";

const Heading = ({ myClass, text }) => {
  return (
    <h2
      className={`text-4xl font-normal leading-229 uppercase max-md:text-2xl ${myClass}`}
    >
      {text}
    </h2>
  );
};

export default Heading;
