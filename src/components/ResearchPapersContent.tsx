import React, { useState } from 'react';
import styles from '../NotebookPortfolio.module.css';

import styles2 from '../styles/Bookshelf.module.css'

interface Paper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
  keywords: string[];
  link: string;
  color: string;
  citations: number;
}

interface ResearchPapersJournalProps {
  isErasing: boolean;
  className: string;
}

const ResearchPapersContent: React.FC<ResearchPapersJournalProps> = ({ isErasing, className }) => {
  // Sample research papers data - replace with your own papers
  const papers: Paper[] = [
    {
      id: 'paper1',
      title: 'Fairness at Every Intersection: Uncovering and Mitigating Intersectional Biases in Multimodal Clinical Predictions',
      authors: 'Resmi Ramachandranpillai, Kishore Sampath, Ayaazuddin Mohammad, Malihe Alikhani',
      journal: 'Arxiv Pre-print',
      year: '2024',
      abstract: 'Automated clinical decision-making using Electronic Health Records (EHR) can lead to disparities in care, particularly for intersectional subgroups defined by overlapping demographics (e.g., race and gender). Traditional bias mitigation often targets single attributes, making it ineffective for these diverse subgroups. The multimodal nature of EHR—spanning text, time series, tabular data, and images—further complicates bias detection and mitigation. This paper investigates intersectional bias using two large multimodal datasets (MIMIC-Eye and MIMIC-IV ED) and proposes subgroup-level mitigation. We benchmark downstream tasks using unified text representations from multimodal inputs, leveraging clinical language models like MedBERT, Clinical BERT, and BioBERT. Results show robust bias reduction across datasets, subgroups, and model embeddings.',
      keywords: ['fairness', 'healthcare AI', 'multimodal learning', 'clinical decision support'],
      link: 'https://arxiv.org/abs/2412.00606',
      color: '#3B82F6', // blue
      citations: 2
    },
    {
      id: 'paper2',
      title: 'The Multimodal Paradox: How Added and Missing Modalities Shape Bias and Performance in Multimodal AI',
      authors: 'Kishore Sampath, Pratheesh, Ayaazuddin Mohammad, Resmi Ramachandranpillai',
      journal: 'CVPR 2025 Second Workshop on Responsible Generative AI ',
      year: '2023',
      abstract: 'Multimodal learning, which integrates diverse data sources such as images, text, and structured data, has proven superior to unimodal counterparts in high-stakes decision-making. However, while performance gains remain the gold standard for evaluating multimodal systems, concerns around bias and robustness are frequently overlooked. In this context, this paper explores two key research questions (RQs): (i) RQ1 examines whether adding a modality con-sistently enhances performance and investigates its role in shaping fairness measures, assessing whether it mitigates or amplifies bias in multimodal models; (ii) RQ2 investigates the impact of missing modalities at inference time, analyzing how multimodal models generalize in terms of both performance and fairness. Our analysis reveals that incorporating new modalities during training consistently enhances the performance of multimodal models, while fairness trends exhibit variability across different evaluation measures and datasets. Additionally, the absence of modalities at inference degrades performance and fairness, raising concerns about its robustness in real-world deployment. We conduct extensive experiments using multimodal healthcare datasets containing images, time series, and structured information to validate our findings.',
      keywords: ['water quality', 'deep learning', 'environmental monitoring', 'IoT sensors'],
      link: 'https://arxiv.org/abs/2505.03020',
      color: '#10B981', // green
      citations: 0
    },
  ];

  // State to track which paper is expanded
  const [expandedPaperId, setExpandedPaperId] = useState<string | null>(null);

  // Toggle expanded paper
  const togglePaper = (paperId: string) => {
    if (expandedPaperId === paperId) {
      setExpandedPaperId(null);
    } else {
      setExpandedPaperId(paperId);
    }
  };

  return (
    <div className={className}>
      <div className={styles.nameContainer}>
        <h1 className={styles.heading1}>My Research</h1>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>📚</span>
          Academic Publications
        </h3>
        <p className={styles.paragraph}>
          My research focuses on fairness in AI, medical informatics, and environmental data science.
          Below are my recent publications in these areas.
        </p>
      </div>

      {/* Journal articles container */}
      <div className={styles2.journalContainer}>
        {papers.map((paper) => (
          <div 
            key={paper.id}
            className={`${styles2.journalArticle} ${expandedPaperId === paper.id ? styles2.journalExpanded : ''}`}
            style={{ borderLeftColor: paper.color }}
            onClick={() => togglePaper(paper.id)}
          >
            {/* Paper clip */}
            {/* <div className={styles.paperClip}></div> */}
            
            {/* Header section with title, authors, journal */}
            <div className={styles2.journalHeader}>
              <h4 className={styles2.journalTitle}>{paper.title}</h4>
              <div className={styles2.journalMeta}>
                <span className={styles2.journalAuthors}>{paper.authors}</span>
                <div className={styles2.journalSource}>
                  <span className={styles2.journalName}>{paper.journal}</span>
                  <span className={styles2.journalYear}>{paper.year}</span>
                </div>
              </div>
              
              {/* Citations */}
              {/* <div className={styles2.citationBadge}>
                <span className={styles2.citationCount}>{paper.citations}</span>
                <span className={styles2.citationLabel}>citations</span>
              </div> */}
            </div>
            
            {/* Expandable content */}
            <div className={`${styles2.journalContent} ${expandedPaperId === paper.id ? styles2.journalContentExpanded : ''}`}>
              {/* Abstract with highlight effect */}
              <div className={styles2.abstractContainer}>
                <h5 className={styles2.abstractHeading}>Abstract</h5>
                <p className={styles2.abstractText}>
                  {paper.abstract}
                </p>
                
                {/* Keywords */}
                <div className={styles2.keywordsContainer}>
                  {paper.keywords.map((keyword, index) => (
                    <span key={index} className={styles2.keywordTag}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Margin notes */}
              <div className={styles2.marginNotes}>
                {/* <div className={styles2.marginNote}>
                  <span className={styles2.marginIcon}>💡</span>
                  <p className={styles2.marginText}>Key contribution</p>
                </div>
                <div className={styles2.marginNote}>
                  <span className={styles2.marginIcon}>📈</span>
                  <p className={styles2.marginText}>Cited in {Math.floor(paper.citations * 0.6)} papers</p>
                </div> */}
                <div className={styles2.marginNote}>
                  <span className={styles2.marginIcon}>🔗</span>
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className={styles2.readLink}>
                    Read full paper
                  </a>
                </div>
              </div>
            </div>
            
            {/* Expand/collapse indicator */}
            <div className={styles2.expandIndicator}>
              {expandedPaperId === paper.id ? '▲' : '▼'}
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>🔬</span>
          Research Interests
        </h3>
        <ul className={styles.unorderedList}>
          <li className={styles.listItem}>Fairness and bias in multimodal AI systems</li>
          <li className={styles.listItemTilt}>Machine learning for environmental monitoring</li>
          <li className={styles.listItem}>Accessibility and adaptive interfaces</li>
          <li className={styles.listItemTilt}>Natural language processing for healthcare</li>
        </ul>
      </div>
      
      {/* Research collaborators */}
      {/* <div className={styles.section}>
        <h3 className={styles.heading3}>
          <span className={styles.iconBlue}>👥</span>
          Research Collaborators
        </h3>
        <div className={styles.collaboratorsContainer}>
          <div className={styles.collaborator}>
            <div className={styles.collaboratorInitial}>JS</div>
            <span className={styles.collaboratorName}>Dr. Jane Smith</span>
            <span className={styles.collaboratorAffiliation}>Stanford University</span>
          </div>
          <div className={styles.collaborator}>
            <div className={styles.collaboratorInitial}>MG</div>
            <span className={styles.collaboratorName}>Prof. Maria Garcia</span>
            <span className={styles.collaboratorAffiliation}>MIT</span>
          </div>
          <div className={styles.collaborator}>
            <div className={styles.collaboratorInitial}>RK</div>
            <span className={styles.collaboratorName}>Dr. Raj Kumar</span>
            <span className={styles.collaboratorAffiliation}>University of Washington</span>
          </div>
          <div className={styles.collaborator}>
            <div className={styles.collaboratorInitial}>LC</div>
            <span className={styles.collaboratorName}>Dr. Liu Chang</span>
            <span className={styles.collaboratorAffiliation}>Johns Hopkins University</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ResearchPapersContent;