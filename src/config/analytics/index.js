import ReactGA from "react-ga";

export const configureAnalytics = () => {
  const TRACKING_ID = "G-MCBD24VGWW"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
};
