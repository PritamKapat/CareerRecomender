// import { useState } from "react";
// import featureGroups from "../data/featureGroups";
// import orderedFeatures from "../data/features";
// import { usePrediction } from "../context/PredictionContext";
// import '../styles/Skilldrop.css';

// const SkillSelection = ({ onComplete, onBack }) => {
//   const {
//     binaryFeatures,
//     userSkills,      
//     setUserSkills,                      
//     setBinaryFeatures,                  
//     setCareerResult                      
//   } = usePrediction();

//   const [selectedFeatures, setSelectedFeatures] = useState({});
//   const [openGroup, setOpenGroup] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = () => {
//   if (Object.keys(selectedFeatures).length === 0) {
//     alert("⚠️ Please select at least one skill.");
//     return;
//   }

//   setIsSubmitting(true);

//   // 1️⃣ Create DEEP COPY of selections (avoids reference issues)
//   const skillsToSave = JSON.parse(JSON.stringify(selectedFeatures));
//   console.log("🔄 Saving to context:", skillsToSave);

//   // 2️⃣ Update context - FUNCTIONAL UPDATE ensures latest state
//   setUserSkills(prev => {
//     const updatedSkills = { ...prev, ...skillsToSave };
//     console.log("📌 Context update payload:", updatedSkills);
//     return updatedSkills;
//   });

//   // 3️⃣ Create binary representation (preserve category info)
//   const selectedSkillBinary = {};
//   Object.entries(selectedFeatures).forEach(([category, skill]) => {
//     selectedSkillBinary[`${category}_${skill}`] = 1; // Better key format
//   });

//   // 4️⃣ Merge with existing features
//   const mergedFeatures = { ...binaryFeatures, ...selectedSkillBinary };
//   const finalBinaryArray = orderedFeatures.map(f => mergedFeatures[f] || 0);

//   // 5️⃣ Update all context states
//   setBinaryFeatures(finalBinaryArray);
//   console.log(userSkills);
  
  

//   // 6️⃣ DEBUG: Verify updates after completion
//   setTimeout(() => {
//     setIsSubmitting(false);
//     onComplete();
//   }, 100);// Reduced delay for faster debugging
// };

//   const handleSelect = (group, feature) => {
//     const updated = { ...selectedFeatures, [group]: feature };
//     setSelectedFeatures(updated);
//     setOpenGroup(null);
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
//       <h1 style={{ color: "#fff", marginBottom: "30px" }}>🔧 Select Your Skills</h1>
      
//       <button 
//         onClick={onBack}
//         style={{
//           marginBottom: "20px",
//           padding: "8px 16px",
//           background: "transparent",
//           color: "#08a5ff",
//           border: "1px solid #08a5ff",
//           borderRadius: "8px",
//           cursor: "pointer"
//         }}
//       >
//         ← Back to Assessment
//       </button>

//       <div style={{ 
//         display: "grid", 
//         gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//         gap: "20px",
//         marginBottom: "40px"
//       }}>
//         {Object.entries(featureGroups).map(([group, options]) => (
//           <div key={group} style={{ position: "relative" }}>
//             <button
//               className="cssbuttons-io-button"
//               onClick={() => setOpenGroup(openGroup === group ? null : group)}
//             >
//               {group}: {selectedFeatures[group] || "Select"}
//               <div className="icon">
//                 <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M0 0h24v24H0z" fill="none"></path>
//                   <path
//                     d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </div>
//             </button>

//             {openGroup === group && (
//               <div className="skill-dropdown">
//                 {options.map((opt) => (
//                   <div
//                     key={opt}
//                     onClick={() => handleSelect(group, opt)}
//                     className={`skill-option ${
//                       selectedFeatures[group] === opt ? "selected" : ""
//                     }`}
//                   >
//                     {opt}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <button
//         className="submit-button"
//         onClick={handleSubmit}
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? "Processing..." : "Submit Skills"}
//         {isSubmitting && (
//           <span className="spinner" style={{ marginLeft: "10px" }}></span>
//         )}
//       </button>
//     </div>
//   );
// };

// export default SkillSelection;

import { useState } from "react";
import featureGroups from "../data/featureGroups";
import orderedFeatures from "../data/features";
import { usePrediction } from "../context/PredictionContext";
import '../styles/Skilldrop.css';


const SkillSelection = ({ onComplete }) => {
  const {
  binaryFeatures,
  userSkills,      
  setUserSkills,                      
  setBinaryFeatures,                  
  setCareerResult                      
  } = usePrediction();


  const [selectedFeatures, setSelectedFeatures] = useState({});
  const [openGroup, setOpenGroup] = useState(null);
  const [loading, setLoading] = useState(false);

const handleSubmit = () => {
  if (Object.keys(selectedFeatures).length === 0) {
    alert("⚠️ Please select at least one skill.");
    return;
  }

  // 1️⃣ Mark selected skill features as 1
  const selectedSkillBinary = {};
  Object.values(selectedFeatures).forEach((feature) => {
    selectedSkillBinary[feature] = 1;
  });

  // 2️⃣ Save user skill selections in context
  setUserSkills(selectedFeatures);


  // 3️⃣ Merge MCQ binary features (from context) + selected skill features
  const merged = { ...binaryFeatures, ...selectedSkillBinary };

  // 4️⃣ Create ordered binary array
  const finalBinaryArray = orderedFeatures.map((feature) => merged[feature] || 0);
  // 5️⃣ Store final binary array in context
  setBinaryFeatures(finalBinaryArray);

  // 6️⃣ Reset prediction result
  setCareerResult([]);

  // 7️⃣ Log for debugging
  console.log("🧠 Final Binary Input Array:", binaryFeatures);
  console.log("📘 Selected Skills:", selectedFeatures);
  console.log("📘 Selected Skills:", userSkills);
  setLoading(true);

  // 8️⃣ Success message + move to summary
  setTimeout(() => {
      setLoading(false);
      onComplete(); // Notify parent component to proceed to next step
    },);
};

  const handleSelect = (group, feature) => {
    const updated = { ...selectedFeatures, [group]: feature };
    setSelectedFeatures(updated);
    setOpenGroup(null);
  };

  return (
    <div>
      <div style={{height:"100px"}}>

      </div >
      {Object.entries(featureGroups).map(([group, options]) => (
        <div key={group} style={{ marginLeft:"100px", position: "relative", maxWidth: "400px", marginBottom: "20px" }}>
          <button
  className="Documents-btn"
  onClick={() => setOpenGroup(openGroup === group ? null : group)}
>
  <span className="folderContainer">
    <svg
      className="fileBack"
      width="146"
      height="113"
      viewBox="0 0 146 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H57.9195C59.5716 0 61.134 0.737861 62.1822 2.01494L68.1216 9.47652C69.1698 10.7536 70.7322 11.4915 72.3843 11.4915H142C144.209 11.4915 146 13.2824 146 15.4915V109C146 111.209 144.209 113 142 113H4C1.79086 113 0 111.209 0 109V4Z"
        fill="#ffffff"
      />
    </svg>
    <svg
      className="filePage"
      width="67"
      height="90"
      viewBox="0 0 67 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="67" height="90" rx="3" fill="#F1F1F1" />
    </svg>
    <svg
      className="fileFront"
      width="146"
      height="113"
      viewBox="0 0 146 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H57.9195C59.5716 0 61.134 0.737861 62.1822 2.01494L68.1216 9.47652C69.1698 10.7536 70.7322 11.4915 72.3843 11.4915H142C144.209 11.4915 146 13.2824 146 15.4915V109C146 111.209 144.209 113 142 113H4C1.79086 113 0 111.209 0 109V4Z"
        fill="#71baffff"
      />
    </svg>
  </span>
  <span className="text">{group}: {selectedFeatures[group] || "Select"}</span>
</button>


          {openGroup === group && (
            <div className="skillsoptions"
            >
              {options.map((opt) => (
                <div 
                  key={opt}
                  onClick={() => handleSelect(group, opt)}
                  style={{
                    padding: "10px",

                    cursor: "pointer",
                    background: selectedFeatures[group] === opt ? "#08a5ff" : "transparent",
                    borderBottom: "1px solid #ccc"
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button className="button-29" id="submit" onClick={handleSubmit}>
            <span class="text">Predict</span>
      </button>
    </div>
  );
};

export default SkillSelection;