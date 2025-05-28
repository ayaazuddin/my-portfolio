import React from 'react';
import styles from '../NotebookPortfolio.module.css';

interface AboutMeContentProps {
  isErasing: boolean;
  className: string;
}



const AboutMeContent: React.FC<AboutMeContentProps> = ({ isErasing, className }) => {
  const skills = ['Python', 'PyTorch', 'React.js', 'JavaScript', 'HTML/CSS', 'Flask', 'Docker', 'PostgreSQL', 'TensorFlow', 'scikit-learn'];
  
  return (
    <div className={className}>
      <div className={styles.photoContainer}>
        <div className={styles.photoWrapper}>
          <img 
            src="me.jpg" 
            alt="Ayaaz" 
            className={styles.profilePhoto}
          />
        </div>
      </div>
      
      <div className={styles.nameContainer}>
        <h1 className={styles.heading1}>Hi! I am Ayaaz</h1>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>👤</span>
          About Me
        </h3>
        <p className={styles.paragraph}>
          AI and Machine Learning Engineer with a strong academic background and hands-on experience building fair, interpretable, and scalable models—especially in healthcare. I specialize in end-to-end ML solutions, deploying cutting-edge research to solve real-world problems with impact.
        </p>
        <p className={styles.paragraphTilt}>
          When I'm not coding or reading a paper, you can find me trying to rekindle my guitar skills or spending time with family.
        </p>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>💻</span>
          Work Experience
        </h3>
        
        <div className={styles.jobInfo}>
          <h4 className={styles.jobTitle}>Graduate Research Assistant</h4>
          <p className={styles.companyInfo}>Northeastern University • May 2024-May 2025 • Boston, MA</p>
          {/* <ul className={styles.unorderedList}>
            <li className={styles.listItem}>Designed a multimodal fair classifier for ED/ICU decision-making using GPT-2, object detection, and MedBERT, improving clinical prediction fairness by 15% in preliminary testing</li>
            <li className={styles.listItemTilt}>Built an ensemble model which achieved a 5% gain in demographic parity without compromising in F1-score</li>
            <li className={styles.listItem}>Quantified trade-offs in model fairness vs. performance across 3 modalities</li>
          </ul> */}
        </div>
        
        <div className={styles.jobInfo}>
          <h4 className={styles.jobTitle}>VBA Consultant - Technical Intern</h4>
          <p className={styles.companyInfo}>Highbar Technocrat • May 2022-Jun 2022 • Remote</p>
          {/* <ul className={styles.unorderedList}>
            <li className={styles.listItem}>Led real-time Budgeted Material Wastage Analysis across 5+ project sites</li>
            <li className={styles.listItemTilt}>Developed custom VBA scripts to automate reporting, reducing manual reporting time by ~80%</li>
            <li className={styles.listItem}>Designed user-centric dashboard interface adopted by all internal stakeholders</li>
          </ul> */}
        </div>

        <div className={styles.jobInfo}>
          <h4 className={styles.jobTitle}>Front-End Developer Intern</h4>
          <p className={styles.companyInfo}>Dusk Security • Sep 2021-Oct 2021 • Remote</p>
          {/* <ul className={styles.unorderedList}>
            <li className={styles.listItem}>Designed user-centric dashboard interface for internal stakeholders</li>
            <li className={styles.listItemTilt}>Optimized image loading and web assets to cut load time from 3 seconds to under 1 second</li>
            <li className={styles.listItem}>Improved Google Lighthouse score from 85 to 99/100</li>
          </ul> */}
        </div>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>📚</span>
          Education
        </h3>
        <div>
          <h4 className={styles.jobTitle}>M.S. in Artificial Intelligence</h4>
          <p className={styles.companyInfo}>Northeastern University • 2023-2025</p>
        </div>
        <div>
          <h4 className={styles.jobTitle}>B.Tech in Computer Science and Engineering</h4>
          <p className={styles.companyInfo}>Vellore Institute of Technology • 2019-20235</p>
        </div>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>🔧</span>
          Skills
        </h3>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <span key={index} className={index % 2 === 0 ? styles.skillTagEven : styles.skillTagOdd}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;