import React from 'react';
import "./index.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.user_firstname} {user.user_lastname}</p>
          <p>Email: {user.user_email}</p>
          <p>Phone: {user.user_phone}</p>
          <p>City: {user.user_city}</p>
          <p>Zipcode: {user.user_zipcode}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Dashboard;
