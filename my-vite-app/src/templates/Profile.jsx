import React, { useEffect, useState } from 'react';
import '../styles/profilenew.css';
import {useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
    const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:4000/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch user details: ${response.statusText}`);
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        setError(err.message || 'Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading profile...</p>
    </div>
  );
  
  if (error) return (
    <div className="error-container">
      <p className="error-message">{error}</p>
    </div>
  );

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <h2>User Profile</h2>
          <div className="avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>
        
        <div className="profile-details">
          <div className="detail-row">
            <span className="detail-label">Name:</span>
            <span className="detail-value">{user.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Age:</span>
            <span className="detail-value">{user.age}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{user.email}</span>
          </div>
        </div>
        
        <div className="profile-actions">
<button 
  className="edit-btn" 
  onClick={() => {
    localStorage.removeItem("token");
    navigate('/login');
  }}
>
  Logout
</button>
          <button className="edit-btn" onClick={() => navigate('/saved')}>Savelist</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;