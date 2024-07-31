import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

import "./index.css";

const Login = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    user_password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <h1>Log In</h1>
      <p>Create a account</p>
      <Link to="/signup">Sign Up</Link>
      <label htmlFor="loginemail">Email * </label>
      <input
        id="loginemail"
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        required
      />

      <label htmlFor="loginpassword">Password *</label>
      <input
        id="loginpassword"
        type="password"
        name="user_password"
        value={formData.user_password}
        onChange={handleChange}
        required
      />

      <button type="submit" className="login-button">
        Sign In
      </button>
    </form>
  );
};

export default Login;
