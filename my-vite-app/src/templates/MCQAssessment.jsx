import React, { useState } from "react";
import { Link } from 'react-router-dom';
import questions from "../data/questions";
import SkillDropdown from "./SkillDropdown";
import featureGroups from "../data/featureGroups";
import '../styles/Assessment.css';


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
  const [careerResult, setCareerResult] = useState([]);
  const [loading, setLoading] = useState(false);

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

const handleSubmit = async () => {
  const scores = {};

  // Step 1: Score subjects
  subjects.forEach((subj) => {
    const subjQs = questions.filter(q => q.subject === subj);
    let correct = 0;
    subjQs.forEach((q) => {
      if (userAnswers[q.id] === q.answer) correct++;
    });
    scores[subj] = correct > 3 ? 1 : 0;
  });

  // Step 2: Merge skills + subjects
  const merged = { ...scores, ...binaryFeatures };

  // Step 3: Create ordered binary array
  const binaryArray = orderedFeatures.map((feature) => merged[feature] ? 1 : 0);

  console.log("🧮 Binary Input Array for Model:", binaryArray);
   const isEmpty = binaryArray.every(val => val === 0);
  if (isEmpty) {
    alert("⚠️ Please attempt questions or select skills before submitting!");
    return;
  }
  // Step 4: Send to Flask backend
  try {
  setLoading(true); // Show loader

  const response = await fetch("https://pritamkapat.pythonanywhere.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ binary_array: binaryArray })
  });

  const data = await response.json();

  // ⏳ Add 3-second delay before showing result
  setTimeout(() => {
    setLoading(false); // Hide loader after delay

    if (data.top_careers) {
      setCareerResult(data.top_careers);
    } else {
      setCareerResult([{ career: "⚠️ Prediction failed. Try again." }]);
    }
  }, 3000); // 3000 milliseconds = 3 seconds

} catch (error) {
  console.error("❌ API Error:", error);
  setLoading(false);
  setCareerResult([{ career: "🚫 Could not connect to the backend." }]);
}
};


  return (
    
    <div style={{display:"flex"}}>
      <div className="ss">
      <h1>📘 Subject-Wise MCQ Assessment</h1>
        
      {subjects.map((subject) => {
        const subjectQuestions = questions.filter(q => q.subject === subject);
        const currentIndex = currentIndexes[subject] || 0;
        const currentQ = subjectQuestions[currentIndex];

        return (
          
          <div key={subject} style={{
            
            margin: "20px",marginLeft:"50px",
            width: "800px"
          }}>
            <button className="button5" onClick={() => handleExpand(subject)}>
              <span className="text">{subject}</span>
            </button>
            {expandedSubject === subject && currentQ && (
              <div  style={{
              marginTop: "10px",
              padding: "15px",
              border: "2px solid #ccc",
              borderRadius: "8px",
              color:"#e5e5e5",
              backgroundColor: "#393939",
            }}>
                <p><strong>Q:</strong> {currentQ.question}</p>
                {currentQ.options.map((opt) => (
                  <label key={opt} style={{  display: "block", margin: "5px 0" }}>
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
                  <button className="button-30" onClick={() => handleNext(subject)}>Next</button>
                ) : (
                  <p>✅ End of {subject} questions</p>
                )}
              </div>
            )}
          </div>
        );
      })}

      <h1 style={{color:"white",margin:"50px",marginTop:"210px"}}>🧠 Select only your interest skills for your career goals</h1>
      <SkillDropdown
        featureGroups={featureGroups}
        onSelect={handleDropdownSelect}
      />
      
      <button className="button6" onClick={handleSubmit} style={{ marginTop: "20px",marginLeft:"500px",marginBottom:"40px" }}>
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
      {loading && (
  <div class="loading" style={{marginLeft:"600px"}}>
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
  </svg>
</div>

)}
<div style={{height:"100px", background:"black"}}>
{careerResult.length > 0 && (
  <div
    className="careerResContainer"
    style={{
      background:"black",
      margin: "50px auto",
      padding: "20px",
      maxWidth: "1200px",
    }}
  >
    <h2 style={{ color: "#fff", marginBottom: "20px" }}>🎯 Top Career Matches:</h2>
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {careerResult.map((career, index) => (
        <div
          key={index}
          className="career-box"
          style={{
            background: "#2c2c2c",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            minWidth: "200px",
            textAlign: "center",
            boxShadow: "0 0 10px rgba(255,255,255,0.1)"
          }}
        >
          <h3>{index + 1}. {career.career}</h3>
          <Link to="/career/new">More details</Link>
        </div>
      ))}
    </div>
  </div>
)}
</div>

      </div>
      <div className="count">
            <h4>Each Section contains 5 questions</h4>
            <h2>📊 Questions Attempted: </h2>
            <h2>{Object.keys(userAnswers).length}/35</h2> 
        </div>
    </div>
  );
};

export default MCQAssessment;
