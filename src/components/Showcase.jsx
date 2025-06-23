// src/components/Showcase.jsx
import React from "react";
import styles from "../styles/common.module.css";
import aiImg from "../assets/ai-iot.jpg"; // replace with real images
import uiuxImg from "../assets/uiux-mobile.jpg";
import webImg from "../assets/web-dev.jpg";

export default function Showcase() {
  const items = [
    { img: aiImg, title: "AI & IoT", subtitle: "Advanced Solutions" },
    { img: uiuxImg, title: "UI / UX Design", subtitle: "Mobile & Web Apps" },
    { img: webImg, title: "Web Development", subtitle: "Modern Interfaces" },
  ];

  return (
    <section className={`${styles.section} ${styles.showcaseSection}`}>
      <h2 className={styles.sectionTitle}>Why We Stand Out</h2>
      <div className={styles.showcaseGrid}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.showcaseCard}>
            <img src={item.img} alt={item.title} className={styles.showcaseImg} />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
