import React from 'react';
import styles from '../NotebookPortfolio.module.css';

interface NewsContentProps {
  isErasing: boolean;
  className: string;
}

const NewsContent: React.FC<NewsContentProps> = ({ isErasing, className }) => {
  return (
    <div className={className}>
      <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>📰</span>
          Latest News
        </h3>
        
        <div className={styles.newsItem}>
          <h4 className={styles.jobTitle}>New Project Launch</h4>
          <p className={styles.paragraph}>
            Excited to announce the launch of my latest project - a real-time collaboration tool
            built with React and WebSocket technology.
          </p>
        </div>
        
        <div className={styles.newsItem}>
          <h4 className={styles.jobTitle}>Conference Speaking</h4>
          <p className={styles.paragraphTilt}>
            Will be speaking at the upcoming React Conference about modern state management
            techniques and best practices.
          </p>
        </div>
        
        <div className={styles.newsItem}>
          <h4 className={styles.jobTitle}>Open Source Contribution</h4>
          <p className={styles.paragraph}>
            Recently contributed to several open-source projects, focusing on improving
            accessibility and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;