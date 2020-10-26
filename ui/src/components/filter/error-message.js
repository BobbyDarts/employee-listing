import * as React from "react";

const ErrorMessage = ({ error }) => (
  <div className="p-0 text-red-500 text-xs">
    {error ? error.message : "\u00A0"}
  </div>
);

export default ErrorMessage;
