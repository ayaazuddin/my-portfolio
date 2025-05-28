import React, { useState } from 'react';
import styles from './NotebookPortfolio.module.css';
import './BookmarkStyles.css'; // Import the bookmark styles
import AboutMeContent from './components/AboutMeContent';
import ProjectsContent from './components/ProjectsContent';
import ResearchPapersContent from './components/ResearchPapersContent'; // Research component
import PolaroidSocialLinks from './components/Contact'; // New Contact component
// import ResumeContent from './components/ResumeContent';

const NotebookPortfolio: React.FC = () => {
  const [isErasing, setIsErasing] = useState(false);
  const [currentView, setCurrentView] = useState<'main' | 'projects' | 'research' | 'contact' | 'resume'>('main');

  const handleViewChange = (newView: 'main' | 'projects' | 'research' | 'contact' | 'resume') => {
    if (newView === currentView) return; // Don't change if it's the same view
    
    setIsErasing(true);
    setTimeout(() => {
      setCurrentView(newView);
      setIsErasing(false);
    }, 1000);
  };

  const handleResumeClick = () => {
  window.open('/resume.pdf', '_blank');
};

  return (
    <div className={styles.container}>      
      {/* Main notebook structure */}
      <div className={styles.portfolioWrapper}>
        {/* Shadow papers in stack - bottom layers */}
        <div className={styles.shadowPaper1}></div>
        <div className={styles.shadowPaper2}></div>
        
        {/* Main notebook paper with bookmarks positioned at the top */}
        <div className={styles.mainPaper}>
          {/* Bookmark style that sticks out from the top of the page */}
          <div className="bookmarkContainer">
            <div 
              className={`bookmark mainBookmark ${currentView === 'main' ? 'activeBookmark' : ''}`}
              onClick={() => handleViewChange('main')}
            >
              <span className="bookmarkLabel">About Me</span>
            </div>
            
            <div 
              className={`bookmark projectsBookmark ${currentView === 'projects' ? 'activeBookmark' : ''}`}
              onClick={() => handleViewChange('projects')}
            >
              <span className="bookmarkLabel">Projects</span>
            </div>
            
            {/* Research Papers bookmark */}
            <div 
              className={`bookmark researchBookmark ${currentView === 'research' ? 'activeBookmark' : ''}`}
              onClick={() => handleViewChange('research')}
            >
              <span className="bookmarkLabel">Research</span>
            </div>

            {/* New Contact bookmark */}
            <div 
              className={`bookmark contactBookmark ${currentView === 'contact' ? 'activeBookmark' : ''}`}
              onClick={() => handleViewChange('contact')}
            >
              <span className="bookmarkLabel">Contact</span>
            </div>

            {/* New Resume bookmark */}
            <div 
              className="bookmark resumeBookmark"
              onClick={handleResumeClick}
            >
              <span className="bookmarkLabel">Resume</span>
            </div>
          </div>

          {/* Red margin line */}
          <div className={styles.redMargin}></div>
          
          {/* Hole punches */}
          <div className={`${styles.holePunch} ${styles.holePunch1}`}></div>
          <div className={`${styles.holePunch} ${styles.holePunch2}`}></div>
          <div className={`${styles.holePunch} ${styles.holePunch3}`}></div>
          
          {/* Notebook lines with content */}
          <div className={styles.notebookContent}>
            {/* Content wrapper - each section will be positioned inside this */}
            <div className={styles.contentWrapper}>
              {/* Render different content components based on currentView */}
              {currentView === 'main' && (
                <AboutMeContent
                  isErasing={isErasing}
                  className={`${styles.contentSection} ${isErasing ? styles.eraseAnimation : ''} ${currentView === 'main' ? styles.contentVisible : styles.contentHidden}`}
                />
              )}

              {currentView === 'projects' && (
                <ProjectsContent
                  isErasing={isErasing}
                  className={`${styles.contentSection} ${isErasing ? styles.eraseAnimation : ''} ${currentView === 'projects' ? styles.contentVisible : styles.contentHidden}`}
                />
              )}
              
              {/* Research Papers Content */}
              {currentView === 'research' && (
                <ResearchPapersContent
                  isErasing={isErasing}
                  className={`${styles.contentSection} ${isErasing ? styles.eraseAnimation : ''} ${currentView === 'research' ? styles.contentVisible : styles.contentHidden}`}
                />
              )}

              {/* Contact Content */}
              {currentView === 'contact' && (
                <PolaroidSocialLinks
                  isErasing={isErasing}
                  className={`${styles.contentSection} ${isErasing ? styles.eraseAnimation : ''} ${currentView === 'contact' ? styles.contentVisible : styles.contentHidden}`}
                />
              )}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookPortfolio;