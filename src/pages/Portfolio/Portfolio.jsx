import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { projects } from './projects';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const { t } = useLang();

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.pageTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          [ {t('portfolio_title')} ]
        </motion.h2>
        
        <motion.div 
          className={styles.projectsGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        <p className={styles.moreText}>{t('portfolio_more')}</p>
      </div>
    </section>
  );
};

export default Portfolio;
