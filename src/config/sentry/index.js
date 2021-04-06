import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const DEV_CONFIG = {
  environment: "development",
  tracesSampleRate: 1.0,
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
  Sentry.init({
    dsn:
      "https://a2f2e14fe0f04c0394947a018ac8df0b@o565333.ingest.sentry.io/5706746",
    integrations: [new Integrations.BrowserTracing()],
    ...customConfig,
  });
};
