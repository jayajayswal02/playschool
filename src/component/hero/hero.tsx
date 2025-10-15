"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './hero.module.css';
import heroImage1 from '../../assets/hero/hero1.jpg';
import heroImage2 from '../../assets/hero/hero2.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: "🎯", title: "Focused Learning", desc: "Age-appropriate curriculum", color: "#4F46E5" },
    { icon: "🎨", title: "Creative Expression", desc: "Arts and innovation", color: "#0891B2" },
    { icon: "🌱", title: "Holistic Growth", desc: "Character development", color: "#059669" },
    { icon: "💫", title: "Skill Building", desc: "Interactive programs", color: "#C026D3" }
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
        <div className={styles.pattern}></div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>✨</span>
              Trusted by 500+ Parents
            </div>

            <h1 className={styles.title}>
              Where Learning
              <br />
              Meets <span className={styles.highlight}>Wonder</span>
            </h1>

            <p className={styles.description}>
              Empowering young minds with innovative education that sparks curiosity,
              nurtures creativity, and builds a strong foundation for lifelong learning.
            </p>

            <div className={styles.featureGrid}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${styles.featureCard} ${activeFeature === index ? styles.active : ''}`}
                  style={{ '--accent-color': feature.color } as React.CSSProperties}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <button className={styles.primaryButton}>
                Start Journey
                <span className={styles.buttonIcon}>→</span>
              </button>
              <button className={styles.secondaryButton}>
                Watch Video
                <span className={styles.buttonIcon}>▶</span>
              </button>
            </div>

            <div className={styles.trustIndicators}>
              <div className={styles.rating}>
                <div className={styles.stars}>★★★★★</div>
                <span>5.0 Rating</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.certification}>
                <Image
                  src={heroImage1}
                  alt="Certification"
                  width={24}
                  height={24}
                />
                <span>Certified Excellence</span>
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={heroImage2}
                alt="Happy student learning"
                width={600}
                height={600}
                className={styles.mainImage}
                priority
              />
              <div className={styles.imageOverlay}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>15+</div>
                  <div className={styles.statLabel}>Years of Excellence</div>
                </div>
              </div>
              <div className={styles.floatingCards}>
                <div className={styles.achievementCard}>
                  <span className={styles.achievementIcon}>🏆</span>
                  <div className={styles.achievementText}>
                    Best Preschool Award 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;