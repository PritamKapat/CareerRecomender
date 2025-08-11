import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./templates/Navbar";
import Home from './templates/Home';
import CareerDetail from './templates/CareerDetail';
import PredictionPage from './templates/PredictionPage';
import Intro2 from './templates/Intro2';
import Login from './templates/Login';
import Profile from './templates/Profile';
import { AuthProvider } from './context/AuthContext';
import SavedList from './templates/SavedList';
import PageLoader from './templates/LetterLoader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load (can replace with actual API/image load check)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/predict" element={<Intro2 />} />
          <Route path="/saved" element={<SavedList />} />
          <Route path="/prediction" element={<PredictionPage />} />
          <Route path="/career/:name" element={<CareerDetail />} />  
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
