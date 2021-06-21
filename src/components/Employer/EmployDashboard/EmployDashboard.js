import React, { useState } from "react";
import JobPost from "./../JobPost/JobPost";
import "./EmployDashboard.css";
import MenuBar from "./../../Sheared/MenuBar/MenuBar";
import EmployerJobs from "./../EmployerJobs/EmployerJobs";

const EmployDashboard = () => {
  const [control, setControl] = useState(true);
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="text-center">
        <button
          onClick={() => setControl(true)}
          className="mr-5 p-2 post-button"
        >
          Post Job
        </button>
        <button
          onClick={() => setControl(false)}
          className="ml-5 p-2 myJobs-btn"
        >
          My Jobs
        </button>
      </div>
      {control ? <JobPost></JobPost> : <EmployerJobs></EmployerJobs>}
    </div>
  );
};

export default EmployDashboard;
