const careerData = {
    "AI Engineer": {
        description: "AI Engineers build smart systems using machine learning and deep learning algorithms.",
        skills: ["Python", "Machine Learning", "Data Science", "TensorFlow"],
        path: "B.Tech CSE, AI/ML Specialization, Certifications in AI",
        salary: {
          entry: "$70,000 - $90,000",
          mid: "$100,000 - $150,000",
          senior: "$160,000 - $250,000",
          currency: "USD"
        },
        market: {
          growthRate: "23% (2023-2030)",
          demand: "Very High",
          jobOpenings: "2.5M+ globally",
          remoteWork: true,
          flexibility: "Hybrid/Remote"
        },
        workStyle: {
          environment: "Office/Remote",
          travel: "Minimal",
          hours: "40-50/week",
          stress: "Medium-High",
          workLifeBalance: "Good"
        },
        education: {
          minimum: "Bachelor's Degree",
          preferred: "Master's Degree",
          certifications: ["AWS ML", "Google Cloud AI", "Microsoft Azure AI"],
          duration: "4-6 years",
          cost: "$30,000 - $120,000"
        },
        benefits: {
          healthInsurance: true,
          retirement: "401k matching",
          vacation: "20-25 days/year",
          flexibility: "Flexible hours",
          perks: ["Stock options", "Learning budget", "Conference attendance"]
        },
        future: {
          automationRisk: "Low",
          emergingTrends: ["Generative AI", "Edge Computing", "AI Ethics"],
          sustainability: "High",
          globalDemand: "Exploding"
        }
      },
      "Data Scientist": {
        description: "Data Scientists analyze complex data to find trends and insights using statistical methods.",
        skills: ["Python", "Statistics", "Pandas", "SQL", "Visualization"],
        path: "B.Sc/B.Tech in CS, Data Science Courses, Bootcamps",
        salary: {
          entry: "$65,000 - $85,000",
          mid: "$95,000 - $140,000",
          senior: "$150,000 - $220,000",
          currency: "USD"
        },
        market: {
          growthRate: "36% (2023-2030)",
          demand: "Very High",
          jobOpenings: "3.2M+ globally",
          remoteWork: true,
          flexibility: "Hybrid/Remote"
        },
        workStyle: {
          environment: "Office/Remote",
          travel: "Minimal",
          hours: "40-45/week",
          stress: "Medium",
          workLifeBalance: "Excellent"
        },
        education: {
          minimum: "Bachelor's Degree",
          preferred: "Master's/PhD",
          certifications: ["IBM Data Science", "Google Data Analytics", "Microsoft Data Science"],
          duration: "4-8 years",
          cost: "$25,000 - $150,000"
        },
        benefits: {
          healthInsurance: true,
          retirement: "401k matching",
          vacation: "20-25 days/year",
          flexibility: "Flexible hours",
          perks: ["Stock options", "Conference budget", "Learning resources"]
        },
        future: {
          automationRisk: "Low",
          emergingTrends: ["AutoML", "MLOps", "Data Engineering"],
          sustainability: "High",
          globalDemand: "Growing rapidly"
        }
      },
      "Doctor": {
        description: "Doctors diagnose and treat patients, promoting good health and wellness.",
        skills: ["Biology", "Compassion", "Problem-Solving", "Communication"],
        path: "MBBS, Specialization (MD/MS), Medical License",
        salary: {
          entry: "$60,000 - $80,000",
          mid: "$150,000 - $300,000",
          senior: "$300,000 - $500,000",
          currency: "USD"
        },
        market: {
          growthRate: "13% (2023-2030)",
          demand: "High",
          jobOpenings: "1.2M+ globally",
          remoteWork: false,
          flexibility: "Limited"
        },
        workStyle: {
          environment: "Hospital/Clinic",
          travel: "Variable",
          hours: "50-80/week",
          stress: "High",
          workLifeBalance: "Challenging"
        },
        education: {
          minimum: "Medical Degree",
          preferred: "Specialization",
          certifications: ["Medical License", "Board Certifications"],
          duration: "8-12 years",
          cost: "$200,000 - $400,000"
        },
        benefits: {
          healthInsurance: true,
          retirement: "Pension plans",
          vacation: "15-25 days/year",
          flexibility: "Limited",
          perks: ["Professional development", "Conference attendance"]
        },
        future: {
          automationRisk: "Low",
          emergingTrends: ["Telemedicine", "AI-assisted diagnosis", "Precision medicine"],
          sustainability: "Very High",
          globalDemand: "Always needed"
        }
      },
      "Digital Marketing": {
        description: "Digital marketers promote products through digital channels like social media and SEO.",
        skills: ["SEO", "Social Media", "Analytics", "Creativity"],
        path: "BBA/MBA, Digital Marketing Certifications",
        salary: {
          entry: "$40,000 - $60,000",
          mid: "$70,000 - $100,000",
          senior: "$120,000 - $180,000",
          currency: "USD"
        },
        market: {
          growthRate: "19% (2023-2030)",
          demand: "High",
          jobOpenings: "1.8M+ globally",
          remoteWork: true,
          flexibility: "High"
        },
        workStyle: {
          environment: "Office/Remote",
          travel: "Minimal",
          hours: "40-45/week",
          stress: "Medium",
          workLifeBalance: "Good"
        },
        education: {
          minimum: "Bachelor's Degree",
          preferred: "Marketing/Business Degree",
          certifications: ["Google Ads", "Facebook Blueprint", "HubSpot"],
          duration: "3-4 years",
          cost: "$20,000 - $80,000"
        },
       
        benefits: {
          healthInsurance: true,
          retirement: "401k matching",
          vacation: "15-20 days/year",
          flexibility: "Flexible hours",
          perks: ["Performance bonuses", "Learning budget", "Remote work"]
        },
        future: {
          automationRisk: "Medium",
          emergingTrends: ["AI-powered marketing", "Voice search", "Video content"],
          sustainability: "High",
          globalDemand: "Growing"
        }
      },
      "FinTech Professional": {
        description: "FinTech professionals build tech solutions for the finance sector.",
        skills: ["Finance", "Programming", "Blockchain", "Risk Analysis"],
        path: "B.Com/B.Tech, FinTech Courses, MBA in Finance/Tech",
        salary: {
          entry: "$60,000 - $80,000",
          mid: "$100,000 - $150,000",
          senior: "$180,000 - $300,000",
          currency: "USD"
        },
        market: {
          growthRate: "25% (2023-2030)",
          demand: "Very High",
          jobOpenings: "1.5M+ globally",
          remoteWork: true,
          flexibility: "Hybrid"
        },
        workStyle: {
          environment: "Office/Remote",
          travel: "Minimal",
          hours: "45-55/week",
          stress: "Medium-High",
          workLifeBalance: "Good"
        },
        education: {
          minimum: "Bachelor's Degree",
          preferred: "Finance/CS Degree",
          certifications: ["CFA", "FRM", "Blockchain Certifications"],
          duration: "4-6 years",
          cost: "$30,000 - $120,000"
        },
        benefits: {
          healthInsurance: true,
          retirement: "401k matching",
          vacation: "20-25 days/year",
          flexibility: "Flexible hours",
          perks: ["Stock options", "Performance bonuses", "Learning budget"]
        },
        future: {
          automationRisk: "Low",
          emergingTrends: ["DeFi", "CBDCs", "AI in Finance"],
          sustainability: "High",
          globalDemand: "Growing rapidly"
        }
      },
      "EdTech Experts": {
        description: "EdTech experts create innovative learning solutions using technology.",
        skills: ["Education", "Tech Tools", "Content Creation"],
        path: "B.Ed, Instructional Design Courses, Tech Certifications",
        salary: {
          entry: "$45,000 - $65,000",
          mid: "$70,000 - $100,000",
          senior: "$120,000 - $180,000",
          currency: "USD"
        },
        market: {
          growthRate: "22% (2023-2030)",
          demand: "High",
          jobOpenings: "1.1M+ globally",
          remoteWork: true,
          flexibility: "High"
        },
        workStyle: {
          environment: "Office/Remote",
          travel: "Minimal",
          hours: "40-45/week",
          stress: "Medium",
          workLifeBalance: "Excellent"
        },
        education: {
          minimum: "Bachelor's Degree",
          preferred: "Education/Tech Degree",
          certifications: ["Instructional Design", "EdTech Platforms", "Learning Management Systems"],
          duration: "4-6 years",
          cost: "$25,000 - $80,000"
        },
        benefits: {
          healthInsurance: true,
          retirement: "401k matching",
          vacation: "20-25 days/year",
          flexibility: "Flexible hours",
          perks: ["Learning budget", "Conference attendance", "Remote work"]
        },
        future: {
          automationRisk: "Low",
          emergingTrends: ["AI in Education", "VR/AR Learning", "Personalized Learning"],
          sustainability: "High",
          globalDemand: "Growing"
        }
      },
      "Logistics": {
        description: "Logistics professionals manage supply chains and ensure smooth product delivery.",
        skills: ["Planning", "Coordination", "Data Handling", "Supply Chain Knowledge"],
        path: "BBA/B.Com, Supply Chain Certifications",
        salary: {
          entry: "$45,000 - $65,000",
          mid: "$70,000 - $100,000",
          senior: "$120,000 - $180,000",
          currency: "USD"
        },
        market: {
          growthRate: "18% (2023-2030)",
          demand: "High",
          jobOpenings: "1.3M+ globally",
          remoteWork: true,
          flexibility: "Hybrid"
        },
        workStyle: {
          environment: "Office/Warehouse",
          travel: "Moderate",
          hours: "40-50/week",
          stress: "Medium",
          workLifeBalance: "Good"
        },
        education: {
          minimum: "Bachelor's Degree",
          preferred: "Supply Chain/Logistics Degree",
          certifications: ["CSCP", "CLTD", "CPSM"],
          duration: "4-5 years",
          cost: "$25,000 - $80,000"
        },
        benefits: {
          healthInsurance: true,
          retirement: "401k matching",
          vacation: "15-20 days/year",
          flexibility: "Moderate",
          perks: ["Performance bonuses", "Travel opportunities", "Learning budget"]
        },
        future: {
          automationRisk: "Medium",
          emergingTrends: ["AI in Logistics", "Autonomous vehicles", "Drone delivery"],
          sustainability: "High",
          globalDemand: "Growing"
        }
      },
      "Data Analysts": {
        description: "Data Analysts interpret data and provide actionable insights.",
        skills: ["Excel", "SQL", "Tableau", "Statistics"],
        path: "B.Sc/B.Com/B.Tech, Data Analysis Courses",
        salary: {
          entry: "$50,000 - $70,000",
          mid: "$75,000 - $110,000",
          senior: "$130,000 - $180,000",
          currency: "USD"
        },
        market: {
          growthRate: "25% (2023-2030)",
          demand: "Very High",
          jobOpenings: "2.1M+ globally",
          remoteWork: true,
          flexibility: "High"
        },
        workStyle: {
          environment: "Office/Remote",
          travel: "Minimal",
          hours: "40-45/week",
          stress: "Medium",
          workLifeBalance: "Excellent"
        },
        education: {
          minimum: "Bachelor's Degree",
          preferred: "Statistics/Mathematics Degree",
          certifications: ["Google Data Analytics", "Microsoft Power BI", "Tableau"],
          duration: "4-5 years",
          cost: "$20,000 - $80,000"
        },
       
        benefits: {
          healthInsurance: true,
          retirement: "401k matching",
          vacation: "20-25 days/year",
          flexibility: "Flexible hours",
          perks: ["Learning budget", "Conference attendance", "Remote work"]
        },
        future: {
          automationRisk: "Medium",
          emergingTrends: ["AutoML", "Real-time analytics", "Predictive analytics"],
          sustainability: "High",
          globalDemand: "Growing rapidly"
        }
      },
  "BBA- Bachelor of Business Administration": {
  description: "Focuses on core business disciplines including finance, marketing, and management, preparing students for entry-level corporate roles.",
  skills: ["Management", "Teamwork", "Communication", "Strategic Thinking", "Problem Solving"],
  path: "BBA → MBA / PGDM / Corporate Roles",
  salary: {
    entry: "$35,000 - $55,000",
    mid: "$60,000 - $90,000",
    senior: "$100,000+",
    currency: "USD"
  },
  market: {
    growthRate: "10% (2023–2030)",
    demand: "High",
    jobOpenings: "1M+ globally",
    remoteWork: true,
    flexibility: "Moderate"
  },
  workStyle: {
    environment: "Corporate Office",
    travel: "Occasional",
    hours: "40-50/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "Bachelor's Degree",
    preferred: "MBA / Management Certifications",
    certifications: ["PMP", "Six Sigma", "Google Business Certificate"],
    duration: "3 years",
    cost: "$10,000 - $50,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "401k/PF",
    vacation: "15-20 days/year",
    flexibility: "Moderate",
    perks: ["Bonuses", "Training", "Corporate events"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["AI-driven Management", "Digital Strategy", "Remote Team Leadership"],
    sustainability: "Medium",
    globalDemand: "Consistently high"
  }
},
"BCA- Bachelor of Computer Applications": {
  description: "Prepares students in computer science fundamentals, programming, and software development for IT and tech jobs.",
  skills: ["Java", "Python", "Databases", "Web Development", "Problem Solving"],
  path: "BCA → MCA / Software Developer / Tech Certifications",
  salary: {
    entry: "$40,000 - $60,000",
    mid: "$70,000 - $100,000",
    senior: "$120,000+",
    currency: "USD"
  },
  market: {
    growthRate: "22% (2023–2030)",
    demand: "Very High",
    jobOpenings: "3M+ globally",
    remoteWork: true,
    flexibility: "High"
  },
  workStyle: {
    environment: "Office/Remote",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Medium",
    workLifeBalance: "Very Good"
  },
  education: {
    minimum: "Bachelor's Degree",
    preferred: "MCA or Certifications (AWS, Full Stack, etc.)",
    certifications: ["CompTIA", "Google IT Support", "AWS Cloud Practitioner"],
    duration: "3 years",
    cost: "$7,000 - $30,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Company Pension",
    vacation: "20+ days/year",
    flexibility: "Flexible hours",
    perks: ["Remote work", "Upskilling funds", "Hackathon access"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["AI Integration", "Cloud DevOps", "Cybersecurity"],
    sustainability: "High",
    globalDemand: "Rapidly increasing"
  }
},
"B.Tech Computer Science and Engineering": {
  description: "An engineering degree focusing on computer systems, software design, and algorithms.",
  skills: ["DSA", "Operating Systems", "Cloud Computing", "Cybersecurity", "AI/ML"],
  path: "B.Tech → Software Engineer / Data Scientist / System Architect",
  salary: {
    entry: "$50,000 - $80,000",
    mid: "$90,000 - $130,000",
    senior: "$150,000+",
    currency: "USD"
  },
  market: {
    growthRate: "25% (2023–2030)",
    demand: "Extremely High",
    jobOpenings: "5M+ globally",
    remoteWork: true,
    flexibility: "Very High"
  },
  workStyle: {
    environment: "Remote/Hybrid",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Medium to High",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "Bachelor's Degree",
    preferred: "MS or Tech Specialization",
    certifications: ["Google Cloud", "AWS DevOps", "Certified Kubernetes"],
    duration: "4 years",
    cost: "$10,000 - $70,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "401k/PF",
    vacation: "20+ days/year",
    flexibility: "Fully Flexible",
    perks: ["Remote-first", "Stock Options", "Global Teams"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Generative AI", "Quantum Computing", "DevSecOps"],
    sustainability: "High",
    globalDemand: "Skyrocketing"
  }
},
"MBBS Bachelor of Medicine and Bachelor of Surgery": {
  description: "Medical degree required to become a licensed doctor, focused on diagnosis, treatment, and prevention of diseases.",
  skills: ["Anatomy", "Clinical Diagnosis", "Patient Care", "Ethics", "Communication"],
  path: "MBBS → MD / MS / Specialist Physician / Surgeon",
  salary: {
    entry: "$60,000 - $90,000",
    mid: "$120,000 - $180,000",
    senior: "$250,000+",
    currency: "USD"
  },
  market: {
    growthRate: "13% (2023–2030)",
    demand: "Very High",
    jobOpenings: "Shortage in many countries",
    remoteWork: false,
    flexibility: "Low"
  },
  workStyle: {
    environment: "Hospitals/Clinics",
    travel: "Minimal",
    hours: "50-80/week",
    stress: "High",
    workLifeBalance: "Challenging"
  },
  education: {
    minimum: "Bachelor's Degree in Medicine",
    preferred: "MD / Specialization",
    certifications: ["Medical License", "Residency Completion"],
    duration: "5.5 - 7 years",
    cost: "$50,000 - $200,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Pension/Gratuity",
    vacation: "15 days/year (varies)",
    flexibility: "Low",
    perks: ["Respect", "Job Security", "Stable Income"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Telemedicine", "AI-Assisted Diagnostics", "Robotic Surgery"],
    sustainability: "Essential",
    globalDemand: "Extremely High"
  }
},
"Integrated Law Course- BA + LL.B": {
  description: "A five-year integrated program combining a Bachelor of Arts with a Bachelor of Laws, providing both legal education and foundational knowledge in arts subjects like political science, sociology, and history.",
  skills: ["Legal Research", "Critical Thinking", "Drafting", "Public Speaking", "Negotiation", "Analytical Reasoning"],
  path: "BA + LL.B → Advocate / Corporate Lawyer / Judge / Legal Advisor / Civil Services",
  salary: {
    entry: "$6,000 - $12,000",
    mid: "$15,000 - $30,000",
    senior: "$40,000+",
    currency: "USD"
  },
  market: {
    growthRate: "9% (2023–2030)",
    demand: "High",
    jobOpenings: "Consistent demand in public and private sectors",
    remoteWork: "Partial",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Courtrooms, Offices, Client Meetings",
    travel: "Moderate (depends on practice area)",
    hours: "40-60/week",
    stress: "Medium to High",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "High School Completion (12th Grade)",
    preferred: "Specialization in Corporate, Criminal, or International Law",
    certifications: ["Bar Council Enrollment", "Internship Experience"],
    duration: "5 years",
    cost: "$3,000 - $25,000"
  },
  benefits: {
    healthInsurance: "Varies by employer",
    retirement: "Pension/Provident Fund",
    vacation: "Varies (often flexible for self-employed lawyers)",
    flexibility: "Medium",
    perks: ["Prestige", "Intellectual Challenge", "Variety of Work"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Legal Tech", "Alternative Dispute Resolution", "International Arbitration"],
    sustainability: "Strong",
    globalDemand: "Steady"
  }
},
"BFD- Bachelor of Fashion Designing": {
  description: "An undergraduate degree focusing on the creation of clothing, accessories, and lifestyle products, combining creativity with technical skills in fashion.",
  skills: ["Fashion Illustration", "Textile Knowledge", "Trend Analysis", "Pattern Making", "Sewing", "Creativity"],
  path: "BFD → Fashion Designer / Stylist / Textile Designer / Brand Manager",
  salary: {
    entry: "$5,000 - $12,000",
    mid: "$15,000 - $30,000",
    senior: "$50,000+",
    currency: "USD"
  },
  market: {
    growthRate: "4% (2023–2030)",
    demand: "Moderate",
    jobOpenings: "Competitive field with niche opportunities",
    remoteWork: "Partial",
    flexibility: "High"
  },
  workStyle: {
    environment: "Studios, Workshops, Fashion Houses",
    travel: "Frequent (events, sourcing materials, fashion shows)",
    hours: "40-60/week",
    stress: "Medium",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "High School Completion (12th Grade)",
    preferred: "Specialization in Fashion Marketing or Textile Design",
    certifications: ["Internships", "Portfolio Development"],
    duration: "3-4 years",
    cost: "$5,000 - $20,000"
  },
  benefits: {
    healthInsurance: "Varies by employer",
    retirement: "Varies",
    vacation: "Flexible (depends on projects and seasons)",
    flexibility: "High",
    perks: ["Creative Freedom", "Travel Opportunities", "Industry Recognition"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Sustainable Fashion", "Digital Clothing", "3D Printing in Fashion"],
    sustainability: "Growing",
    globalDemand: "Steady"
  }
},

"BBS- Bachelor of Business Studies": {
  description: "An undergraduate program providing comprehensive business knowledge, blending management principles, economics, and organizational strategies.",
  skills: ["Management", "Communication", "Analytical Thinking", "Marketing", "Finance", "Leadership"],
  path: "BBS → Business Analyst / Marketing Executive / Entrepreneur / Manager",
  salary: {
    entry: "$6,000 - $15,000",
    mid: "$20,000 - $40,000",
    senior: "$60,000+",
    currency: "USD"
  },
  market: {
    growthRate: "7% (2023–2030)",
    demand: "High",
    jobOpenings: "Consistent in all sectors",
    remoteWork: "Possible",
    flexibility: "High"
  },
  workStyle: {
    environment: "Offices, Client Sites",
    travel: "Occasional",
    hours: "40-50/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School Completion (12th Grade)",
    preferred: "Specialization in Finance, Marketing, or HR",
    certifications: ["Internships", "Business Certifications"],
    duration: "3 years",
    cost: "$3,000 - $15,000"
  },
  benefits: {
    healthInsurance: "Varies by employer",
    retirement: "Provident Fund/Pension",
    vacation: "Standard company policies",
    flexibility: "High",
    perks: ["Career Growth", "Versatile Skills", "High Demand"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Data-Driven Decision Making", "Digital Marketing", "Global Business"],
    sustainability: "Strong",
    globalDemand: "High"
  }
},

"BTTM- Bachelor of Travel and Tourism Management": {
  description: "A program focusing on the management of travel, tourism, and hospitality industries, preparing students for roles in travel agencies, hotels, and event management.",
  skills: ["Customer Service", "Event Planning", "Marketing", "Intercultural Communication", "Travel Planning", "Negotiation"],
  path: "BTTM → Travel Consultant / Tour Manager / Hospitality Executive / Event Coordinator",
  salary: {
    entry: "$4,000 - $10,000",
    mid: "$12,000 - $25,000",
    senior: "$40,000+",
    currency: "USD"
  },
  market: {
    growthRate: "8% (2023–2030)",
    demand: "High",
    jobOpenings: "Seasonal fluctuations with consistent opportunities",
    remoteWork: "Limited",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Offices, Travel Destinations, Events",
    travel: "Frequent",
    hours: "40-60/week",
    stress: "Medium",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "High School Completion (12th Grade)",
    preferred: "Specialization in Tourism Marketing or Hospitality",
    certifications: ["IATA Certification", "Language Courses"],
    duration: "3-4 years",
    cost: "$3,000 - $12,000"
  },
  benefits: {
    healthInsurance: "Varies",
    retirement: "Varies",
    vacation: "Often generous in travel companies",
    flexibility: "Medium",
    perks: ["Travel Perks", "Networking", "Dynamic Work Environment"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Eco-Tourism", "Virtual Tourism", "Adventure Travel"],
    sustainability: "Growing",
    globalDemand: "Strong"
  }
},

"BVA- Bachelor of Visual Arts": {
  description: "A degree focused on creative disciplines like painting, sculpture, photography, and other visual mediums, fostering artistic expression and technical skills.",
  skills: ["Drawing", "Painting", "3D Modeling", "Creativity", "Art History", "Photography"],
  path: "BVA → Professional Artist / Illustrator / Photographer / Art Director",
  salary: {
    entry: "$4,000 - $8,000",
    mid: "$12,000 - $25,000",
    senior: "$40,000+",
    currency: "USD"
  },
  market: {
    growthRate: "5% (2023–2030)",
    demand: "Moderate",
    jobOpenings: "Competitive and niche",
    remoteWork: "Possible",
    flexibility: "High"
  },
  workStyle: {
    environment: "Studios, Galleries, On-Site Locations",
    travel: "Occasional",
    hours: "Varies greatly",
    stress: "Low to Medium",
    workLifeBalance: "High"
  },
  education: {
    minimum: "High School Completion (12th Grade)",
    preferred: "Specialization in chosen art form",
    certifications: ["Portfolio Development", "Workshops"],
    duration: "3-4 years",
    cost: "$2,000 - $10,000"
  },
  benefits: {
    healthInsurance: "Varies",
    retirement: "Varies",
    vacation: "Flexible",
    flexibility: "High",
    perks: ["Creative Freedom", "Artistic Recognition", "Flexible Schedule"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Digital Art", "NFTs", "Immersive Installations"],
    sustainability: "Strong",
    globalDemand: "Steady"
  }
},

"BA in History": {
  description: "A degree focusing on the study of historical events, cultures, and societies, developing research and analytical skills for diverse career paths.",
  skills: ["Research", "Critical Analysis", "Writing", "Archival Management", "Public Speaking", "Cultural Awareness"],
  path: "BA in History → Historian / Archivist / Educator / Museum Curator",
  salary: {
    entry: "$4,000 - $8,000",
    mid: "$10,000 - $20,000",
    senior: "$35,000+",
    currency: "USD"
  },
  market: {
    growthRate: "3% (2023–2030)",
    demand: "Moderate",
    jobOpenings: "Available in academia, research, and cultural institutions",
    remoteWork: "Possible",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Libraries, Archives, Classrooms, Museums",
    travel: "Occasional",
    hours: "35-45/week",
    stress: "Low to Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School Completion (12th Grade)",
    preferred: "Master’s in History or Archaeology",
    certifications: ["Research Training", "Language Proficiency"],
    duration: "3 years",
    cost: "$2,000 - $10,000"
  },
  benefits: {
    healthInsurance: "Varies",
    retirement: "Varies",
    vacation: "Standard academic breaks",
    flexibility: "Medium",
    perks: ["Intellectual Pursuits", "Preservation of Culture", "Teaching Opportunities"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Digital Archives", "Heritage Tourism", "Public History"],
    sustainability: "Stable",
    globalDemand: "Moderate"
  }
},

"B.Sc.- Information Technology": {
  description: "A degree program focusing on computing, networking, and software systems, preparing graduates for careers in IT and technology-driven industries.",
  skills: ["Programming", "Networking", "Database Management", "Cybersecurity", "Problem Solving", "Project Management"],
  path: "B.Sc. IT → Software Developer / Network Administrator / Data Analyst / IT Consultant",
  salary: {
    entry: "$8,000 - $15,000",
    mid: "$20,000 - $40,000",
    senior: "$60,000+",
    currency: "USD"
  },
  market: {
    growthRate: "12% (2023–2030)",
    demand: "Very High",
    jobOpenings: "Abundant across industries",
    remoteWork: "Highly Possible",
    flexibility: "High"
  },
  workStyle: {
    environment: "Offices, Remote Work, Data Centers",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School Completion (12th Grade)",
    preferred: "Certifications in Networking, Cloud, or Programming",
    certifications: ["CompTIA", "Cisco", "Microsoft", "AWS"],
    duration: "3 years",
    cost: "$3,000 - $15,000"
  },
  benefits: {
    healthInsurance: "Common in IT roles",
    retirement: "Provident Fund/Pension",
    vacation: "Standard company policies",
    flexibility: "High",
    perks: ["Remote Work", "High Salary Potential", "Career Growth"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Cloud Computing", "AI Integration", "Cybersecurity"],
    sustainability: "Strong",
    globalDemand: "Very High"
  }
},
"BPharma- Bachelor of Pharmacy": {
  description: "An undergraduate program focused on pharmaceutical sciences, including drug formulation, development, and dispensing, preparing students for roles in healthcare and research.",
  skills: ["Pharmacology", "Chemistry", "Research", "Attention to Detail", "Communication", "Regulatory Knowledge"],
  path: "BPharma → Pharmacist / Medical Representative / Pharmaceutical Scientist / Regulatory Affairs Specialist",
  salary: {
    entry: "$8,000 - $15,000",
    mid: "$20,000 - $35,000",
    senior: "$50,000+",
    currency: "USD"
  },
  market: {
    growthRate: "6% (2023–2030)",
    demand: "High",
    jobOpenings: "Consistent across healthcare and research",
    remoteWork: "Limited",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Pharmacies, Hospitals, Laboratories",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School Completion (12th Grade) with Science",
    preferred: "Master’s in Pharmacy or Clinical Research",
    certifications: ["Pharmacy Licensure", "Clinical Trials Training"],
    duration: "4 years",
    cost: "$4,000 - $15,000"
  },
  benefits: {
    healthInsurance: "Common",
    retirement: "Provident Fund/Pension",
    vacation: "Standard policies",
    flexibility: "Medium",
    perks: ["Healthcare Sector Stability", "High Demand", "Social Impact"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Personalized Medicine", "Biopharmaceuticals", "Telepharmacy"],
    sustainability: "Strong",
    globalDemand: "High"
  }
},

"Animation, Graphics and Multimedia": {
  description: "A creative and technical course covering digital animation, visual effects, graphic design, and multimedia production for entertainment, advertising, and gaming.",
  skills: ["3D Modeling", "Animation", "Graphic Design", "Video Editing", "Storyboarding", "Creativity"],
  path: "Animation, Graphics & Multimedia → Animator / VFX Artist / Game Designer / Graphic Designer",
  salary: {
    entry: "$5,000 - $12,000",
    mid: "$15,000 - $30,000",
    senior: "$50,000+",
    currency: "USD"
  },
  market: {
    growthRate: "10% (2023–2030)",
    demand: "High",
    jobOpenings: "Strong in entertainment and media sectors",
    remoteWork: "Possible",
    flexibility: "High"
  },
  workStyle: {
    environment: "Studios, Offices, Remote",
    travel: "Occasional",
    hours: "40-50/week",
    stress: "Medium",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "High School Completion (12th Grade)",
    preferred: "Specialization in Animation or Design",
    certifications: ["Adobe Suite", "Autodesk Maya", "Blender"],
    duration: "1-4 years",
    cost: "$2,000 - $12,000"
  },
  benefits: {
    healthInsurance: "Varies",
    retirement: "Varies",
    vacation: "Flexible",
    flexibility: "High",
    perks: ["Creative Expression", "Freelance Opportunities", "High Demand in Media"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["VR/AR Content", "Real-Time Animation", "AI-Assisted Design"],
    sustainability: "Growing",
    globalDemand: "Strong"
  }
},

"B.Sc- Applied Geology": {
  description: "A science degree focusing on the study of Earth’s materials, structures, processes, and history, with applications in mining, oil exploration, and environmental science.",
  skills: ["Geological Mapping", "Mineral Analysis", "GIS", "Research", "Field Work", "Analytical Thinking"],
  path: "B.Sc. Applied Geology → Geologist / Mining Engineer / Environmental Consultant / Hydrogeologist",
  salary: {
    entry: "$7,000 - $15,000",
    mid: "$20,000 - $35,000",
    senior: "$55,000+",
    currency: "USD"
  },
  market: {
    growthRate: "5% (2023–2030)",
    demand: "Moderate",
    jobOpenings: "Linked to energy, mining, and environmental sectors",
    remoteWork: "Limited",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Field Sites, Laboratories, Offices",
    travel: "Frequent (field studies)",
    hours: "40-50/week",
    stress: "Medium",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "High School Completion (12th Grade) with Science",
    preferred: "Master’s in Geology or Geoscience",
    certifications: ["GIS Certification", "Field Training"],
    duration: "3 years",
    cost: "$3,000 - $10,000"
  },
  benefits: {
    healthInsurance: "Common",
    retirement: "Varies",
    vacation: "Standard",
    flexibility: "Medium",
    perks: ["Field Research Opportunities", "Global Job Market", "Outdoor Work"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Remote Sensing", "Sustainable Mining", "Climate Change Research"],
    sustainability: "Growing",
    globalDemand: "Steady"
  }
},

"B.Sc.-Physics": {
  description: "A science degree focused on the study of matter, energy, and the fundamental laws of nature, offering a foundation for careers in research, technology, and education.",
  skills: ["Mathematical Modeling", "Research", "Data Analysis", "Problem Solving", "Programming", "Critical Thinking"],
  path: "B.Sc. Physics → Research Scientist / Data Analyst / Engineer / Educator",
  salary: {
    entry: "$6,000 - $12,000",
    mid: "$15,000 - $30,000",
    senior: "$50,000+",
    currency: "USD"
  },
  market: {
    growthRate: "4% (2023–2030)",
    demand: "Moderate",
    jobOpenings: "Research, education, and applied technology sectors",
    remoteWork: "Possible",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Laboratories, Research Institutes, Classrooms",
    travel: "Occasional",
    hours: "35-45/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School Completion (12th Grade) with Science",
    preferred: "Master’s or PhD in Physics or Applied Physics",
    certifications: ["Programming Skills", "Data Science"],
    duration: "3 years",
    cost: "$2,000 - $8,000"
  },
  benefits: {
    healthInsurance: "Varies",
    retirement: "Varies",
    vacation: "Standard",
    flexibility: "Medium",
    perks: ["Research Opportunities", "Foundational Science Knowledge", "Diverse Career Paths"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Quantum Computing", "Nanotechnology", "Renewable Energy Physics"],
    sustainability: "Strong",
    globalDemand: "Moderate"
  }
},

"B.Sc. Chemistry": {
  description: "A degree focused on chemical principles, laboratory techniques, and their applications in industries like pharmaceuticals, materials science, and environmental science.",
  skills: ["Laboratory Skills", "Chemical Analysis", "Research", "Attention to Detail", "Safety Protocols", "Analytical Thinking"],
  path: "B.Sc. Chemistry → Chemist / Lab Technician / Quality Analyst / Research Scientist",
  salary: {
    entry: "$6,000 - $12,000",
    mid: "$15,000 - $28,000",
    senior: "$45,000+",
    currency: "USD"
  },
  market: {
    growthRate: "5% (2023–2030)",
    demand: "Moderate",
    jobOpenings: "Pharma, chemical, and research industries",
    remoteWork: "Limited",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Laboratories, Research Facilities, Industrial Plants",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School Completion (12th Grade) with Science",
    preferred: "Master’s in Chemistry or Applied Chemistry",
    certifications: ["Lab Safety", "Chemical Handling"],
    duration: "3 years",
    cost: "$2,000 - $8,000"
  },
  benefits: {
    healthInsurance: "Common",
    retirement: "Varies",
    vacation: "Standard",
    flexibility: "Medium",
    perks: ["Hands-on Laboratory Work", "Research Opportunities", "Industry Relevance"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Green Chemistry", "Biotechnology Applications", "Nanomaterials"],
    sustainability: "Strong",
    globalDemand: "Steady"
  }
},

"B.Sc. Mathematics": {
  description: "An academic degree focusing on mathematical theories, computational techniques, and their applications across science, engineering, finance, and research.",
  skills: ["Analytical Thinking", "Problem Solving", "Statistical Analysis", "Programming", "Data Modeling", "Logical Reasoning"],
  path: "B.Sc. Mathematics → Data Scientist / Actuary / Researcher / Teacher",
  salary: {
    entry: "$7,000 - $15,000",
    mid: "$20,000 - $35,000",
    senior: "$60,000+",
    currency: "USD"
  },
  market: {
    growthRate: "8% (2023–2030)",
    demand: "High",
    jobOpenings: "Strong across multiple industries",
    remoteWork: "Possible",
    flexibility: "High"
  },
  workStyle: {
    environment: "Offices, Research Centers, Academic Institutions",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Low to Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School Completion (12th Grade) with Mathematics",
    preferred: "Master’s in Mathematics, Statistics, or Data Science",
    certifications: ["Data Analysis", "Machine Learning"],
    duration: "3 years",
    cost: "$2,000 - $8,000"
  },
  benefits: {
    healthInsurance: "Varies",
    retirement: "Varies",
    vacation: "Standard",
    flexibility: "High",
    perks: ["Strong Career Versatility", "High Salary Potential", "Remote Work Options"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["AI & Machine Learning", "Financial Modeling", "Cryptography"],
    sustainability: "Strong",
    globalDemand: "High"
  }
},

"B.Tech.-Civil Engineering": {
  description: "An engineering degree focused on designing, constructing, and maintaining infrastructure like roads, bridges, buildings, and water systems.",
  skills: ["Structural Design", "Project Management", "AutoCAD", "Mathematics", "Construction Planning", "Problem Solving"],
  path: "B.Tech. Civil → Civil Engineer / Structural Engineer / Project Manager / Urban Planner",
  salary: {
    entry: "$8,000 - $18,000",
    mid: "$25,000 - $45,000",
    senior: "$70,000+",
    currency: "USD"
  },
  market: {
    growthRate: "7% (2023–2030)",
    demand: "High",
    jobOpenings: "Strong in infrastructure and construction sectors",
    remoteWork: "Limited",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Construction Sites, Offices, Field Locations",
    travel: "Frequent",
    hours: "40-50/week",
    stress: "High",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "High School Completion (12th Grade) with Science",
    preferred: "Master’s in Structural or Environmental Engineering",
    certifications: ["AutoCAD", "PMP Certification"],
    duration: "4 years",
    cost: "$4,000 - $15,000"
  },
  benefits: {
    healthInsurance: "Common",
    retirement: "Provident Fund/Pension",
    vacation: "Standard",
    flexibility: "Medium",
    perks: ["High Demand", "Infrastructure Development Role", "Global Opportunities"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Sustainable Construction", "Smart Cities", "Green Building Technologies"],
    sustainability: "Growing",
    globalDemand: "High"
  }
},
"B.Tech.-Electronics and Communication Engineering": {
  description: "An undergraduate program focusing on the design, development, and testing of electronic systems, communication networks, and signal processing technologies.",
  skills: ["Circuit Design", "Signal Processing", "Embedded Systems", "Problem-Solving", "Programming", "Communication Systems"],
  path: "B.Tech ECE → Electronics Engineer / Network Engineer / Research Scientist / Telecommunications Specialist",
  salary: {
    entry: "$8,000 - $15,000",
    mid: "$20,000 - $40,000",
    senior: "$50,000+",
    currency: "USD"
  },
  market: {
    growthRate: "7% (2023–2030)",
    demand: "High",
    jobOpenings: "Strong demand in telecommunications, IT, and electronics manufacturing",
    remoteWork: "Partial",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Labs, Offices, Manufacturing Units",
    travel: "Minimal",
    hours: "40-50/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School (12th Grade) in Science",
    preferred: "Master’s in Electronics/Telecommunication",
    certifications: ["Networking Certification", "Embedded Systems Certification"],
    duration: "4 years",
    cost: "$5,000 - $40,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Provident Fund/Pension",
    vacation: "15-25 days/year",
    flexibility: "Medium",
    perks: ["Innovation Opportunities", "Job Stability", "Technological Exposure"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["5G Technology", "IoT Devices", "Satellite Communication"],
    sustainability: "High",
    globalDemand: "Steady"
  }
},

"B.Tech.-Electrical and Electronics Engineering": {
  description: "A program covering both electrical engineering principles and electronics, focusing on power systems, control systems, and circuit design.",
  skills: ["Power Systems", "Circuit Analysis", "Automation", "Problem-Solving", "Control Systems", "Renewable Energy Technologies"],
  path: "B.Tech EEE → Electrical Engineer / Control Systems Engineer / Power Plant Engineer / Automation Specialist",
  salary: {
    entry: "$8,000 - $15,000",
    mid: "$20,000 - $40,000",
    senior: "$50,000+",
    currency: "USD"
  },
  market: {
    growthRate: "6% (2023–2030)",
    demand: "High",
    jobOpenings: "Consistent demand in energy, automation, and electronics sectors",
    remoteWork: "Partial",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Offices, Field Sites, Labs",
    travel: "Moderate",
    hours: "40-55/week",
    stress: "Medium to High",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "High School (12th Grade) in Science",
    preferred: "Master’s in Electrical Engineering",
    certifications: ["PLC Programming", "Energy Management Certification"],
    duration: "4 years",
    cost: "$5,000 - $40,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Pension/Provident Fund",
    vacation: "15-20 days/year",
    flexibility: "Medium",
    perks: ["Diverse Career Paths", "Technological Innovation", "High Employability"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Smart Grids", "Renewable Energy", "Electric Vehicles"],
    sustainability: "High",
    globalDemand: "Strong"
  }
},

"CA- Chartered Accountancy": {
  description: "A professional qualification in accounting, auditing, and taxation, enabling individuals to work as certified accountants and financial advisors.",
  skills: ["Accounting", "Auditing", "Taxation", "Analytical Thinking", "Attention to Detail", "Financial Reporting"],
  path: "CA → Auditor / Tax Consultant / Financial Analyst / CFO",
  salary: {
    entry: "$10,000 - $20,000",
    mid: "$30,000 - $60,000",
    senior: "$80,000+",
    currency: "USD"
  },
  market: {
    growthRate: "5% (2023–2030)",
    demand: "High",
    jobOpenings: "Steady demand across all industries",
    remoteWork: "Partial",
    flexibility: "High"
  },
  workStyle: {
    environment: "Offices, Client Meetings",
    travel: "Minimal",
    hours: "40-60/week (seasonal peaks)",
    stress: "High during deadlines",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "High School (12th Grade)",
    preferred: "Commerce Background",
    certifications: ["CA Qualification", "CPA (optional)"],
    duration: "4-5 years",
    cost: "$3,000 - $15,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Provident Fund/Pension",
    vacation: "15-20 days/year",
    flexibility: "High",
    perks: ["High Prestige", "Global Opportunities", "Financial Stability"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["AI in Accounting", "Forensic Accounting", "International Taxation"],
    sustainability: "High",
    globalDemand: "Steady"
  }
},

"CS- Company Secretary": {
  description: "A professional role specializing in corporate governance, legal compliance, and regulatory management within companies.",
  skills: ["Corporate Law", "Compliance", "Communication", "Organizational Skills", "Strategic Planning", "Legal Drafting"],
  path: "CS → Corporate Secretary / Compliance Officer / Governance Advisor",
  salary: {
    entry: "$8,000 - $15,000",
    mid: "$20,000 - $40,000",
    senior: "$50,000+",
    currency: "USD"
  },
  market: {
    growthRate: "6% (2023–2030)",
    demand: "Moderate to High",
    jobOpenings: "Strong demand in large corporations",
    remoteWork: "Partial",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Offices, Board Meetings",
    travel: "Minimal",
    hours: "40-50/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School (12th Grade)",
    preferred: "Commerce or Law Background",
    certifications: ["CS Qualification"],
    duration: "3-4 years",
    cost: "$2,000 - $10,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Provident Fund/Pension",
    vacation: "15-20 days/year",
    flexibility: "Medium",
    perks: ["High Prestige", "Corporate Influence", "Job Stability"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Digital Governance Tools", "ESG Compliance", "Corporate Transparency"],
    sustainability: "High",
    globalDemand: "Steady"
  }
},

"Diploma in Dramatic Arts": {
  description: "A specialized program focusing on acting, stagecraft, direction, and theater production techniques.",
  skills: ["Acting", "Improvisation", "Stage Management", "Voice Modulation", "Creativity", "Teamwork"],
  path: "Diploma in Dramatic Arts → Actor / Director / Playwright / Stage Manager",
  salary: {
    entry: "$5,000 - $10,000",
    mid: "$15,000 - $30,000",
    senior: "$40,000+",
    currency: "USD"
  },
  market: {
    growthRate: "4% (2023–2030)",
    demand: "Niche but steady",
    jobOpenings: "Competitive industry with limited positions",
    remoteWork: "No",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Theaters, Studios, Film Sets",
    travel: "Moderate",
    hours: "Variable (often evenings/weekends)",
    stress: "Medium",
    workLifeBalance: "Variable"
  },
  education: {
    minimum: "High School (12th Grade)",
    preferred: "Degree in Performing Arts",
    certifications: ["Acting Workshops", "Theater Training"],
    duration: "1-2 years",
    cost: "$1,000 - $10,000"
  },
  benefits: {
    healthInsurance: "Varies",
    retirement: "None (freelance common)",
    vacation: "Flexible",
    flexibility: "High",
    perks: ["Creative Expression", "Public Recognition", "Artistic Satisfaction"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Digital Theater", "Streaming Performances", "Immersive Stage Experiences"],
    sustainability: "Medium",
    globalDemand: "Steady"
  }
},

"Civil Services": {
  description: "A career in government administration involving policy-making, governance, and public service across various sectors.",
  skills: ["Leadership", "Policy Analysis", "Decision-Making", "Public Administration", "Communication", "Problem-Solving"],
  path: "Civil Services → IAS / IPS / IFS / IRS / Other Government Positions",
  salary: {
    entry: "$8,000 - $15,000",
    mid: "$20,000 - $40,000",
    senior: "$50,000+",
    currency: "USD"
  },
  market: {
    growthRate: "Stable",
    demand: "High",
    jobOpenings: "Highly competitive entry but secure employment",
    remoteWork: "No",
    flexibility: "Low"
  },
  workStyle: {
    environment: "Government Offices, Field Assignments",
    travel: "Frequent",
    hours: "40-60/week",
    stress: "High",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "Bachelor’s Degree",
    preferred: "Specialization in Public Administration, Law, or Economics",
    certifications: ["Civil Services Exam"],
    duration: "3+ years of preparation",
    cost: "$500 - $5,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Pension",
    vacation: "30+ days/year",
    flexibility: "Low",
    perks: ["High Prestige", "Job Security", "Public Influence"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["E-Governance", "Policy Digitization", "Sustainable Development Governance"],
    sustainability: "High",
    globalDemand: "Nationally Significant"
  }
},

"BA in Hindi": {
  description: "An undergraduate degree focusing on Hindi language, literature, and cultural studies, preparing students for careers in teaching, translation, and media.",
  skills: ["Language Proficiency", "Literary Analysis", "Communication", "Translation", "Research"],
  path: "BA in Hindi → Teacher / Translator / Journalist / Content Writer",
  salary: {
    entry: "$4,000 - $8,000",
    mid: "$10,000 - $20,000",
    senior: "$25,000+",
    currency: "USD"
  },
  market: {
    growthRate: "Stable",
    demand: "Moderate",
    jobOpenings: "Available in education, publishing, and media",
    remoteWork: "Possible",
    flexibility: "High"
  },
  workStyle: {
    environment: "Classrooms, Offices, Media Studios",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Low to Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "High School Completion",
    preferred: "Master’s in Hindi Literature or Linguistics",
    certifications: ["Translation Certification (optional)"],
    duration: "3 years",
    cost: "$500 - $5,000"
  },
  benefits: {
    healthInsurance: "Varies",
    retirement: "Pension/Provident Fund",
    vacation: "15-30 days/year",
    flexibility: "High",
    perks: ["Cultural Preservation", "Teaching Opportunities", "Creative Expression"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Digital Publishing", "Online Education", "AI Translation Tools"],
    sustainability: "Medium",
    globalDemand: "Moderate"
  }
},

"B.Ed.": {
  description: "A professional degree in education that trains individuals to become certified teachers in schools and educational institutions.",
  skills: ["Classroom Management", "Lesson Planning", "Child Psychology", "Communication", "Curriculum Development"],
  path: "B.Ed. → School Teacher / Education Administrator / Curriculum Developer",
  salary: {
    entry: "$5,000 - $10,000",
    mid: "$12,000 - $20,000",
    senior: "$25,000+",
    currency: "USD"
  },
  market: {
    growthRate: "Stable",
    demand: "High",
    jobOpenings: "Strong demand in schools and training institutes",
    remoteWork: "Possible",
    flexibility: "Medium"
  },
  workStyle: {
    environment: "Classrooms, Educational Offices",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "Bachelor’s Degree",
    preferred: "Master’s in Education",
    certifications: ["Teaching License/Certification"],
    duration: "2 years",
    cost: "$1,000 - $10,000"
  },
  benefits: {
    healthInsurance: "Varies",
    retirement: "Pension/Provident Fund",
    vacation: "School Holidays",
    flexibility: "Medium",
    perks: ["Stable Career", "Impact on Future Generations", "Community Respect"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["EdTech Integration", "Remote Teaching", "Inclusive Education"],
    sustainability: "High",
    globalDemand: "Steady"
  }
},

"BJMC- Bachelor of Journalism and Mass Communication": {
  description: "Focuses on media, public communication, journalism, and digital content creation.",
  skills: ["Writing", "Editing", "Public Speaking", "Media Ethics", "Social Media"],
  path: "BJMC → Reporter / Editor / PR Officer / Content Creator",
  salary: {
    entry: "$25,000 - $40,000",
    mid: "$50,000 - $70,000",
    senior: "$90,000+",
    currency: "USD"
  },
  market: {
    growthRate: "7% (2023–2030)",
    demand: "Moderate",
    jobOpenings: "Expanding in digital media",
    remoteWork: true,
    flexibility: "High"
  },
  workStyle: {
    environment: "Newsroom / Field / Remote",
    travel: "Frequent (field reporters)",
    hours: "Irregular",
    stress: "High (especially news roles)",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "Bachelor's in Journalism",
    preferred: "MA in Journalism / Mass Comm",
    certifications: ["Digital Marketing", "News Reporting", "Media Law"],
    duration: "3 years",
    cost: "$5,000 - $30,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Standard",
    vacation: "Varies",
    flexibility: "High",
    perks: ["Press Pass", "Travel Opportunities", "Creative Freedom"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["AI News Generation", "Podcasting", "Fact Checking Tools"],
    sustainability: "Medium",
    globalDemand: "Stable"
  }
},
"B.Sc- Nursing": {
  description: "Prepares students to work as registered nurses, with focus on healthcare, patient care, and medical ethics.",
  skills: ["Patient Care", "Medical Terminology", "Compassion", "Time Management"],
  path: "B.Sc Nursing → Registered Nurse / Advanced Practice Nurse / Hospital Admin",
  salary: {
    entry: "$45,000 - $65,000",
    mid: "$70,000 - $90,000",
    senior: "$100,000+",
    currency: "USD"
  },
  market: {
    growthRate: "12% (2023–2030)",
    demand: "Very High",
    jobOpenings: "Shortage globally",
    remoteWork: false,
    flexibility: "Moderate"
  },
  workStyle: {
    environment: "Hospitals/Clinics",
    travel: "Minimal",
    hours: "Varies (shifts)",
    stress: "High",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "Bachelor's in Nursing",
    preferred: "Postgraduate in Nursing / Specialization",
    certifications: ["NCLEX", "CPR", "BLS"],
    duration: "4 years",
    cost: "$8,000 - $50,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Pension/401k",
    vacation: "15+ days/year",
    flexibility: "Shift-based",
    perks: ["Job Security", "Global Opportunities", "Respect"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Nurse Practitioners", "Telehealth", "Geriatric Care"],
    sustainability: "High",
    globalDemand: "Critical"
  }
},
"B.Arch- Bachelor of Architecture": {
  description: "Focuses on designing buildings and urban spaces with a balance of functionality and aesthetics.",
  skills: ["Design Thinking", "3D Modeling", "AutoCAD", "Creativity", "Structural Knowledge"],
  path: "B.Arch → Licensed Architect / Urban Planner / Interior Designer",
  salary: {
    entry: "$40,000 - $60,000",
    mid: "$70,000 - $100,000",
    senior: "$120,000+",
    currency: "USD"
  },
  market: {
    growthRate: "3% (2023–2030)",
    demand: "Moderate",
    jobOpenings: "Urban demand rising",
    flexibility: "Moderate"
  },
  workStyle: {
    environment: "Office / Site Visits",
    travel: "Frequent (projects)",
    hours: "40-50/week",
    stress: "Moderate",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "Bachelor's in Architecture",
    preferred: "Master's in Urban Design / Landscape Architecture",
    certifications: ["NCARB", "AutoCAD", "Revit Certification"],
    duration: "5 years",
    cost: "$20,000 - $80,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Standard",
    vacation: "20 days/year",
    flexibility: "Moderate",
    perks: ["Creative Freedom", "Travel", "Diverse Projects"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Green Architecture", "Smart Cities", "3D Printed Structures"],
    sustainability: "High",
    globalDemand: "Growing in urban areas"
  }
},
"B.Com- Bachelor of Commerce": {
  description: "Covers fundamentals of finance, accounting, taxation, and business law, preparing students for corporate finance roles.",
  skills: ["Accounting", "Finance", "Taxation", "MS Excel", "Analytical Thinking"],
  path: "B.Com → CA / MBA / CFA / Accountant / Financial Analyst",
  salary: {
    entry: "$30,000 - $50,000",
    mid: "$60,000 - $90,000",
    senior: "$100,000+",
    currency: "USD"
  },
  market: {
    growthRate: "8% (2023–2030)",
    demand: "High",
    jobOpenings: "1.5M+ globally",
    remoteWork: true,
    flexibility: "High"
  },
  workStyle: {
    environment: "Office/Remote",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Low to Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "Bachelor's in Commerce",
    preferred: "CA / MBA / Certifications",
    certifications: ["Tally", "CPA", "Financial Modelling"],
    duration: "3 years",
    cost: "$5,000 - $25,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Standard",
    vacation: "15-20 days/year",
    flexibility: "High",
    perks: ["Bonuses", "Corporate Exposure", "Training"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Fintech", "Blockchain Accounting", "Digital Auditing"],
    sustainability: "High",
    globalDemand: "Strong and stable"
  }
},
"BA in Economics": {
  description: "Provides analytical and theoretical understanding of economic systems, policies, and data interpretation.",
  skills: ["Critical Thinking", "Data Analysis", "Economic Modelling", "Research"],
  path: "BA Economics → MA Economics / Civil Services / Economist / Analyst",
  salary: {
    entry: "$35,000 - $55,000",
    mid: "$70,000 - $100,000",
    senior: "$120,000+",
    currency: "USD"
  },
  market: {
    growthRate: "7% (2023–2030)",
    demand: "Moderate to High",
    jobOpenings: "Policy + Finance sectors",
    remoteWork: true,
    flexibility: "Moderate"
  },
  workStyle: {
    environment: "Think Tanks / Corporate / Government",
    travel: "Minimal",
    hours: "35-45/week",
    stress: "Medium",
    workLifeBalance: "Good"
  },
  education: {
    minimum: "Bachelor's Degree",
    preferred: "MA / PhD in Economics",
    certifications: ["Data Analysis", "Stata/R", "Public Policy"],
    duration: "3 years",
    cost: "$5,000 - $20,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Standard",
    vacation: "15+ days/year",
    flexibility: "Moderate",
    perks: ["Policy Impact", "Remote Research", "Academic Exposure"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Behavioral Economics", "Digital Currency", "Economic Forecasting"],
    sustainability: "High",
    globalDemand: "Growing in finance & public sector"
  }
},
"B.Tech-Mechanical Engineering": {
  description: "Focuses on the design, production, and maintenance of mechanical systems and machinery.",
  skills: ["Thermodynamics", "CAD", "Machine Design", "Analytical Thinking"],
  path: "B.Tech Mechanical → Design Engineer / R&D / Manufacturing",
  salary: {
    entry: "$40,000 - $60,000",
    mid: "$70,000 - $90,000",
    senior: "$100,000+",
    currency: "USD"
  },
  market: {
    growthRate: "4% (2023–2030)",
    demand: "Steady",
    jobOpenings: "1M+ in core and allied sectors",
    remoteWork: false,
    flexibility: "Low"
  },
  workStyle: {
    environment: "Plants / Offices / Labs",
    travel: "Frequent (on-site work)",
    hours: "40-50/week",
    stress: "Medium to High",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "Bachelor's in Mechanical Engineering",
    preferred: "M.Tech / Specialization in CAD or Robotics",
    certifications: ["SolidWorks", "AutoCAD", "Ansys"],
    duration: "4 years",
    cost: "$15,000 - $60,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Standard",
    vacation: "15 days/year",
    flexibility: "Limited",
    perks: ["Industrial Exposure", "R&D Opportunities", "Core Engineering Practice"]
  },
  future: {
    automationRisk: "Medium",
    emergingTrends: ["Robotics", "Automation", "Green Manufacturing"],
    sustainability: "Medium",
    globalDemand: "Stable with tech integration"
  }
},
"BDS- Bachelor of Dental Surgery": {
  description: "Enables students to practice as dentists focusing on oral healthcare, surgery, and diagnosis.",
  skills: ["Dexterity", "Attention to Detail", "Anatomy", "Patient Communication"],
  path: "BDS → MDS / Dental Practitioner / Orthodontist",
  salary: {
    entry: "$40,000 - $60,000",
    mid: "$80,000 - $120,000",
    senior: "$150,000+",
    currency: "USD"
  },
  market: {
    growthRate: "6% (2023–2030)",
    demand: "High",
    jobOpenings: "Clinics and hospitals worldwide",
    remoteWork: false,
    flexibility: "Low"
  },
  workStyle: {
    environment: "Clinics / Hospitals",
    travel: "Minimal",
    hours: "45-60/week",
    stress: "High",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "Bachelor's in Dental Surgery",
    preferred: "MDS / Specialization",
    certifications: ["Dental License", "CPR Certification"],
    duration: "5 years",
    cost: "$20,000 - $70,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Private Practice/Clinic Pension",
    vacation: "Self-managed (if private practice)",
    flexibility: "Low",
    perks: ["Prestige", "High Income Potential", "Autonomy"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Laser Dentistry", "Digital Scanners", "Teledentistry"],
    sustainability: "High",
    globalDemand: "Growing globally"
  }
},
"BEM- Bachelor of Event Management": {
  description: "Covers event planning, coordination, budgeting, and marketing, preparing graduates for careers in hospitality, corporate events, weddings, and entertainment industries.",
  skills: ["Event Planning", "Budgeting", "Marketing", "Negotiation", "Communication", "Team Management", "Problem-Solving"],
  path: "BEM → Event Manager / Wedding Planner / Corporate Event Coordinator / Exhibition Manager / Hospitality Manager",
  salary: {
    entry: "$30,000 - $45,000",
    mid: "$50,000 - $75,000",
    senior: "$90,000+",
    currency: "USD"
  },
  market: {
    growthRate: "8% (2023–2030)",
    demand: "High",
    jobOpenings: "Hospitality, Entertainment, Corporate, Tourism sectors",
    remoteWork: false,
    flexibility: "Medium"
  },
  workStyle: {
    environment: "On-site / Office / Outdoor",
    travel: "Frequent",
    hours: "40-50/week (including weekends and evenings)",
    stress: "Medium to High",
    workLifeBalance: "Moderate"
  },
  education: {
    minimum: "Bachelor's in Event Management or related field",
    preferred: "Master’s in Event Management / Hospitality",
    certifications: ["Event Planning Certification", "Hospitality Management", "Digital Marketing for Events"],
    duration: "3 years",
    cost: "$6,000 - $25,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Standard",
    vacation: "15 days/year",
    flexibility: "Medium",
    perks: ["Networking Opportunities", "Travel", "Creative Work"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["Virtual Events", "Hybrid Event Models", "Sustainable Event Practices"],
    sustainability: "High",
    globalDemand: "Growing"
  }
},

"BA in English": {
  description: "Focuses on literature, communication, critical analysis, and creative writing, opening doors to content, publishing, and teaching.",
  skills: ["Writing", "Critical Thinking", "Editing", "Communication", "Research"],
  path: "BA English → Content Writer / Editor / Teacher / UPSC / MA English",
  salary: {
    entry: "$25,000 - $40,000",
    mid: "$50,000 - $70,000",
    senior: "$90,000+",
    currency: "USD"
  },
  market: {
    growthRate: "5% (2023–2030)",
    demand: "Moderate",
    jobOpenings: "Media, Education, Content sectors",
    remoteWork: true,
    flexibility: "High"
  },
  workStyle: {
    environment: "Office / Academic / Remote",
    travel: "Minimal",
    hours: "30-40/week",
    stress: "Low",
    workLifeBalance: "Excellent"
  },
  education: {
    minimum: "Bachelor's in English",
    preferred: "MA in English / Journalism / Education",
    certifications: ["Content Writing", "Digital Marketing", "TESOL"],
    duration: "3 years",
    cost: "$5,000 - $20,000"
  },
  benefits: {
    healthInsurance: true,
    retirement: "Standard",
    vacation: "20 days/year",
    flexibility: "High",
    perks: ["Creative Jobs", "Remote Work", "Freelancing"]
  },
  future: {
    automationRisk: "Low",
    emergingTrends: ["AI Writing Tools", "E-Learning", "Podcasting"],
    sustainability: "Medium",
    globalDemand: "Steady"
  }
}
}

export default careerData;
