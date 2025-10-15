"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <span className={styles.playText}>Play</span>
          <span className={styles.schoolText}>School</span>
        </Link>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
        </div>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/programs" className={styles.navLink}>Programs</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/activities" className={styles.navLink}>Activities</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={`${styles.navLink} ${styles.contactBtn}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;