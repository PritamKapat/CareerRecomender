import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    age: '',
    otp: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();
  const { login, signup, verifyOtp } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && !showOtpForm) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (!formData.age) {
        newErrors.age = 'Age is required';
      } else if (isNaN(formData.age) || formData.age <= 0) {
        newErrors.age = 'Enter a valid age';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    if (showOtpForm && !formData.otp) {
      newErrors.otp = 'OTP is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitError('');

    try {
      if (showOtpForm) {
        // Verify OTP API call
        const result = await verifyOtp(formData.email, formData.otp);
        if (result.success) {
          navigate('/', { replace: true });
        } else {
          setSubmitError(result.error || 'OTP verification failed');
        }
      } else if (isLogin) {
        // Normal login
        const result = await login(formData.email, formData.password);
        if (result.success) {
          navigate('/', { replace: true });
        } else {
          setSubmitError(result.error || 'Login failed');
        }
      } else {
        // Signup flow
        const result = await signup(formData.name, formData.email, formData.password, parseInt(formData.age, 10));
        if (result.message && result.message.toLowerCase().includes('verify')) {
          // Signup success & OTP sent: show OTP input
          setShowOtpForm(true);
        } else {
          setSubmitError(result.error || 'Signup failed');
        }
      }
    } catch (error) {
      setSubmitError(error.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setShowOtpForm(false);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      age: '',
      otp: '',
    });
    setErrors({});
    setSubmitError('');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>{isLogin ? 'Welcome Back' : (showOtpForm ? 'Verify Your Email' : 'Create Account')}</h1>
          <p>
            {isLogin
              ? 'Sign in to continue your career journey'
              : showOtpForm
              ? 'Enter the OTP sent to your email'
              : 'Join us to discover your perfect career path'}
          </p>
        </div>

        {submitError && <div className="submit-error">{submitError}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && !showOtpForm && (
            <>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={errors.name ? 'error' : ''}
                  disabled={isLoading}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                  className={errors.age ? 'error' : ''}
                  disabled={isLoading}
                />
                {errors.age && <span className="error-message">{errors.age}</span>}
              </div>
            </>
          )}

          {!showOtpForm && (
            <>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={errors.email ? 'error' : ''}
                  disabled={isLoading || showOtpForm}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={errors.password ? 'error' : ''}
                  disabled={isLoading || showOtpForm}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
            </>
          )}

          {!isLogin && !showOtpForm && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className={errors.confirmPassword ? 'error' : ''}
                disabled={isLoading}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          )}

          {showOtpForm && (
            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
                placeholder="Enter OTP"
                className={errors.otp ? 'error' : ''}
                disabled={isLoading}
              />
              {errors.otp && <span className="error-message">{errors.otp}</span>}
            </div>
          )}

          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading
              ? 'Processing...'
              : showOtpForm
              ? 'Verify OTP'
              : isLogin
              ? 'Sign In'
              : 'Sign Up'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={toggleMode}
              className="toggle-button"
              disabled={isLoading}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        {!showOtpForm && (
          <>
            <div className="auth-divider">
              <span>or</span>
            </div>

            <div className="social-auth">
              <button className="social-button google" disabled={isLoading}>
                <span>Continue with Google</span>
              </button>
              <button className="social-button facebook" disabled={isLoading}>
                <span>Continue with Facebook</span>
              </button>
            </div>
          </>
        )}

        <div className="back-home">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
