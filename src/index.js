import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./config/i18n/i18n";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { configureAnalytics } from "./config/analytics";
import { configureSentry } from "./config/sentry";

configureAnalytics();

configureSentry();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
