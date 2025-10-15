"use client";
import { useState } from 'react';
import styles from './contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Get in Touch</span>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.sectionDesc}>
            We're here to help and answer any questions you might have
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className={styles.icon}>📞</i>
              </div>
              <h3>Call Us</h3>
              <p>Mon - Fri, 8:00 AM - 6:00 PM</p>
              <a href="tel:+1234567890" className={styles.contactLink}>
                +1 (234) 567-890
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className={styles.icon}>📧</i>
              </div>
              <h3>Email Us</h3>
              <p>We'll respond within 24 hours</p>
              <a href="mailto:info@playschool.com" className={styles.contactLink}>
                info@playschool.com
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className={styles.icon}>💬</i>
              </div>
              <h3>WhatsApp</h3>
              <p>Quick responses on WhatsApp</p>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contactLink}
              >
                Message us on WhatsApp
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>
                <i>📱</i>
              </a>
              <a href="#" className={styles.socialIcon}>
                <i>📘</i>
              </a>
              <a href="#" className={styles.socialIcon}>
                <i>📸</i>
              </a>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={5}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className={styles.mapSection}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={styles.locationInfo}>
            <h3>Visit Us</h3>
            <p>123 Education Street</p>
            <p>Cityville, State 12345</p>
            <button className={styles.directionsButton}>
              Get Directions
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;