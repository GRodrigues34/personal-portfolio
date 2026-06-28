import React from 'react';
import { useLang } from '../../context/LanguageContext';
import styles from './LanguageToggle.module.css';

const LanguageToggle = () => {
  const { lang, toggleLang, t } = useLang();

  return (
    <button onClick={toggleLang} className={styles.toggleBtn}>
      <span className={styles.label}>{t('lang_label')}</span>
      <span className={styles.flag}>{lang === 'en' ? '🇺🇸' : '🇧🇷'}</span>
    </button>
  );
};

export default LanguageToggle;
