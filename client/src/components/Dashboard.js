import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="fixed-action-btn">
        <a href="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons ">add</i>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
