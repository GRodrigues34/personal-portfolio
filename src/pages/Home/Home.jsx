import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { Github, Linkedin, Instagram } from 'lucide-react';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import styles from './Home.module.css';

const Home = () => {
  const { t } = useLang();

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.leftCol}>
        <div className={styles.content}>
          <span className={styles.greeting}>{t('home_greeting')}</span>
          <TypingEffect text={t('home_name')} className={styles.name} />
          <h2 className={styles.title}>{t('home_title')}</h2>

          <div className={styles.socialLinks}>
            <a href="https://github.com/GRodrigues34" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/gustavo-rodrigues-a25ab9303/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/rodrigues._dev/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
          </div>
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
