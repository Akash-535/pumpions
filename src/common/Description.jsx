import React from "react";

const Description = ({ myClass, text }) => {
  return (
    <p
      className={`text-sm leading-229 uppercase max-lg:leading-204 ${myClass}`}
    >
      {text}
    </p>
  );
};

export default Description;
