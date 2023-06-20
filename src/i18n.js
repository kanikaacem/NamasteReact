import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing translation files
import translationEN from "./locales/en/translation.json";
import translationHI from "./locales/hi/translation.json";
import translationEHN from "./locales/ehn/translation.json";
//Creating object with the variables of imported translation files
const resources = {
    en: {
        translation: translationEN,
    },
    hi: {
        translation: translationHI,
    },
    hn: {
        translation: translationEHN
    }
};
const i18nIntialization = (storeData) => {
    // Use the storeData as needed for language translation
    // ...
    let language = localStorage.getItem('locale')
    i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: language,//storeData.currentLanguage, //default language
            fallbackLng: "hn",
            keySeparator: false,
            interpolation: {
                escapeValue: false,
            },
        });
};

export default i18nIntialization;
