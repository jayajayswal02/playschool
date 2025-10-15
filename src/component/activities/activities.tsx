"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './activities.module.css';
import activitiesImage1 from '../../assets/activities/activities1.png';
import activitiesImage2 from '../../assets/activities/activities2.png'; 
import activitiesImage3 from '../../assets/activities/activities3.png';

const ParentResources = () => {
  const [activeTab, setActiveTab] = useState('calendar');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the school hours?",
      answer: "Our school operates from 8:00 AM to 3:30 PM, Monday through Friday. Extended care is available from 7:00 AM to 6:00 PM."
    },
    {
      question: "How do you handle food allergies?",
      answer: "We maintain a strict allergy-aware environment. Parents must inform us of any allergies, and we ensure proper food handling and separation."
    },
    {
      question: "What is your sick child policy?",
      answer: "Children should stay home if they have a fever, vomiting, or other contagious symptoms. They must be symptom-free for 24 hours before returning."
    }
  ];

  const testimonials = [
    {
      name: "priya sharma",
      role: "Parent of Alex, Age 4",
      image: activitiesImage1,
      quote: "The dedication of teachers and the engaging curriculum have made a remarkable difference in my child's development."
    },
    {
      name: "Rohit Verma",
      role: "Parent of Emma, Age 5",
      image: activitiesImage2,
      quote: "We're amazed by how much our daughter has learned and grown in such a nurturing environment."
    }
  ];

  const upcomingEvents = [
    { date: "Dec 15", event: "Winter Concert" },
    { date: "Dec 20", event: "Parent-Teacher Meetings" },
    { date: "Dec 22", event: "Holiday Celebration" }
  ];

  return (
    <section className={styles.resourceSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Parent Resources</h2>
          <p>Everything you need to stay connected and informed</p>
        </div>

        <div className={styles.resourceTabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'calendar' ? styles.active : ''}`}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'newsletter' ? styles.active : ''}`}
            onClick={() => setActiveTab('newsletter')}
          >
            Newsletter
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'policies' ? styles.active : ''}`}
            onClick={() => setActiveTab('policies')}
          >
            Policies
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'faq' ? styles.active : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQs
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'calendar' && (
            <div className={styles.calendarSection}>
              <div className={styles.upcomingEvents}>
                <h3>Upcoming Events</h3>
                <div className={styles.eventsList}>
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className={styles.eventItem}>
                      <span className={styles.eventDate}>{event.date}</span>
                      <span className={styles.eventName}>{event.event}</span>
                    </div>
                  ))}
                </div>
                <button className={styles.downloadButton}>
                  Download Full Calendar
                  <span>↓</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'newsletter' && (
            <div className={styles.newsletterSection}>
              <div className={styles.newsletterPreview}>
                <Image
                  src={activitiesImage3}
                  alt="Newsletter Preview"
                  width={300}
                  height={400}
                  className={styles.previewImage}
                />
                <div className={styles.newsletterContent}>
                  <h3>December 2023 Newsletter</h3>
                  <p>Catch up on the latest news, events, and achievements</p>
                  <div className={styles.newsletterActions}>
                    <button className={styles.downloadButton}>Download PDF</button>
                    <button className={styles.archiveButton}>View Archive</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policies' && (
            <div className={styles.policiesSection}>
              <div className={styles.policyGrid}>
                {[
                  "Attendance Policy",
                  "Health & Safety Guidelines",
                  "Communication Protocol",
                  "Behavior Management"
                ].map((policy, index) => (
                  <div key={index} className={styles.policyCard}>
                    <div className={styles.policyIcon}>📋</div>
                    <h4>{policy}</h4>
                    <button className={styles.viewButton}>View Policy</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className={styles.faqSection}>
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className={styles.faqQuestion}>
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>{activeFaq === index ? '−' : '+'}</span>
                  </div>
                  <div className={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.testimonialsSection}>
          <h3>What Parents Say</h3>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className={styles.testimonialImage}
                  />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
                <p>{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentResources;