// src/components/Header.jsx
import React, { useState } from "react";
import styles from "../styles/common.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.navbar}`}>
        <div className={styles.logo}>Cimo</div>

        <nav className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.menuToggle} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>

      <div
        className={`${styles.mobileMenuOverlay} ${
          isOpen ? styles.showMobileMenu : ""
        }`}
      >
        <a href="#features" onClick={closeMenu}>
          Features
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </header>
  );
}
