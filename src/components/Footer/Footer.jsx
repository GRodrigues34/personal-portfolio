import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { Github, Linkedin, Instagram, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useLang();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.backToTop} onClick={scrollToTop}>
          <ArrowUp size={20} />
          <span>{t('footer_top')}</span>
        </div>
        
        <div className={styles.socialIcons}>
          <a href="https://github.com/GRodrigues34" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/gustavo-rodrigues-a25ab9303/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/rodrigues._dev/" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
          <a href="mailto:devrodriguesc@gmail.com">
            <Mail size={24} />
          </a>
          <a href="https://wa.me/5535984788359" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={24} />
          </a>
        </div>
        
        <div className={styles.copyright}>
          © 2025 Gustavo Rodrigues — {t('footer_rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
