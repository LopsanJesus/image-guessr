import ReactGA from "react-ga";

export const configureAnalytics = () => {
  const TRACKING_ID = "G-HDH8D0B2PZ"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
};
