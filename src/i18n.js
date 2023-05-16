import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing translation files
import translationEN from "./locales/en/translation.json";
import translationHE from "./locales/hn/translation.json";
import translationEHN from "./locales/ehn/translation.json";
//Creating object with the variables of imported translation files
const resources = {
    en: {
        translation: translationEN,
    },
    hn: {
        translation: translationHE,
    },
    ehn: {
        translation: translationEHN
    }
};

//i18N Initialization
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ehn", //default language
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18nIntialization;
