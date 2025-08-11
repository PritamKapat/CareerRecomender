import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 401) {
        localStorage.removeItem('token');
        setUser(null);
        return;
      }

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Auth check failed');
      }

      const data = await res.json();
      setUser(data.user);
    } catch (err) {
      console.error('Auth check error:', err);
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.access_token);
        setUser(data.user);
        return { success: true, token: data.access_token, user: data.user };
      }
      return { success: false, error: data.error || 'Login failed' };
    } catch (err) {
      return { success: false, error: 'Network error' };
    }
  };

  const signup = async (name, email, password, age) => {
    try {
      const res = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, age }),
      });
      const data = await res.json();

      if (res.ok) {
        // No token stored here because user must verify OTP first
        // Return a special message so frontend can show OTP input
        return { success: true, message: data.message || 'Please verify your email via OTP' };
      }
      return { success: false, error: data.error || 'Signup failed' };
    } catch (err) {
      return { success: false, error: 'Network error' };
    }
  };

  const verifyOtp = async (email, otp) => {
    try {
      const res = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (res.ok) {
        // After successful OTP verify, you may want to auto-login or just notify success
        // If backend returns token, save it here:
        if (data.access_token && data.user) {
          localStorage.setItem('token', data.access_token);
          setUser(data.user);
        }
        return { success: true };
      }
      return { success: false, error: data.error || 'OTP verification failed' };
    } catch (err) {
      return { success: false, error: 'Network error' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, verifyOtp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
