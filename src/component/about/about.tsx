"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './about.module.css';
import aboutImage1 from '../../assets/about/about1.png';
import aboutImage2 from '../../assets/about/about2.png';
import aboutImage3 from '../../assets/about/about3.png';
import aboutImage4 from '../../assets/about/about4.png';
import aboutImage5 from '../../assets/about/about5.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${styles.fadeIn}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const staffMembers = [
    {
      name: "Sarah Johnson",
      role: "Principal",
      bio: "20+ years in early education, passionate about child development",
      image: aboutImage2
    },
    {
      name: "David Chen",
      role: "Head Teacher",
      bio: "Specializes in creative learning methodologies",
      image: aboutImage3
    },
    {
      name: "Maria Garcia",
      role: "Art Director",
      bio: "Brings creativity to every classroom",
      image: aboutImage4
    },
    {
      name: "James Wilson",
      role: "Activities Coordinator",
      bio: "Expert in child physical development",
      image: aboutImage5
    }
  ];

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.container}>
        {/* Mission, Vision & Values Section */}
        <div className={`${styles.mvvSection} ${styles.fadeIn}`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>About Us</span>
            <h2 className={styles.sectionTitle}>Our Guiding Principles</h2>
          </div>

          <div className={styles.tabContainer}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'mission' ? styles.active : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Mission
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'vision' ? styles.active : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Vision
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'values' ? styles.active : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Values
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'mission' && (
              <div className={styles.tabPanel}>
                <h3>Our Mission</h3>
                <p>To provide exceptional early education that nurtures each child&apos;s unique potential while fostering a love for learning that lasts a lifetime.</p>
                <ul className={styles.bulletPoints}>
                  <li>Personalized Learning Approach</li>
                  <li>Safe and Nurturing Environment</li>
                  <li>Holistic Development Focus</li>
                </ul>
              </div>
            )}
            {activeTab === 'vision' && (
              <div className={styles.tabPanel}>
                <h3>Our Vision</h3>
                <p>To be the leading innovator in early childhood education, setting new standards for learning and development.</p>
                <ul className={styles.bulletPoints}>
                  <li>Future-Ready Education</li>
                  <li>Global Perspective</li>
                  <li>Community Leadership</li>
                </ul>
              </div>
            )}
            {activeTab === 'values' && (
              <div className={styles.tabPanel}>
                <h3>Our Values</h3>
                <div className={styles.valueGrid}>
                  <div className={styles.valueCard}>
                    <span className={styles.valueIcon}>🎯</span>
                    <h4>Excellence</h4>
                    <p>Setting high standards in education</p>
                  </div>
                  <div className={styles.valueCard}>
                    <span className={styles.valueIcon}>💡</span>
                    <h4>Innovation</h4>
                    <p>Embracing modern learning methods</p>
                  </div>
                  <div className={styles.valueCard}>
                    <span className={styles.valueIcon}>🤝</span>
                    <h4>Integrity</h4>
                    <p>Building trust through transparency</p>
                  </div>
                  <div className={styles.valueCard}>
                    <span className={styles.valueIcon}>🌱</span>
                    <h4>Growth</h4>
                    <p>Nurturing continuous development</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Founder's Message Section */}
        <div className={`${styles.founderSection} ${styles.fadeIn}`}>
          <div className={styles.founderContent}>
            <div className={styles.founderImageWrapper}>
              <Image
                src={aboutImage1}
                alt="School Founder"
                width={400}
                height={400}
                className={styles.founderImage}
              />
              <div className={styles.founderBadge}>
                <span>Est. 2010</span>
              </div>
            </div>
            <div className={styles.founderMessage}>
              <h3>Founder&apos;s Message</h3>
              <p className={styles.messageQuote}>
                &quot;Our journey began with a simple yet powerful vision: to create a space where 
                every child&apos;s potential is recognized and nurtured. Today, that vision has 
                blossomed into a thriving community of learners.&quot;
              </p>
              <div className={styles.founderInfo}>
                <h4>Dr. Emily Anderson</h4>
                <span>Founder & Director</span>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Section */}
        <div className={`${styles.staffSection} ${styles.fadeIn}`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Team</span>
            <h2 className={styles.sectionTitle}>Meet Our Educators</h2>
            <p className={styles.sectionDesc}>
              Dedicated professionals committed to providing the best education for your children
            </p>
          </div>

          <div className={styles.staffGrid}>
            {staffMembers.map((member, index) => (
              <div key={index} className={styles.staffCard}>
                <div className={styles.staffImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className={styles.staffImage}
                  />
                </div>
                <div className={styles.staffInfo}>
                  <h3>{member.name}</h3>
                  <span className={styles.staffRole}>{member.role}</span>
                  <p className={styles.staffBio}>{member.bio}</p>
                  <div className={styles.staffSocial}>
                    <a href="#" className={styles.socialLink}>LinkedIn</a>
                    <a href="#" className={styles.socialLink}>Email</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${styles.fadeIn}`}>
          <div className={styles.ctaContent}>
            <h3>Join Our Educational Community</h3>
            <p>Take the first step towards your child&apos;s bright future</p>
            <button className={styles.ctaButton}>
              Schedule a Visit
              <span className={styles.buttonIcon}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;