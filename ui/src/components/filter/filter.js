import * as React from "react";

const Filter = ({ onSubmit, children, ...rest }) => (
  <form onSubmit={onSubmit} {...rest}>
    {children}
  </form>
);

export default Filter;
