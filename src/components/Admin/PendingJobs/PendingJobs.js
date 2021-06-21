import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "./PendingJobs.css";
import { useForm } from "react-hook-form";

const PendingJobs = () => {
  const { register, handleSubmit } = useForm();

  const [jobs, setJobs] = useState([]);

  const [dependencies, setDependencies] = useState(false);

  useEffect(() => {
    fetch("https://peaceful-hamlet-87315.herokuapp.com/pendingJobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      });
  }, [dependencies]);
  const [optionValue, SetOptionValue] = useState(null);
  const handleSelectValue = (e) => {
    SetOptionValue(e.target.value);
  };

  const handleEditSubmit = (id) => {
    fetch(`https://peaceful-hamlet-87315.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ optionValue }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setDependencies(true);
        }
      });
  };

  return (
    <div>
      <Table striped bordered hover className="  table">
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>JobType</th>
            <th>Position Name</th>
            <th>Status & Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((pd) => (
            <tr>
              <td>1</td>
              <td>{pd.companyName}</td>
              <td>{pd.jobType}</td>
              <td>{pd.positionName}</td>
              <td>
                <form>
                  <select onClick={handleSelectValue} className="pending">
                    <option defaultValue={pd.status}>{pd.status}</option>
                    <option defaultValue="approved">approved</option>
                    <option defaultValue="pending">pending</option>
                  </select>
                  <input
                    className="hideInput"
                    type="text"
                    name="id"
                    value={pd._id}
                  />
                  <button
                    onClick={() => handleEditSubmit(pd._id)}
                    className="btn btn-danger ml-2"
                  >
                    Update
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PendingJobs;
