import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { projects } from './projects';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const { t } = useLang();

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <h2 className={styles.pageTitle}>[ {t('portfolio_title')} ]</h2>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <p className={styles.moreText}>{t('portfolio_more')}</p>
      </div>
    </section>
  );
};

export default Portfolio;
