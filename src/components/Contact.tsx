import React from 'react';
import styles from '../styles/Contact.module.css';


interface ContactProps {
  isErasing: boolean;
  className: string;
}


// Component for the polaroid-style social links section
const PolaroidSocialLinks: React.FC<ContactProps> = ({isErasing, className }) => {
  return (
    <div className={className}>
      <div className={styles.polaroidContainer}>
        {/* LinkedIn polaroid */}
        <a 
          href="https://www.linkedin.com/in/ayaazuddin-mohammad/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.polaroidCard} ${styles.linkedinPolaroid}`}
        >
          {/* Paper clip */}
          <div className={styles.paperClip}></div>
          
          {/* Polaroid frame */}
          <div className={styles.polaroidFrame}>
            {/* Photo area with icon */}
            <div className={styles.polaroidPhoto}>
              <svg className={styles.polaroidIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Caption */}
            <div className={styles.polaroidCaption}>
              <div className={styles.polaroidLink}>
                <span className={styles.polaroidTitle}>LinkedIn</span>
                <span className={styles.polaroidUsername}>@ayaazuddin-mohammad</span>
                <span className={styles.polaroidDate}>Professional Network</span>
              </div>
            </div>
          </div>
        </a>

        {/* GitHub polaroid */}
        <a 
          href="https://github.com/ayaazuddin" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.polaroidCard} ${styles.githubPolaroid}`}
        >
          {/* Thumb tack */}
          <div className={styles.thumbTack}>
            <div className={styles.thumbTackHead}></div>
            <div className={styles.thumbTackPin}></div>
          </div>
          
          {/* Polaroid frame */}
          <div className={styles.polaroidFrame}>
            {/* Photo area with icon */}
            <div className={styles.polaroidPhoto}>
              <svg className={styles.polaroidIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14 20 9.5C19.9988 8.12361 19.4808 6.80634 18.5 5.8C18.9367 4.57002 18.8823 3.22142 18.35 2C18.35 2 17.2 1.7 15 3.2C13.1174 2.68297 11.1326 2.68297 9.25 3.2C7.05 1.7 5.9 2 5.9 2C5.36772 3.22142 5.31329 4.57002 5.75 5.8C4.76921 6.80634 4.25115 8.12361 4.25 9.5C4.25 14 6.95 15.2 9.75 15.5C9.15 16.1 9.15 16.6 9.15 17.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Caption */}
            <div className={styles.polaroidCaption}>
              <div className={styles.polaroidLink}>
                <span className={styles.polaroidTitle}>GitHub</span>
                <span className={styles.polaroidUsername}>@ayaazuddin</span>
                <span className={styles.polaroidDate}>Code Repository</span>
              </div>
            </div>
          </div>
        </a>

        {/* Google Scholar polaroid */}
        <a 
          href="https://scholar.google.com/citations?user=3SRw9SkIKsMC&hl=en" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.polaroidCard} ${styles.scholarPolaroid}`}
        >
          {/* Washi tape */}
          <div className={styles.polaroidTape}></div>
          
          {/* Polaroid frame */}
          <div className={styles.polaroidFrame}>
            {/* Photo area with icon */}
            <div className={styles.polaroidPhoto}>
              <svg className = {styles.polaroidIcon} width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Google Scholar icon</title>
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
            </div>
            
            {/* Caption */}
            <div className={styles.polaroidCaption}>
              <div className={styles.polaroidLink}>
                <span className={styles.polaroidTitle}>Google Scholar</span>
                <span className={styles.polaroidUsername}>Academic Profile</span>
                <span className={styles.polaroidDate}>Research Publications</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PolaroidSocialLinks;