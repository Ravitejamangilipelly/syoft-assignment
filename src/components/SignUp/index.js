import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import "./index.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_password: '',
    user_phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      user_lastname: 'ni',
      user_city: 'Hyderabad',
      user_zipcode: '500072'
    };

    try {
      const response = await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <h1>Sign Up</h1>
      <p>Already have an account</p> <Link to="/login">Sign In</Link>
      <label htmlFor="signfirstname">First Name *</label>
      <input
        id="signfirstname"
        type="text"
        name="user_firstname"
        value={formData.user_firstname}
        onChange={handleChange}
        required
      />
      <label htmlFor="signemail">Email * </label>
      <input
        id="signemail"
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        required
      />
      <label htmlFor="signpassword">Password *</label>
      <input
        id="signpassword"
        type="password"
        name="user_password"
        value={formData.user_password}
        onChange={handleChange}
        required
      />
      <label htmlFor="signphone">Phone *</label>
      <input
        id="signphone"
        type="tel"
        name="user_phone"
        value={formData.user_phone}
        onChange={handleChange}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
