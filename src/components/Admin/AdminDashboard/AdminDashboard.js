import React from "react";
import "./AdminDashboard.css";
import PendingJobs from "./../PendingJobs/PendingJobs";
import MenuBar from "./../../Sheared/MenuBar/MenuBar";

const AdminDashboard = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="text-center">
        <button className="admin-btn pendingJobs-btn mr-5">Pending Jobs</button>
        <button className="admin-btn approvedJobs-btn ml-5">
          Approved Jobs
        </button>
      </div>
      <div>
        <PendingJobs></PendingJobs>
      </div>
    </div>
  );
};

export default AdminDashboard;
