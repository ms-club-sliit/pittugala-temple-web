'use client'
import { createContext } from 'react';

import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translate_en from '../data/translations/english.json';
import translate_si from '../data/translations/sinhala.json';

const LangContext = createContext();

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translate_en },
        si: { translation: translate_si },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export const LangProvider = ({ children }) => {
    const { t, i18n } = useTranslation();

    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
    }

    return (
        <LangContext.Provider value={{ t, changeLanguage }}>
            {children}
        </LangContext.Provider>
    );
}

export default LangContext;

