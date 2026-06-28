import React from 'react';
import { useLang } from '../../context/LanguageContext';
import styles from './Portfolio.module.css'; // sharing module styles for simplicity or its own if preferred. Using Portfolio.module.css

const ProjectCard = ({ project }) => {
  const { t } = useLang();

  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.projectCard}
    >
      <img 
        src={`/images/${project.imageKey}`} 
        alt={t(project.titleKey)} 
        className={styles.projectImage} 
      />
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <h3 className={styles.overlayTitle}>{t(project.titleKey)}</h3>
          <p className={styles.overlayDesc}>{t(project.descKey)}</p>
          <span className={styles.overlayBtn}>[ {t(project.linkLabelKey)} ]</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
