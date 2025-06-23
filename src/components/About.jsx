import React from 'react';
import styles from '../styles/common.module.css';
import aboutComp from "../assets/about-company-bg.jpg";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`${styles.container} ${styles.aboutWrapper}`}>
        <div>
          <h2 className={styles.sectionTitle}>About Our Company</h2>
          <p>
            We specialize in delivering high‑quality, scalable software solutions designed to grow your business and delight your customers.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Our experienced team works hand‑in‑hand with you from ideation to deployment, ensuring reliability, security, and performance at every stage.
          </p>
        </div>
        <div>
          <img
            src={aboutComp}
            alt="Team collaborating"
            className={styles.aboutImg}
          />
        </div>
      </div>
    </section>
  );
}
