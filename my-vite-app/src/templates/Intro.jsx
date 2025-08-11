// src/components/Intro.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/predict/assessment");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🔮 Career Prediction Assistant</h1>
      <p style={styles.paragraph}>
        This tool will help you discover suitable career paths based on:
      </p>
      <ul style={styles.list}>
        <li>📘 A short subject-wise MCQ assessment</li>
        <li>🧠 Your selected interests and skills</li>
        <li>🎯 AI-powered prediction from your responses</li>
      </ul>
      <p style={styles.paragraph}>
        Click the button below to begin your journey!
      </p>
      <button style={styles.button} onClick={handleStart}>
        🚀 Start Prediction
      </button>
    
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "90px auto",
    padding: "40px",
    backgroundColor: "#1f1f1f",
    borderRadius: "12px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#00ffd0",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "15px",
  },
  list: {
    textAlign: "left",
    margin: "20px auto",
    maxWidth: "600px",
    fontSize: "1.1rem",
  },
  button: {
    padding: "12px 30px",
    fontSize: "1.2rem",
    backgroundColor: "#00ffd0",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "0.3s ease",
  },
};

export default Intro;
