import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { resources } from "./translations";
import en from "./translations/en.json";
import es from "./translations/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    es: es,
  },

  supportedLngs: ["en", "es"],
  fallbackLng: "es",
  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
