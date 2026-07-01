import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

// Using lucide-react or simple SVGs for icons. 
// For exact dev icons, we could use external SVG URLs or paths.
const skillsUsing = [
  { name: 'JAVA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JAVASCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PYTHON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'SPRING', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'REACT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MYSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GIT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'DOCKER', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
];

const skillsLearning = [
  { name: 'TYPESCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'AI AGENTS', icon: 'https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png' }, // Generic robot/AI icon
  { name: 'BACKEND PERFORMANCE', icon: 'https://img.icons8.com/ios-filled/50/000000/speed.png' } // Generic speed icon
];

const skillsOther = [
  { name: 'ENGLISH', icon: '🇺🇸', isEmoji: true },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'HASKELL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg' },
  { name: 'RABBITMQ', icon: 'https://img.icons8.com/ios-filled/50/000000/rabbit.png' },
  { name: 'POSTGRESQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'SCRUM', icon: '/images/icon-scrum.png' }
];

const Skills = () => {
  const { t } = useLang();

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4, type: 'spring', bounce: 0.4 } }
  };

  const renderSkillGrid = (skills) => (
    <motion.div 
      className={styles.grid}
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skills.map((skill, index) => (
        <motion.div key={index} variants={itemVariants} className={styles.skillItem}>
          <div className={styles.iconWrapper}>
            {skill.isEmoji ? (
              <span className={styles.emojiIcon}>{skill.icon}</span>
            ) : (
              <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
            )}
          </div>
          <span className={styles.skillName}>{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.pageTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          [ {t('skills_title')} ]
        </motion.h2>

        <motion.div 
          className={styles.skillCategory}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.categoryTitle}>{t('skills_using')}</h3>
          {renderSkillGrid(skillsUsing)}
        </motion.div>

        <div className={styles.separator}></div>

        <motion.div 
          className={styles.skillCategory}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.categoryTitle}>{t('skills_learning')}</h3>
          {renderSkillGrid(skillsLearning)}
        </motion.div>

        <div className={styles.separator}></div>

        <motion.div 
          className={styles.skillCategory}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.categoryTitle}>{t('skills_other')}</h3>
          {renderSkillGrid(skillsOther)}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
