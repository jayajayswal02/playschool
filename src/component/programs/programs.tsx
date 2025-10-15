"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './programs.module.css';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  category: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      url: '/gallery/classroom1.jpg',
      thumbnail: '/gallery/thumbnails/classroom1.jpg',
      title: 'Interactive Learning Session',
      category: 'classroom'
    },
    {
      id: 2,
      type: 'video',
      url: '/gallery/virtual-tour.mp4',
      thumbnail: '/gallery/thumbnails/tour.jpg',
      title: 'Virtual School Tour',
      category: 'tour'
    },
    // Add more items as needed
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'classroom', label: 'Classrooms' },
    { id: 'events', label: 'Events' },
    { id: 'outdoor', label: 'Outdoor' },
    { id: 'tour', label: 'Virtual Tour' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    if (item.type === 'video') {
      setIsVideoPlaying(true);
    }
  };

  const handleClose = () => {
    setSelectedItem(null);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our Gallery
            <span className={styles.subtitle}>Moments of Joy and Learning</span>
          </h2>
          
          <div className={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.filterButton} 
                  ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.galleryGrid}>
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={styles.galleryItem}
              onClick={() => handleItemClick(item)}
            >
              <div className={styles.itemWrapper}>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={300}
                  className={styles.thumbnail}
                />
                {item.type === 'video' && (
                  <div className={styles.playButton}>
                    <span>▶</span>
                  </div>
                )}
              </div>
              <div className={styles.itemInfo}>
                <h3>{item.title}</h3>
                <span className={styles.category}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour Section */}
        <div className={styles.tourSection}>
          <h3>Take a Virtual Tour</h3>
          <p>Explore our facilities and learning spaces from anywhere</p>
          <div className={styles.tourPreview}>
            <video
              poster="/gallery/thumbnails/tour-preview.jpg"
              controls
              className={styles.tourVideo}
            >
              <source src="/gallery/virtual-tour.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Event Highlights */}
        <div className={styles.eventHighlights}>
          <h3>Event Highlights</h3>
          <div className={styles.timeline}>
            {[1, 2, 3].map((event) => (
              <div key={event} className={styles.timelineItem}>
                <div className={styles.timelineDate}>June 2023</div>
                <div className={styles.timelineContent}>
                  <Image
                    src={`/gallery/events/event${event}.jpg`}
                    alt={`Event ${event}`}
                    width={300}
                    height={200}
                    className={styles.eventImage}
                  />
                  <h4>Annual Day Celebration</h4>
                  <p>A spectacular showcase of talent and creativity</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className={styles.modal} onClick={handleClose}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleClose}>×</button>
            {selectedItem.type === 'image' ? (
              <Image
                src={selectedItem.url}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className={styles.modalImage}
              />
            ) : (
              <video
                ref={videoRef}
                controls
                autoPlay={isVideoPlaying}
                className={styles.modalVideo}
              >
                <source src={selectedItem.url} type="video/mp4" />
              </video>
            )}
            <div className={styles.modalCaption}>{selectedItem.title}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;