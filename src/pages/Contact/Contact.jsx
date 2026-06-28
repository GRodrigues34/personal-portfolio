import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { Mail, MessageCircle, Instagram, Linkedin, Github } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const { t } = useLang();

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>[ {t('contact_title')} ]</h2>
        <p className={styles.subtitle}>{t('contact_subtitle')}</p>
        
        <div className={styles.separator}></div>
        
        <div className={styles.iconsRow}>
          <a href="mailto:devrodriguesc@gmail.com" className={styles.iconLink}>
            <Mail size={32} />
          </a>
          <a href="https://wa.me/5535984788359" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <MessageCircle size={32} />
          </a>
          <a href="https://www.instagram.com/rodrigues._dev/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Instagram size={32} />
          </a>
          <a href="https://www.linkedin.com/in/gustavo-rodrigues-a25ab9303/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Linkedin size={32} />
          </a>
          <a href="https://github.com/GRodrigues34" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Github size={32} />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
