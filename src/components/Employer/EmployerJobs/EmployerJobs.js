import React, { useState } from "react";
import "./EmployerJobs.css";
import { useContext } from "react";
import { UserContext } from "./../../../App";
import { useEffect } from "react";

const EmployerJobs = () => {
  const [user, setUser] = useContext(UserContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://peaceful-hamlet-87315.herokuapp.com/employerJobs?email=" +
        user.email
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, []);
  return (
    <div>
      <div className="row mt-5">
        {jobs.map((pd) => (
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="text-center">
              <div className="carts">
                <h2>{pd.companyName}</h2>
                <h5 style={{ color: "red" }}>{pd.positionName}</h5>
                <p>
                  <small>@ {pd.recruiterName}</small>
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <h6>Description</h6>
                    <p>{pd.description}</p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <h6>Requirements</h6>
                    <p>{pd.requirements}</p>
                  </div>
                </div>
                <button className="btn btn-info w-50 mt-3">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerJobs;
