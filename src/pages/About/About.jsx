import React from 'react';

import { useLang } from '../../context/LanguageContext';
import styles from './About.module.css';

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>

        <div className={styles.mainContent}>
          <h2 className={styles.title}>[ {t('about_title')} ]</h2>
          <p className={styles.text}>{t('about_text')}</p>
          <a href="#skills" className={styles.btnExplore}>
            [ {t('about_explore')} ]
          </a>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>[ {t('about_card1_title')} ]</h3>
            <p className={styles.cardText}>{t('about_card1_text')}</p>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>[ {t('about_card2_title')} ]</h3>
            <p className={styles.cardText}>{t('about_card2_text')}</p>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>[ {t('about_card3_title')} ]</h3>
            <p className={styles.cardText}>{t('about_card3_text')}</p>
          </div>
        </div>

        <div className={styles.separator}></div>

      </div>
    </section>
  );
};

export default About;
