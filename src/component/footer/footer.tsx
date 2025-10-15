"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* School Info */}
            <div className={styles.schoolInfo}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoText}>
                  <span className={styles.playText}>Play</span>
                  <span className={styles.schoolText}>School</span>
                </span>
              </Link>
              <p className={styles.schoolDesc}>
                Nurturing young minds and building strong foundations for a brighter future.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon}>
                  <i>📘</i> {/* Facebook */}
                </a>
                <a href="#" className={styles.socialIcon}>
                  <i>📸</i> {/* Instagram */}
                </a>
                <a href="#" className={styles.socialIcon}>
                  <i>🐦</i> {/* Twitter */}
                </a>
                <a href="#" className={styles.socialIcon}>
                  <i>📱</i> {/* LinkedIn */}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.linksColumn}>
              <h3>Quick Links</h3>
              <ul className={styles.linksList}>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li><Link href="/activities">Activities</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div className={styles.linksColumn}>
              <h3>Programs</h3>
              <ul className={styles.linksList}>
                <li><Link href="/programs/toddler">Toddler Program</Link></li>
                <li><Link href="/programs/preschool">Preschool</Link></li>
                <li><Link href="/programs/kindergarten">Kindergarten</Link></li>
                <li><Link href="/programs/afterschool">After School</Link></li>
                <li><Link href="/programs/summer">Summer Camp</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className={styles.newsletterColumn}>
              <h3>Newsletter</h3>
              <p>Subscribe to receive updates and news about our school</p>
              <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Strip */}
      <div className={styles.contactStrip}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <i className={styles.icon}>📍</i>
              <span>123 Education Street, Cityville, ST 12345</span>
            </div>
            <div className={styles.contactItem}>
              <i className={styles.icon}>📞</i>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className={styles.contactItem}>
              <i className={styles.icon}>📧</i>
              <a href="mailto:info@playschool.com">info@playschool.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} PlaySchool. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;