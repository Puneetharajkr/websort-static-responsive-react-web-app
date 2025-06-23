import React from 'react';
import styles from '../styles/common.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Cimo. All rights reserved.</p>
      <div style={{ marginTop: '1rem' }}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
}
