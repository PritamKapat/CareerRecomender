import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Career.css';
import careerData from '../data/careerdata';

import { useEffect } from 'react';

const CareerDetail = () => {
  const { name } = useParams(); // Get career name from URL
  const decodedName = decodeURIComponent(name);
  const career = careerData[decodedName];
  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  if (!career) {
    return (
      <div style={{ padding: '30px', color: 'white', background: '#1e1e2f', minHeight: '100vh' }}>
        <h2>❌ Career details not found for: {decodedName}</h2>
      </div>
    );
  }

  return (
    <div className="career-container">
      <h1 className="career-title">{decodedName}</h1>

      <div className="career-section">
        <strong>📝 Description:</strong>
        <p>{career.description}</p>
      </div>

      {/* Salary Information */}
      {career.salary && (
        <div className="career-section">
          <strong>💰 Salary Range:</strong>
          <div className="salary-grid">
            <div className="salary-item">
              <span className="salary-label">Entry Level:</span>
              <span className="salary-value">{career.salary.entry}</span>
            </div>
            <div className="salary-item">
              <span className="salary-label">Mid Level:</span>
              <span className="salary-value">{career.salary.mid}</span>
            </div>
            <div className="salary-item">
              <span className="salary-label">Senior Level:</span>
              <span className="salary-value">{career.salary.senior}</span>
            </div>
          </div>
        </div>
      )}

      {/* Market Information */}
      {career.market && (
        <div className="career-section">
          <strong>📊 Market Information:</strong>
          <div className="market-grid">
            <div className="market-item">
              <span className="market-label">Growth Rate:</span>
              <span className="market-value">{career.market.growthRate}</span>
            </div>
            <div className="market-item">
              <span className="market-label">Demand:</span>
              <span className="market-value">{career.market.demand}</span>
            </div>
            <div className="market-item">
              <span className="market-label">Job Openings:</span>
              <span className="market-value">{career.market.jobOpenings}</span>
            </div>
            <div className="market-item">
              <span className="market-label">Remote Work:</span>
              <span className="market-value">{career.market.remoteWork ? "✅ Available" : "❌ Limited"}</span>
            </div>
          </div>
        </div>
      )}

      {/* Work Style */}
      {career.workStyle && (
        <div className="career-section">
          <strong>🏢 Work Style:</strong>
          <div className="work-style-grid">
            <div className="work-item">
              <span className="work-label">Environment:</span>
              <span className="work-value">{career.workStyle.environment}</span>
            </div>
            <div className="work-item">
              <span className="work-label">Hours:</span>
              <span className="work-value">{career.workStyle.hours}</span>
            </div>
            <div className="work-item">
              <span className="work-label">Stress Level:</span>
              <span className="work-value">{career.workStyle.stress}</span>
            </div>
            <div className="work-item">
              <span className="work-label">Work-Life Balance:</span>
              <span className="work-value">{career.workStyle.workLifeBalance}</span>
            </div>
          </div>
        </div>
      )}

      {/* Skills Required */}
      <div className="career-section">
        <strong>🛠️ Skills Required:</strong>
        <div className="skills-list">
          {career.skills?.map((skill, index) => (
            <div key={index} className="skill-item">{skill}</div>
          ))}
        </div>
      </div>

      {/* Tools & Technologies */}
      {career.tools && (
        <div className="career-section">
          <strong>🔧 Tools & Technologies:</strong>
          {Object.entries(career.tools).map(([category, tools]) => (
            <div key={category} className="tools-category">
              <strong className="tools-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}:</strong>
              <div className="tools-list">
                {tools.map((tool, index) => (
                  <div key={index} className="tool-item">{tool}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education Requirements */}
      {career.education && (
        <div className="career-section">
          <strong>🎓 Education Requirements:</strong>
          <div className="education-grid">
            <div className="education-item">
              <span className="education-label">Minimum:</span>
              <span className="education-value">{career.education.minimum}</span>
            </div>
            <div className="education-item">
              <span className="education-label">Preferred:</span>
              <span className="education-value">{career.education.preferred}</span>
            </div>
            <div className="education-item">
              <span className="education-label">Duration:</span>
              <span className="education-value">{career.education.duration}</span>
            </div>
            <div className="education-item">
              <span className="education-label">Cost:</span>
              <span className="education-value">{career.education.cost}</span>
            </div>
          </div>
          {career.education.certifications && (
            <div className="certifications">
              <strong>Certifications:</strong>
              <div className="certifications-list">
                {career.education.certifications.map((cert, index) => (
                  <div key={index} className="certification-item">{cert}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Career Path */}
      <div className="career-section">
        <strong>🎓 Career Path:</strong>
        <p>{career.path}</p>
      </div>

      {/* Career Progression */}
      {career.progression && (
        <div className="career-section">
          <strong>📈 Career Progression:</strong>
          <div className="progression-timeline">
            <div className="progression-item">
              <span className="progression-stage">Entry:</span>
              <span className="progression-role">{career.progression.entry}</span>
            </div>
            <div className="progression-item">
              <span className="progression-stage">Mid:</span>
              <span className="progression-role">{career.progression.mid}</span>
            </div>
            <div className="progression-item">
              <span className="progression-stage">Senior:</span>
              <span className="progression-role">{career.progression.senior}</span>
            </div>
            <div className="progression-item">
              <span className="progression-stage">Advanced:</span>
              <span className="progression-role">{career.progression.advanced}</span>
            </div>
            <div className="progression-item">
              <span className="progression-stage">Timeline:</span>
              <span className="progression-role">{career.progression.timeline}</span>
            </div>
          </div>
        </div>
      )}

      {/* Personality Traits */}
      {career.personality && (
        <div className="career-section">
          <strong>👤 Personality Traits:</strong>
          <div className="personality-grid">
            <div className="personality-category">
              <strong>Traits:</strong>
              <div className="traits-list">
                {career.personality.traits.map((trait, index) => (
                  <div key={index} className="trait-item">{trait}</div>
                ))}
              </div>
            </div>
            <div className="personality-category">
              <strong>Soft Skills:</strong>
              <div className="soft-skills-list">
                {career.personality.softSkills.map((skill, index) => (
                  <div key={index} className="soft-skill-item">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits */}
      {career.benefits && (
        <div className="career-section">
          <strong>💼 Benefits:</strong>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-label">Health Insurance:</span>
              <span className="benefit-value">{career.benefits.healthInsurance ? "✅ Yes" : "❌ No"}</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-label">Retirement:</span>
              <span className="benefit-value">{career.benefits.retirement}</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-label">Vacation:</span>
              <span className="benefit-value">{career.benefits.vacation}</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-label">Flexibility:</span>
              <span className="benefit-value">{career.benefits.flexibility}</span>
            </div>
          </div>
          {career.benefits.perks && (
            <div className="perks">
              <strong>Perks:</strong>
              <div className="perks-list">
                {career.benefits.perks.map((perk, index) => (
                  <div key={index} className="perk-item">✨ {perk}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Future Outlook */}
      {career.future && (
        <div className="career-section">
          <strong>🔮 Future Outlook:</strong>
          <div className="future-grid">
            <div className="future-item">
              <span className="future-label">Automation Risk:</span>
              <span className="future-value">{career.future.automationRisk}</span>
            </div>
            <div className="future-item">
              <span className="future-label">Sustainability:</span>
              <span className="future-value">{career.future.sustainability}</span>
            </div>
            <div className="future-item">
              <span className="future-label">Global Demand:</span>
              <span className="future-value">{career.future.globalDemand}</span>
            </div>
          </div>
          {career.future.emergingTrends && (
            <div className="trends">
              <strong>Emerging Trends:</strong>
              <div className="trends-list">
                {career.future.emergingTrends.map((trend, index) => (
                  <div key={index} className="trend-item">🚀 {trend}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CareerDetail;
