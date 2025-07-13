import React from 'react';
import { useParams } from 'react-router-dom';

const careerData = {
  "AI Engineer": {
    description: "AI Engineers build smart systems using machine learning and deep learning algorithms.",
    skills: ["Python", "Machine Learning", "Data Science", "TensorFlow"],
    path: "B.Tech CSE, AI/ML Specialization, Certifications in AI",
  },
  "new": {
    description: "Coming soon",
  },
  "Data Scientist": {
    description: "Data Scientists analyze complex data to find trends and insights using statistical methods.",
    skills: ["Python", "Statistics", "Pandas", "SQL", "Visualization"],
    path: "B.Sc/B.Tech in CS, Data Science Courses, Bootcamps",
  },
  "Doctor": {
    description: "Doctors diagnose and treat patients, promoting good health and wellness.",
    skills: ["Biology", "Compassion", "Problem-Solving", "Communication"],
    path: "MBBS, Specialization (MD/MS), Medical License",
  },
  "Digital Marketing": {
    description: "Digital marketers promote products through digital channels like social media and SEO.",
    skills: ["SEO", "Social Media", "Analytics", "Creativity"],
    path: "BBA/MBA, Digital Marketing Certifications",
  },
  "FinTech Professional": {
    description: "FinTech professionals build tech solutions for the finance sector.",
    skills: ["Finance", "Programming", "Blockchain", "Risk Analysis"],
    path: "B.Com/B.Tech, FinTech Courses, MBA in Finance/Tech",
  },
  "EdTech Experts": {
    description: "EdTech experts create innovative learning solutions using technology.",
    skills: ["Education", "Tech Tools", "Content Creation"],
    path: "B.Ed, Instructional Design Courses, Tech Certifications",
  },
  "Logistics": {
    description: "Logistics professionals manage supply chains and ensure smooth product delivery.",
    skills: ["Planning", "Coordination", "Data Handling", "Supply Chain Knowledge"],
    path: "BBA/B.Com, Supply Chain Certifications",
  },
  "Data Analysts": {
    description: "Data Analysts interpret data and provide actionable insights.",
    skills: ["Excel", "SQL", "Tableau", "Statistics"],
    path: "B.Sc/B.Com/B.Tech, Data Analysis Courses",
  },
};

const CareerDetail = () => {
  const { name } = useParams(); // Get career name from URL
  const decodedName = decodeURIComponent(name);
  const career = careerData[decodedName];

  if (!career) {
    return (
      <div style={{ padding: '30px', color: 'white', background: '#1e1e2f', minHeight: '100vh' }}>
        <h2>❌ Career details not found for: {decodedName}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', color: 'white', background: '#1e1e2f', minHeight: '100vh' }}>
      <h1 style={{marginTop:"50px"}}>{decodedName}</h1>
      <p><strong>📝 Description:</strong> {career.description}</p>
      <p><strong>🛠️ Skills Required:</strong> {career.skills.join(', ')}</p>
      <p><strong>🎓 Career Path:</strong> {career.path}</p>
    </div>
  );
};

export default CareerDetail;
