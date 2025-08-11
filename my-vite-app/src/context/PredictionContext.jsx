import { createContext, useContext, useState, useEffect } from "react";

const PredictionContext = createContext();

export const PredictionProvider = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [userSkills, setUserSkills] = useState({});
  const [binaryFeatures, setBinaryFeatures] = useState({});
  
  // Load careerResult from localStorage on first load
  const [careerResult, setCareerResult] = useState(() => {
    const saved = localStorage.getItem("careerResult");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever it changes
  useEffect(() => {
    if (careerResult.length > 0) {
      localStorage.setItem("careerResult", JSON.stringify(careerResult));
    }
  }, [careerResult]);

  return (
    <PredictionContext.Provider
      value={{
        userAnswers,
        setUserAnswers,
        userSkills,
        setUserSkills,
        binaryFeatures,
        setBinaryFeatures,
        careerResult,
        setCareerResult,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
};

export const usePrediction = () => useContext(PredictionContext);
