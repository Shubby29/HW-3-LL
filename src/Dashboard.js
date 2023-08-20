import React from "react";
import "./Dashboard.css";


function Dashboard({ onLogout }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
