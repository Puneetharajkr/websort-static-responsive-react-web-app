import React from 'react';
import heroBg from '../assets/hero-bg.jpg';
import styles from '../styles/common.module.css';

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.heroOverlay}>
        <h1 className={styles.heroTitle}>Empower Your Business</h1>
        <p className={styles.heroText}>Solutions tailored to your growth.</p>
        <a href="#contact" className={styles.button}>Get Started</a>
      </div>
    </section>
  );
}
