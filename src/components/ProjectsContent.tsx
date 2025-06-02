import React, { useState } from 'react';
import styles from '../styles/ProjectPage.module.css';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectsContentProps {
  className: string;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ className }) => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
  // Project data based on your resume
  const projects: Project[] = [
    {
      id: 'water-quality',
      title: 'Water Quality Integration for Disease Prediction',
      shortDescription: 'ML-Based prediction of vector-borne diseases using water quality data',
      fullDescription: 'Led a comprehensive study integrating water quality data into machine learning models for more accurate dengue prediction. Proficiently harmonized different datasets from Indian government websites for 13 districts from 2015-2022. The integration of water quality data into the Support Vector Machine model yielded a significant boost in performance, surpassing the existing benchmarks in current research on vector-borne disease prediction.',
      technologies: ['Python', 'Machine Learning', 'SVM', 'Data Harmonization', 'Dengue Prediction', 'Water Quality Analysis'],
      imageUrl: '/water-quality-project.jpg', // Replace with actual image
      githubUrl: 'https://github.com/ayaazuddin/Prediction-of-Dengue-Research'
    },
    {
      id: 'adaptai',
      title: 'AdaptAI',
      shortDescription: 'AI communication tool for adults with Autism Spectrum Disorder',
      fullDescription: 'Built a full-stack web application (Flask, React, PostgreSQL) supporting adults with Autism Spectrum Disorder. The application is containerized via Docker Compose for 100% reproducible environments. Integrated OpenAI\'s API for adaptive content generation with a custom prompting layer designed specifically for ASD-friendly interactions. Implemented a responsive UI with HCI-compliant accessibility features to ensure the application is usable by its target audience.',
      technologies: ['Flask', 'React', 'PostgreSQL', 'Docker', 'Docker Compose', 'OpenAI API', 'Accessibility', 'HCI'],
      imageUrl: '/adaptai-project.jpg', // Replace with actual image
      demoUrl: 'https://adaptai-demo.example.com',
      githubUrl: 'https://github.com/ayaazuddin/HCI-Final-Project'
    },
    {
      id: 'medical-texts',
      title: 'Unpacking Medical Texts',
      shortDescription: 'Analyzing domain-specific behavior of transformer models on Reddit and PubMed',
      fullDescription: 'Investigated how linguistic patterns (conversational vs. formal) impact medical text processing across Reddit and PubMed. Benchmarked BioBERT, ClinicalBERT, Reddit-tuned BERT, and BERT-base on over 51,000 MedRedQA samples using classification and masked word prediction tasks. Achieved greater than 97% F1 score in source classification. Applied SHAP to reveal source-specific linguistic attention patterns and proposed domain adaptation strategies for healthcare NLP applications.',
      technologies: ['NLP', 'BERT', 'BioBERT', 'ClinicalBERT', 'SHAP', 'Python', 'Transformers', 'Healthcare'],
      imageUrl: '/medical-texts-project.jpg', // Replace with actual image
      githubUrl: 'https://github.com/ayaazuddin/medical-text-analysis'
    },
    {
      id: 'fairness',
      title: 'Fairness at Every Intersection',
      shortDescription: 'Mitigating biases in multimodal clinical predictions',
      fullDescription: 'Built unified text embeddings from 4+ Electronic Health Record (EHR) modalities using MedBERT, ClinicalBERT, and BioClinicalBERT. Designed a Stochastic Debiasing Auto-Encoder (SDAE) method, boosting fairness metrics (Demographic Parity increased by 4–7%, True Positive Rate increased by 3–5%) across 6+ race-gender subgroups. Benchmarked on 2 datasets (MIMIC-Eye, MIMIC-IV ED) across 3 clinical tasks, while maintaining 0.92+ F1 scores. The solution outperformed Reject Option Classification by 10%+ in subgroup fairness without performance drop and scaled to 51,000+ multimodal patient samples, robust even in missing modality settings.',
      technologies: ['AI Fairness', 'MedBERT', 'ClinicalBERT', 'BioClinicalBERT', 'Multimodal Learning', 'Python', 'Healthcare AI', 'EHR'],
      imageUrl: '/fairness-project.jpg', // Replace with actual image
      githubUrl: 'https://github.com/ayaazuddin/CS6983-Class-Project'
    },
    {
      id: 'intelligent-document-assistant',
      title: 'Intelligent Document Assistant',
      shortDescription: 'A RAG-based conversational system for interactive document exploration',
      fullDescription: 'Developed an advanced Retrieval-Augmented Generation (RAG) system enabling natural language interaction with large documents. Built custom embedding model using PyTorch to generate semantic vector representations of document chunks. Implemented RecursiveCharacterTextSplitter for optimal text segmentation with overlapping contexts. Integrated ChromaDB vector database for efficient similarity-based retrieval using cosine similarity algorithms. Created conversational interface using Streamlit with real-time query processing and response generation. Achieved high precision and recall metrics through k-fold cross-validation, demonstrating robust performance across diverse query types. System supports PDF and text file uploads with scalable architecture for educational and research applications.',
      technologies: ['Python', 'PyTorch', 'RAG', 'ChromaDB', 'Streamlit', 'PyPDF2', 'Natural Language Processing', 'Vector Embeddings', 'Machine Learning', 'Document Processing'],
      imageUrl: '/intelligent-document-assistant.jpg', // Replace with actual image
      githubUrl: 'https://github.com/ayaazuddin/intelligent-document-assistant'
    },
    {
      id: 'v2v-collision-avoidance',
      title: 'V2V Collision Avoidance System',
      shortDescription: 'Reinforcement learning-based vehicle-to-vehicle communication for collision avoidance',
      fullDescription: 'Developed an intelligent Vehicle-to-Vehicle (V2V) communication system using Deep Q-Network (DQN) reinforcement learning to actively prevent collisions and traffic congestion. Implemented dynamic decision-making for speed adjustment, lane changes, and route optimization based on real-time information from nearby vehicles. Built comprehensive simulation environment using SUMO (Simulation of Urban MObility) with custom network topology, vehicle routes, and traffic scenarios. Created modular architecture with separate controllers for episode management, simulation control, and DQN model training. Designed reward-penalty system to optimize vehicle behavior and reduce traffic incidents. System demonstrates autonomous collision avoidance through coordinated vehicle communication and machine learning-driven decision making.',
      technologies: ['Python', 'Reinforcement Learning', 'Deep Q-Network (DQN)', 'PyTorch', 'SUMO', 'Vehicle-to-Vehicle Communication', 'Traffic Simulation', 'Autonomous Systems', 'Machine Learning'],
      imageUrl: '/v2v-simulation.jpg', // Replace with actual image
      githubUrl: 'https://github.com/ayaazuddin/V2VSimulationsUsingSumo'
    },
    {
      id: 'weapon-detection-yolov5',
      title: 'Weapon Detection System',
      shortDescription: 'Real-time weapon detection using YOLOv5 for enhanced security surveillance',
      fullDescription: 'Developed an advanced weapon detection system using YOLOv5 (You Only Look Once) deep learning architecture for real-time identification of firearms and knives in images and video streams. Implemented transfer learning techniques on pre-trained YOLOv5 models to achieve high accuracy in weapon detection across diverse scenarios and lighting conditions. Built comprehensive training pipeline with custom dataset annotation and data augmentation for improved model robustness. Integrated OpenCV for real-time video processing and bounding box visualization. System designed for CCTV surveillance applications with immediate threat detection capabilities, featuring low latency inference suitable for security monitoring in public spaces like airports, banks, and educational institutions. Achieved optimal balance between detection speed and accuracy for practical deployment in security systems.',
      technologies: ['Python', 'YOLOv5', 'PyTorch', 'OpenCV', 'Computer Vision', 'Deep Learning', 'Object Detection', 'Transfer Learning', 'CCTV Surveillance', 'Security Systems'],
      imageUrl: '/weapon-detection.jpg', // Replace with actual image
      githubUrl: 'https://github.com/ayaazuddin/Weapon-Detection'
    },
    {
      id: 'twitter-depression-detection',
      title: 'Twitter Depression Detection System',
      shortDescription: 'Sentiment analysis system to identify people facing depression through Twitter data',
      fullDescription: 'Developed a comprehensive sentiment analysis system using Twitter data to identify users showing signs of depression through their social media activity. Implemented natural language processing techniques to analyze tweet content, linguistic patterns, and emotional indicators associated with depressive symptoms. Built machine learning models to classify tweets based on sentiment polarity and depression-indicative language patterns. Utilized Twitter API for real-time data collection and preprocessing pipelines for text cleaning, tokenization, and feature extraction. Applied various classification algorithms including logistic regression, SVM, and deep learning models to achieve accurate depression detection. Integrated lexicon-based approaches with machine learning techniques for enhanced sentiment classification. System designed to provide early intervention opportunities for mental health support by identifying at-risk users through their social media expressions.',
      technologies: ['Python', 'Natural Language Processing', 'Twitter API', 'Sentiment Analysis', 'Machine Learning', 'Text Mining', 'NLTK', 'Scikit-learn', 'Data Analysis', 'Mental Health Technology'],
      imageUrl: '/twitter-depression-analysis.jpg', // Replace with actual image
      githubUrl: 'https://github.com/ayaazuddin/SAIN-project---Twitter-sentimental-Analysis'
    }
  ];
  
  // Handle clicking on a sticky note
  const handleStickyClick = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };
  
  // Handle closing expanded project view
  const handleCloseExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedProject(null);
  };

  return (
    <div className={className}>
      <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>🏆</span>
          My Research & Projects
        </h3>
        
        <div className={styles.stickyNotesContainer}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`${styles.stickyNote} ${expandedProject === project.id ? styles.stickyNoteHidden : ''}`} 
              onClick={() => handleStickyClick(project.id)}
              style={{ 
                transform: `rotate(${Math.random() * 6 - 3}deg)`,
                backgroundColor: ['#FFEAA7', '#FDCB6E', '#FFE7D6', '#E9FFDV'][Math.floor(Math.random() * 4)]
              }}
            >
              <div className={styles.stickyPin}></div>
              <h4 className={styles.stickyTitle}>{project.title}</h4>
              <div className={styles.stickyImageWrapper}>
                <img 
                  src={project.imageUrl !== '' ? project.imageUrl : `/placeholder-${project.id}.jpg`} 
                  alt={project.title} 
                  className={styles.stickyImage}
                  onError={(e) => {
                    // Fallback to a default image if the project image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-project.jpg';
                  }}
                />
              </div>
              <p className={styles.stickyDescription}>{project.shortDescription}</p>
            </div>
          ))}
        </div>
        
        {/* Expanded Project View */}
        {expandedProject && (
          <div className={styles.expandedProjectOverlay} onClick={handleCloseExpanded}>
            <div className={styles.expandedProject} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={handleCloseExpanded}>×</button>
              
              {projects.filter(p => p.id === expandedProject).map(project => (
                <div key={project.id} className={styles.expandedProjectContent}>
                  <div className={styles.expandedImageWrapper}>
                    <img 
                      src={project.imageUrl !== '' ? project.imageUrl : `/placeholder-${project.id}.jpg`}
                      alt={project.title} 
                      className={styles.expandedImage}
                      onError={(e) => {
                        // Fallback to a default image if the project image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-project.jpg';
                      }}
                    />
                  </div>
                  
                  <div className={styles.expandedDetails}>
                    <h2 className={styles.expandedTitle}>{project.title}</h2>
                    <p className={styles.expandedDescription}>{project.fullDescription}</p>
                    
                    <div className={styles.expandedTechnologies}>
                      <h4>Technologies & Skills:</h4>
                      <div className={styles.techTags}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.expandedLinks}>
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          View Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          GitHub Repo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsContent;