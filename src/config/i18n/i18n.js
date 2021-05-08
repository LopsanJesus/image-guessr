import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { resources } from "./translations";
import languageDetector from "i18next-browser-languagedetector";
import en from "./translations/en.json";
import es from "./translations/es.json";

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      en: en,
      es: es,
    },
    order: [
      "navigator",
      "htmlTag",
      "querystring",
      "localStorage",
      "sessionStorage",
      "path",
      "subdomain",
      "cookie",
    ],

    supportedLngs: ["es", "en"],
    fallbackLng: "es",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
