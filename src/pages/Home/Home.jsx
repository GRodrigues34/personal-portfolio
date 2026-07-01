import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { Github, Linkedin, Instagram } from 'lucide-react';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

const Home = () => {
  const { t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.8, // Wait for typing effect to finish
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.leftCol}>
        <div className={styles.content}>
          <span className={styles.greeting}>{t('home_greeting')}</span>
          <TypingEffect text={t('home_name')} className={styles.name} />
          <h2 className={styles.title}>{t('home_title')}</h2>

          <motion.div
            className={styles.socialLinks}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.a variants={itemVariants} whileHover={{ scale: 1.1, opacity: 0.8 }} href="https://github.com/GRodrigues34" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </motion.a>
            <motion.a variants={itemVariants} whileHover={{ scale: 1.1, opacity: 0.8 }} href="https://www.linkedin.com/in/gustavo-rodrigues-a25ab9303/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </motion.a>
            <motion.a variants={itemVariants} whileHover={{ scale: 1.1, opacity: 0.8 }} href="https://www.instagram.com/rodrigues._dev/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className={styles.rightCol}>
        <img
          src="/images/photo-gustavo.jpg"
          alt="Gustavo Rodrigues — Backend & Frontend Developer"
          className={styles.profileImg}
        />
      </div>
    </section>
  );
};

export default Home;
