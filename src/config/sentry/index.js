import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const hostname = window.location.hostname;
const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

const DEV_CONFIG = {
  environment: "development",
  tracesSampleRate: 0.5,
};
const PROD_CONFIG = {
  environment: "production",
  tracesSampleRate: 0.2,
};

const getEnvConfig = () => {
  return process.env.NODE_ENV === "production"
    ? { ...PROD_CONFIG }
    : { ...DEV_CONFIG };
};

const customConfig = getEnvConfig();

export const configureSentry = () => {
  if (!isLocalhost) {
    return Sentry.init({
      dsn:
        "https://a2f2e14fe0f04c0394947a018ac8df0b@o565333.ingest.sentry.io/5706746",
      integrations: [new Integrations.BrowserTracing()],
      ...customConfig,
    });
  }
};
