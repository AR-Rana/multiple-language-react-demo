import React from "react";
import './App.css';
import './i18nextSetup';
import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.language === 'en' ? i18n.changeLanguage('bn') : i18n.changeLanguage('en');
  }
  return (
    <div>
      <h2>{t('welcome-text')}</h2>
      <button onClick={changeLanguage}>{t('change-lang-btn-text')}</button>
    </div>
  )
}

export default App;
