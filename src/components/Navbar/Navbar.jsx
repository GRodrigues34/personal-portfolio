import React, { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          GR
        </a>

        <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <a href="#about" className={styles.link} onClick={closeMenu}>
            {t('nav_about')}
          </a>
          <a href="#skills" className={styles.link} onClick={closeMenu}>
            {t('nav_skills')}
          </a>
          <a href="#portfolio" className={styles.link} onClick={closeMenu}>
            {t('nav_portfolio')}
          </a>
          <a href="#contact" className={styles.btnContact} onClick={closeMenu}>
            {t('nav_contact')}
          </a>
          
          <div className={styles.langWrapper}>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
