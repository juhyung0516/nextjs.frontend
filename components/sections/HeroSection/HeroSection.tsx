import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hero Section</h1>
          <p className={styles.heroSubtitle}>
            This is the subtitle for the hero section.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
