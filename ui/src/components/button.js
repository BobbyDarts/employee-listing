import * as React from "react";

const Button = ({ wide = false, className = "", children, ...rest }) => (
  <button
    className={`${
      wide ? "w-full" : ""
    } ${className} bg-primary-500 hover:bg-primary-400 text-white font-bold text-xl uppercase rounded focus:outline-none focus:shadow-primary px-2`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
