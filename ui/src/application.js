import * as React from "react";

import Header from "./components/header";
import Employees from "./pages/employees";

const Application = (props) => (
  <div className="bg-gray-200 min-h-screen">
    <Header />
    <Employees />
  </div>
);

export default Application;
