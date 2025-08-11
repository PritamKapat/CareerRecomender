import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePrediction } from "../context/PredictionContext";
import careerImg from "../assets/lap.jpg";
import axios from "axios";

const PredictionPage = () => {
  const { binaryFeatures, careerResult, setCareerResult } = usePrediction();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const sendPredictionRequest = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_array: binaryFeatures }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setCareerResult(data.top_careers || []);
      setLoading(false);
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message);
      setCareerResult([
        { career: "Error: Could not get predictions. Please try again later." },
      ]);
      setLoading(false);
    }
  };

  useEffect(() => {
    // If we already have results, skip the API call
    if (careerResult.length > 0) {
      setLoading(false);
      return;
    }

    // Only call API if binaryFeatures exist
    if (binaryFeatures && Object.keys(binaryFeatures).length > 0) {
      sendPredictionRequest();
    } else {
      setLoading(false);
    }
  }, [binaryFeatures, careerResult]);

  const handleSubmit = () => {
    navigate("/");
  };

  const handleSave = async (careerName) => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("http://127.0.0.1:5000/saved-careers", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.saved_careers.length >= 3) {
        alert("You can only save up to 3 careers.");
        return;
      }

      await axios.post(
        "http://127.0.0.1:5000/save-careers",
        { career_name: careerName },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(`${careerName} saved successfully!`);
    } catch (err) {
      console.error("Error saving career:", err);
      alert("Error saving career");
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Analyzing your skills and interests...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>⚠️ Something went wrong</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="prediction-container">
      {careerResult.length > 0 && (
        <div className="career-results">
          <h2>🎯 Top Career Matches</h2>
          <div className="career-grid">
            {careerResult.map((career, index) => (
              <div key={`${career.career}-${index}`} className="careercard">
                <div
                  className="careercard-image"
                  style={{ backgroundImage: `url(${careerImg})` }}
                ></div>
                <p className="careercard-title">
                  {index + 1}. {career.career}
                </p>
                <div className="careercard-buttons">
                  <Link
                    to={`/career/${encodeURIComponent(career.career)}`}
                    className="careercard-button careercard-button-details"
                  >
                    <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M7 17l9.2-9.2M17 17V7H7"></path>
        </svg>
                    More details
                  </Link>
                  <button class="yesselect" onClick={() => handleSave(career.career)}>
        <span class="text">Save</span><span class="icon"
          ><svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          ></svg
          ><span class="buttonSpan">+</span></span
        >
      </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        className="button5"
        style={{ width: "100px" }}
        onClick={handleSubmit}
      >
        Go back to home
      </button>
    </div>
  );
};

export default PredictionPage;
