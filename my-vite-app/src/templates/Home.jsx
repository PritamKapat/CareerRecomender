import { useEffect, useRef } from 'react';
import { useState } from 'react';
import profileImg from '../assets/24.png';
import ass from '../assets/assessment-2.png';
import skill from '../assets/sk.png';
import car from '../assets/career-goals.png';
import int from '../assets/int.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const rowRef = useRef(null);
  const speed = 3;
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
  const handlePredictClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/predict");
    } else {
      navigate("/login");
    }
  };
  
  useEffect(() => {
    const row = rowRef.current;
    let animationFrame;

    const slide = () => {
      if (!paused) {
        const currentTransform = new WebKitCSSMatrix(getComputedStyle(row).transform);
        let translateX = currentTransform.m41;

        translateX -= speed;
        row.style.transform = `translateX(${translateX}px)`;

        const firstBox = row.children[0];
        if (firstBox) {
          const firstBoxRight = firstBox.getBoundingClientRect().right;
          const sliderLeft = row.parentElement.getBoundingClientRect().left;

          if (firstBoxRight < sliderLeft) {
            const boxWidth = firstBox.offsetWidth +
              parseFloat(getComputedStyle(firstBox).marginRight) +
              parseFloat(getComputedStyle(firstBox).marginLeft);
            row.appendChild(firstBox);
            translateX += boxWidth;
            row.style.transform = `translateX(${translateX}px)`;
          }
        }
      }

      animationFrame = requestAnimationFrame(slide);
    };

    slide();

    return () => cancelAnimationFrame(animationFrame);
  }, [paused, speed]);
  

  return (
    <div>
      <nav></nav>

      <div className="hero">
        <div className="heading">
          <p>Discover the Right Career for You</p>
          <button onClick={handlePredictClick} className="button5 get-started-btn">
            <svg
              stroke="#ffffff"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              version="1.1"
              fill="#ffffff"
              xmlSpace="preserve"
            >
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16 
                  S0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98 
                  c0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z 
                  M64,8c4.418,0,8,3.582,8,8s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z 
                  M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z 
                  M16,72c-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z 
                  M32,48V32h16v16H32z 
                  M64,72c-4.418,0-8-3.582-8-8l0,0v-8h7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z"
                  ></path>
                </g>
              </g>
            </svg>
            Get Started
          </button>
        </div>
        <div className="profile" style={{ backgroundImage: `url(${profileImg})` }}></div>
      </div>

      <div className="process-header">
        <h2>How it works</h2>
        <hr className="custom-hr" />
      </div>
      
      <div className="process">
        <div className="processbox">
          <img src={ass} alt="Assessment" />
          <span>Give a test</span>
        </div>
        <div className="processbox">
          <img src={skill} alt="Skill" />
          <span>Select skills</span>
        </div>
        <div className="processbox">
          <img src={int} alt="Interest" />
          <span>Evaluates interests</span>
        </div>
        <div className="processbox">
          <img src={car} alt="Career" />
          <span>Get your Career</span>
        </div>
      </div>

      
      <div
        className="slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="trending-careers-title">Trending Careers in 2025</p>
        <div className="row" ref={rowRef}>
          <Link to="/career/AI%20Engineer" className="box">AI Engineer</Link>
          <Link to="/career/Data%20Scientist" className="box">Data Scientist</Link>
          <Link to="/career/Doctor" className="box">Doctor</Link>
          <Link to="/career/Digital%20Marketing" className="box">Digital Marketing</Link>
          <Link to="/career/FinTech%20Professional" className="box">FinTech Professional</Link>
          <Link to="/career/EdTech%20Experts" className="box">EdTech Experts</Link>
          <Link to="/career/Logistics" className="box">Logistics</Link>
          <Link to="/career/Data%20Analysts" className="box">Data Analysts</Link>
        </div>
      </div>

      <div className="about">
        <h1>About Us</h1>
        <ul>
          <li>
            This Career Recommender System is a college-level project developed by Pritam Kapat student of the Information Technology at Narula Institute of Technology. The aim is to help students identify the most suitable career options based on their interests, skills, and subject strengths.
          </li>
          <li>
            By answering simple questions and selecting your hobbies or strengths, the system predicts the top 3 career paths that match your profile using machine learning techniques.
          </li>
          <li>
            The project leverages technologies like Python, Flask, React, and scikit-learn to offer real-time recommendations. It's designed to be simple, interactive, and informative.
          </li>
          <li>
            This tool is part of our academic curriculum and is intended to assist peers and career counselors in guiding students more effectively.
          </li>
          <li>
            Developed by: Pritam Kapat<br />
          </li>
        </ul>
      </div>
      
      <div className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Ph No: 890XXXXX470  email: pritamkapat3@gmail.com</p>
        <p>Copyright © 2025 CareerWiz Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Home;