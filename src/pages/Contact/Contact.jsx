import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { Mail, MessageCircle, Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  const { t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          [ {t('contact_title')} ]
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('contact_subtitle')}
        </motion.p>
        
        <div className={styles.separator}></div>
        
        <motion.div 
          className={styles.iconsRow}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.a variants={iconVariants} whileHover={{ scale: 1.15, opacity: 0.7 }} href="mailto:devrodriguesc@gmail.com" className={styles.iconLink}>
            <Mail size={32} />
          </motion.a>
          <motion.a variants={iconVariants} whileHover={{ scale: 1.15, opacity: 0.7 }} href="https://wa.me/5535984788359" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <MessageCircle size={32} />
          </motion.a>
          <motion.a variants={iconVariants} whileHover={{ scale: 1.15, opacity: 0.7 }} href="https://www.instagram.com/rodrigues._dev/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Instagram size={32} />
          </motion.a>
          <motion.a variants={iconVariants} whileHover={{ scale: 1.15, opacity: 0.7 }} href="https://www.linkedin.com/in/gustavo-rodrigues-a25ab9303/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Linkedin size={32} />
          </motion.a>
          <motion.a variants={iconVariants} whileHover={{ scale: 1.15, opacity: 0.7 }} href="https://github.com/GRodrigues34" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Github size={32} />
          </motion.a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
