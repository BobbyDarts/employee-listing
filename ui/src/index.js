import * as React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./state-management/store";
import { BreakpointProvider } from "./utilities/hooks/breakpoint";

import Loading from "./components/loading";
import Application from "./application";
import "./styles/assessment.css";

const queries = {
  xs: "(max-width: 639px)",
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BreakpointProvider queries={queries}>
        <React.Suspense fallback={<Loading />}>
          <Application />
        </React.Suspense>
      </BreakpointProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
