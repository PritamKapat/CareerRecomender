import { usePrediction } from "../context/PredictionContext";
import orderedFeatures from "../data/features";
import { useEffect } from "react";

const SummaryPage = ({ onComplete, onBack, onClose }) => {
 const { userSkills = {}, binaryFeatures = [] } = usePrediction();
  const subjects = ["Mathematics", "Physics", "Chemistry", "History", "Geography", "Biology", "English"];

  const interestedSubjects = orderedFeatures
    .map((feature, index) => ({ feature, value: binaryFeatures[index] }))
    .filter(item => subjects.includes(item.feature) && item.value === 1);
  console.log(interestedSubjects);

  console.log("SummaryPage userSkills:", userSkills);
  
  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Modal styles
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(5px)',
    },
    content: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      width: '90%',
      maxWidth: '600px',
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      animation: 'modalFadeIn 0.3s ease-out',
    },
    closeButton: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#666',
    },
    title: {
      fontSize: '1.8rem',
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#2c3e50',
    },
    section: {
      marginBottom: '1.5rem',
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
    },
    sectionTitle: {
      fontSize: '1.2rem',
      marginBottom: '0.8rem',
      color: '#3498db',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      padding: '0.5rem 0',
      borderBottom: '1px solid #eee',
    },
    emptyMessage: {
      color: '#666',
      fontStyle: 'italic',
    },
    skillCategory: {
      fontWeight: 'bold',
      color: '#2c3e50',
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem',
      gap: '1rem',
    },
    button: {
      padding: '0.8rem 1.5rem',
      borderRadius: '8px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    backButton: {
      backgroundColor: '#f1f1f1',
      color: '#333',
      border: '1px solid #ddd',
    },
    primaryButton: {
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
    },
    primaryButtonHover: {
      backgroundColor: '#2980b9',
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.content}>
        <button 
          style={styles.closeButton} 
          onClick={onClose}
          onMouseOver={e => e.currentTarget.style.color = '#333'}
          onMouseOut={e => e.currentTarget.style.color = '#666'}
        >
          &times;
        </button>
        
        <h1 style={styles.title}>🎓 Career Summary</h1>
        
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>📘 Subjects You're Interested In</h2>
          {interestedSubjects.length > 0 ? (
            <ul style={styles.list}>
              {interestedSubjects.map(({ feature }, i) => (
                <li key={i} style={styles.listItem}>{feature}</li>
              ))}
            </ul>
          ) : (
            <p style={styles.emptyMessage}>No subjects selected with interest.</p>
          )}
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>💼 Selected Skills</h2>
          {Object.keys(userSkills).length > 0 ? (
            <ul style={styles.list}>
              {Object.entries(userSkills).map(([key, value], idx) => (
                <li key={idx} style={styles.listItem}>
                  <span style={styles.skillCategory}>{key}:</span> {value}
                </li>
              ))}
            </ul>
          ) : (
            <p style={styles.emptyMessage}>No skills selected.</p>
          )}
        </div>

        <div style={styles.actions}>
          <button 
            onClick={onBack}
            style={{...styles.button, ...styles.backButton}}
            onMouseOver={e => {
              e.currentTarget.style.transform = styles.buttonHover.transform;
              e.currentTarget.style.boxShadow = styles.buttonHover.boxShadow;
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            ← Back to Skills
          </button>
          <button 
            onClick={onComplete}
            style={{...styles.button, ...styles.primaryButton}}
            onMouseOver={e => {
              e.currentTarget.style.transform = styles.buttonHover.transform;
              e.currentTarget.style.boxShadow = styles.buttonHover.boxShadow;
              e.currentTarget.style.backgroundColor = styles.primaryButtonHover.backgroundColor;
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.backgroundColor = styles.primaryButton.backgroundColor;
            }}
          >
            Predict Career 🎯
          </button>
        </div>
      </div>

      {/* For the fade-in animation */}
      <style>
        {`
          @keyframes modalFadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default SummaryPage;