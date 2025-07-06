import React, { useState } from "react";
import questions from "../data/questions";
import SkillDropdown from "./SkillDropdown";
import featureGroups from "../data/featureGroups";

// Order of features must match model
const orderedFeatures = [
  "Drawing", "Dancing", "Singing", "Sports", "Video Game", "Acting", "Travelling", "Photography",
  "Teaching", "Exercise", "Coding", "Electricity Components", "Mechanic Parts", "Computer Parts",
  "Researching", "Architecture", "Historic Collection", "Botany", "Zoology", "Physics", "Accounting",
  "Economics", "Sociology", "Geography", "Psycology", "History", "Science", "Bussiness Education",
  "Chemistry", "Mathematics", "Biology", "Makeup", "Designing", "Content writing", "Literature",
  "Reading", "Cartooning", "Debating", "Asrtology", "Hindi", "French", "English", "Urdu",
  "Gymnastics", "Yoga", "Engeeniering", "Doctor", "Pharmisist", "Journalism", "Bussiness",
  "Listening Music"
];

const subjects = ["Mathematics", "Physics", "Chemistry", "History", "Geography", "Biology", "English"];

const MCQAssessment = ({ onResult }) => {
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [currentIndexes, setCurrentIndexes] = useState({});
  const [userAnswers, setUserAnswers] = useState({});
  const [binaryFeatures, setBinaryFeatures] = useState({});

  const handleDropdownSelect = (selectedObject) => {
  const updated = { ...binaryFeatures };

  Object.values(selectedObject).forEach((opt) => {
    updated[opt] = 1;
  });

  setBinaryFeatures(updated);
};

  const handleExpand = (subject) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  const handleOptionChange = (subject, qId, value) => {
    setUserAnswers({
      ...userAnswers,
      [qId]: value,
    });
  };

  const handleNext = (subject) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [subject]: (prev[subject] || 0) + 1,
    }));
  };

  const handleSubmit = () => {
    const scores = {};

    // Calculate binary score for each subject
    subjects.forEach((subj) => {
      const subjQs = questions.filter(q => q.subject === subj);
      let correct = 0;
      subjQs.forEach((q) => {
        if (userAnswers[q.id] === q.answer) correct++;
      });
      scores[subj] = correct > 3 ? 1 : 0;
    });

    // Merge with selected features
    const merged = { ...scores, ...binaryFeatures };

    // Create binary array in model's feature order
    const binaryArray = orderedFeatures.map((feature) => merged[feature] ? 1 : 0);

    console.log("🧮 Binary Input Array for Model:", binaryArray);

    if (onResult) onResult(binaryArray); // Send to parent or backend
  };

  return (
    <div>
      <h2>📘 Subject-Wise MCQ Assessment</h2>

      {subjects.map((subject) => {
        const subjectQuestions = questions.filter(q => q.subject === subject);
        const currentIndex = currentIndexes[subject] || 0;
        const currentQ = subjectQuestions[currentIndex];

        return (
          <div key={subject} style={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            margin: "10px",
            width: "900px"
          }}>
            <button className="button-29" onClick={() => handleExpand(subject)}>
              <span className="text">{subject}</span>
            </button>

            {expandedSubject === subject && currentQ && (
              <div style={{ marginTop: "10px" }}>
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
                  <button onClick={() => handleNext(subject)}>Next</button>
                ) : (
                  <p>✅ End of {subject} questions</p>
                )}
              </div>
            )}
          </div>
        );
      })}

      <h2>🧠 Skills</h2>
      <SkillDropdown
        featureGroups={featureGroups}
        onSelect={handleDropdownSelect}
      />

      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
              </path>
            </svg>
          </div>
        </div>
        <span>SUBMIT</span>
      </button>
    </div>
  );
};

export default MCQAssessment;
