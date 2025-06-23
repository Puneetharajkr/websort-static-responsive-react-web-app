import React from 'react';
import { FaRocket, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import styles from '../styles/common.module.css';

const features = [
  {
    icon: <FaRocket size={40} color="#4f46e5" />,
    title: 'Fast Performance',
    description: 'Blazing fast load times and lag-free interaction.'
  },
  {
    icon: <FaMobileAlt size={40} color="#4f46e5" />,
    title: 'Responsive Design',
    description: 'Looks great on mobile, tablet, and desktop.'
  },
  {
    icon: <FaShieldAlt size={40} color="#4f46e5" />,
    title: 'Secure & Reliable',
    description: 'Security best practices for peace of mind.'
  }
];

export default function Features() {
  return (
    <section id="features" className={`${styles.section} ${styles.sectionGray}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((f, idx) => (
            <div key={idx} className={styles.featureCard}>
              {f.icon}
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
