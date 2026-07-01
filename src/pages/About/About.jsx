import React from 'react';

import { useLang } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const { t } = useLang();

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>

        <motion.div 
          className={styles.mainContent}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>[ {t('about_title')} ]</h2>
          <p className={styles.text}>{t('about_text')}</p>
          <a href="#skills" className={styles.btnExplore}>
            [ {t('about_explore')} ]
          </a>
        </motion.div>

        <div className={styles.separator}></div>

        <motion.div 
          className={styles.servicesGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={cardVariants} className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>[ {t('about_card1_title')} ]</h3>
            <p className={styles.cardText}>{t('about_card1_text')}</p>
          </motion.div>
          <motion.div variants={cardVariants} className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>[ {t('about_card2_title')} ]</h3>
            <p className={styles.cardText}>{t('about_card2_text')}</p>
          </motion.div>
          <motion.div variants={cardVariants} className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>[ {t('about_card3_title')} ]</h3>
            <p className={styles.cardText}>{t('about_card3_text')}</p>
          </motion.div>
        </motion.div>

        <div className={styles.separator}></div>

      </div>
    </section>
  );
};

export default About;
