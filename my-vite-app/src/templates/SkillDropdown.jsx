import React, { useState } from "react";


const SkillDropdown = ({ featureGroups, onSelect }) => {
  const [selectedFeatures, setSelectedFeatures] = useState({});
  const [openGroup, setOpenGroup] = useState(null);

  const handleSelect = (group, feature) => {
    const updated = { ...selectedFeatures, [group]: feature };
    setSelectedFeatures(updated);
    onSelect(updated); // send updated selections
    setOpenGroup(null); // close dropdown
  };

  return (
    <div>
      {Object.entries(featureGroups).map(([group, options]) => (
        <div key={group} style={{ position: "relative", maxWidth: "300px", marginBottom: "20px" }}>
          <button style={{ width: "250px" }}
              className="cssbuttons-io-button"
              onClick={() => setOpenGroup(openGroup === group ? null : group)}
            >
              {group}: {selectedFeatures[group] || "Select"}
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>

          {openGroup === group && (
            <div
              style={{
                position: "absolute",
                top: "100%",            // dropdown appears below the button
                left: "100%",           // starts at the right edge of the button
                marginLeft: "10px",     // optional: adds space after the button's border
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                zIndex: 1,
                minWidth: "200px"
              }}
            >
              {options.map((opt) => (
                <div
                  key={opt}
                  onClick={() => handleSelect(group, opt)}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    background: selectedFeatures[group] === opt ? "#08a5ff  " : "transparent",
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
    </div>
  );
};

export default SkillDropdown;
