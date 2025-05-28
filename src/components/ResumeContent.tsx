import React from 'react';
import styles from '../NotebookPortfolio.module.css';

interface ResumeContentProps {
  isErasing: boolean;
  className: string;
}

const ResumeContent: React.FC<ResumeContentProps> = ({ isErasing, className }) => {
  // You'll need to place your resume PDF in the public folder
  const resumeUrl = '/resume.pdf'; // Place your resume.pdf file in the public folder

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ayaaz_Uddin_Resume.pdf';
    link.click();
  };

  const handlePrint = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className={className}>
      <div className={styles.nameContainer}>
        <h1 className={styles.heading1}>My Resume</h1>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>📄</span>
          Professional Resume
        </h3>
        <p className={styles.paragraph}>
          Here's my professional resume with detailed information about my experience, 
          education, and skills. You can view it below or download a copy.
        </p>
      </div>

      {/* Resume Actions */}
      <div className={styles.resumeActions}>
        <button onClick={handleDownload} className={styles.resumeActionBtn}>
          <span className={styles.resumeActionIcon}>⬇️</span>
          <span className={styles.resumeActionText}>Download PDF</span>
        </button>
        
        <button onClick={handlePrint} className={styles.resumeActionBtn}>
          <span className={styles.resumeActionIcon}>🖨️</span>
          <span className={styles.resumeActionText}>Open in New Tab</span>
        </button>
        
        <a 
          href={resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.resumeActionBtn}
        >
          <span className={styles.resumeActionIcon}>👀</span>
          <span className={styles.resumeActionText}>View Full Screen</span>
        </a>
      </div>

      {/* PDF Viewer Container */}
      <div className={styles.resumeViewerContainer}>
        <div className={styles.resumeViewerHeader}>
          <h4 className={styles.resumeViewerTitle}>Resume Preview</h4>
          <div className={styles.resumeViewerControls}>
            <span className={styles.resumeViewerNote}>
              Best viewed in full screen or downloaded
            </span>
          </div>
        </div>
        
        {/* PDF Iframe */}
        <div className={styles.resumeIframeWrapper}>
          <iframe
            src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className={styles.resumeIframe}
            title="Resume PDF Viewer"
            loading="lazy"
          />
          
          {/* Fallback for browsers that don't support PDF viewing */}
          <div className={styles.resumeFallback}>
            <div className={styles.resumeFallbackContent}>
              <span className={styles.resumeFallbackIcon}>📄</span>
              <h4 className={styles.resumeFallbackTitle}>PDF Viewer Not Available</h4>
              <p className={styles.resumeFallbackText}>
                Your browser doesn't support inline PDF viewing. 
                Please use the buttons above to download or view the resume.
              </p>
              <button onClick={handleDownload} className={styles.resumeFallbackBtn}>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative: Resume Highlights */}
      <div className={styles.resumeHighlights}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>✨</span>
          Resume Highlights
        </h3>
        
        <div className={styles.highlightsList}>
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>🎓</div>
            <div className={styles.highlightContent}>
              <h4 className={styles.highlightTitle}>Education</h4>
              <p className={styles.highlightDesc}>M.S. in Artificial Intelligence from Northeastern University</p>
            </div>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>💼</div>
            <div className={styles.highlightContent}>
              <h4 className={styles.highlightTitle}>Experience</h4>
              <p className={styles.highlightDesc}>Graduate Research Assistant & Technical Intern roles</p>
            </div>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>🔬</div>
            <div className={styles.highlightContent}>
              <h4 className={styles.highlightTitle}>Research</h4>
              <p className={styles.highlightDesc}>Focus on AI fairness, healthcare informatics, and environmental data</p>
            </div>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>⚡</div>
            <div className={styles.highlightContent}>
              <h4 className={styles.highlightTitle}>Skills</h4>
              <p className={styles.highlightDesc}>Python, React, Machine Learning, Data Science, Full-stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;