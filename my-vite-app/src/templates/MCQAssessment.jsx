import React, { useState } from "react";
import questions from "../data/questions";
import '../index.css';
import '../styles/Assessment.css';
import { usePrediction } from "../context/PredictionContext";

const subjects = ["Mathematics", "Physics", "Chemistry", "History", "Geography", "Biology", "English"];

const MCQAssessment = ({ onComplete }) => {
  const {
    setUserAnswers: setContextAnswers,
    setBinaryFeatures,
    setCareerResult,
  } = usePrediction();
  
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [currentIndexes, setCurrentIndexes] = useState({});
  const [userAnswers, setUserAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  const handleExpand = (subject) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  const handleOptionChange = (subject, qId, value) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: value,
    }));
  };

  const handleNext = (subject) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [subject]: (prev[subject] || 0) + 1,
    }));
  };

  const handleSubmit = () => {
    setLoading(true);
    
    // Calculate subject scores
    const scores = {};
    subjects.forEach((subj) => {
      const subjQs = questions.filter((q) => q.subject === subj);
      let correct = 0;
      subjQs.forEach((q) => {
        if (userAnswers[q.id] === q.answer) correct++;
      });
      scores[subj] = correct > 3 ? 1 : 0;
    });

    // Check if at least one full subject section is answered
    const attemptedFullSubject = subjects.some((subj) => {
      const subjQs = questions.filter(q => q.subject === subj);
      return subjQs.every(q => userAnswers[q.id] !== undefined);
    });

    // if (!attemptedFullSubject) {
    //   alert("⚠️ Please complete at least one full subject section before submitting!");
    //   setLoading(false);
    //   return;
    // }

    // Update context
    setBinaryFeatures(scores);
    setContextAnswers(userAnswers);
    setCareerResult([]);

    console.log("📝 User Answers:", userAnswers);
    console.log("🧮 Subject Scores:", scores);

    // Simulate processing delay
    setTimeout(() => {
      setLoading(false);
      onComplete(); // Notify parent component to proceed to next step
    },);
  };

  return (
    <div className="container">
      <div className="ss">
        
        <div>
          <h1>📘 Subject-Wise MCQ Assessment</h1>
        {subjects.map((subject) => {
          const subjectQuestions = questions.filter((q) => q.subject === subject);
          const currentIndex = currentIndexes[subject] || 0;
          const currentQ = subjectQuestions[currentIndex];
            
          return (
            <div key={subject}>
              <button className="button5" onClick={() => handleExpand(subject)} style={{marginTop:"10px"}}>
                <span className="text">{subject}</span>
              </button>

              {expandedSubject === subject && currentQ && (
                <div className="expand">
                  <p><strong>Q:</strong> {currentQ.question}</p>
                  {currentQ.options.map((opt) => (
                    <label key={opt} style={{ display: "block", margin: "5px 0" }}>
                      <input
                        type="radio"
                        name={`q-${currentQ.id}`}
                        value={opt}
                        checked={userAnswers[currentQ.id] === opt}
                        onChange={() => handleOptionChange(subject, currentQ.id, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                  {currentIndex < subjectQuestions.length - 1 ? (
                    <button className="button-30" onClick={() => handleNext(subject)}>
                      Next
                    </button>
                  ) : (
                    <p>✅ End of {subject} questions</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
        </div>
        <div className="count">
        <h4>Each Section contains 5 questions</h4>
        <h2>📊 Questions Attempted: </h2>
        <h2>{Object.keys(userAnswers).length}/35</h2>
      </div>
      </div>

      
      <button 
          className="button-29" 
          onClick={handleSubmit} 
          disabled={loading}
          id="submit"
        >
          <span>Submit</span>
        </button>
    </div>
  );
};

export default MCQAssessment;