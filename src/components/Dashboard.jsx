import React from 'react';

const Dashboard = ({ revenue }) => {
  return (
    <div className="dashboard">
      <h2>Revenue Dashboard</h2>
      <p>Basic Membership: ${revenue.basic.toFixed(2)}</p>
      <p>Premium Membership: ${revenue.premium.toFixed(2)}</p>
      <p>Executive Membership: ${revenue.executive.toFixed(2)}</p>
      <p>Team Desks: ${revenue.team.toFixed(2)}</p>
    </div>
  );
};

export default Dashboard;
