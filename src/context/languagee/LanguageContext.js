import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const translations = {
    en: { message: 'Hello' },
    es: { message: 'Hola' },
  };

  return (
    <LanguageContext.Provider
      value={{ translations, language, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
