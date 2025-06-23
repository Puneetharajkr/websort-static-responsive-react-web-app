import React from 'react';
import styles from '../styles/common.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.container} ${styles.contactSection}`}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <form className={styles.contactForm}>
          <div className={styles.inputRow}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
