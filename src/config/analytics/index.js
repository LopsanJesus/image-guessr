import ReactGA from "react-ga";

export const configureAnalytics = () => {
  const TRACKING_ID = "UA-193183415-2"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
};
