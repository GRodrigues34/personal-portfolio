import React from 'react';
import { useLang } from '../../context/LanguageContext';
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

  const renderSkillGrid = (skills) => (
    <div className={styles.grid}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          <div className={styles.iconWrapper}>
            {skill.isEmoji ? (
              <span className={styles.emojiIcon}>{skill.icon}</span>
            ) : (
              <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
            )}
          </div>
          <span className={styles.skillName}>{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.pageTitle}>[ {t('skills_title')} ]</h2>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>{t('skills_using')}</h3>
          {renderSkillGrid(skillsUsing)}
        </div>

        <div className={styles.separator}></div>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>{t('skills_learning')}</h3>
          {renderSkillGrid(skillsLearning)}
        </div>

        <div className={styles.separator}></div>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>{t('skills_other')}</h3>
          {renderSkillGrid(skillsOther)}
        </div>

      </div>
    </section>
  );
};

export default Skills;
