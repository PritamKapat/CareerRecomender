import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from "./templates/Navbar";
import Home from './templates/Home'
import MCQAssessment from './templates/MCQAssessment'
import CareerDetail from './templates/CareerDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<MCQAssessment/>} />
        <Route path="/career/:name" element={<CareerDetail />} />  
      </Routes>
    </Router>
  )
}

export default App
