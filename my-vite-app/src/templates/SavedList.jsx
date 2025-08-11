import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import careerImg from "../assets/saved.jpg";
import axios from "axios";

const SavedList = () => {
  const [savedCareers, setSavedCareers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://127.0.0.1:5000/saved-careers", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        setSavedCareers(res.data.saved_careers || []); // ✅ Safe fallback
      })
      .catch((err) => {
        console.error("Error fetching saved careers:", err);
      });
  }, []);

  const handleDelete = (careerId) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://127.0.0.1:5000/saved-careers/${careerId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => {
        setSavedCareers((prev) => prev.filter((career) => career.id !== careerId));
      })
      .catch((err) => {
        console.error("Error deleting saved career:", err);
      });
  };

  return (
    <div className="career-results" style={{marginTop:"50px"}}>
      <h2>💾 Your Saved Careers</h2>
      <div className="career-grid">
        {savedCareers.length > 0 ? (
          savedCareers.map((career, index) => (
            <div key={career.id} className="careercard">
              <div
                className="careercard-image"
                style={{ backgroundImage: `url(${careerImg})` }}
              ></div>
              <p className="careercard-title">
                {index + 1}. {career.career_name}
              </p>
              <div className="careercard-buttons">
                <Link
                  to={`/career/${encodeURIComponent(career.career_name)}`}
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
                <button
                  onClick={() => handleDelete(career.id)}
                  className="noselect"
                >
                  <span className="text">Delete</span>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No careers saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default SavedList;
