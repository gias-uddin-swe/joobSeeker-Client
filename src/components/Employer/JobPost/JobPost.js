import React, { useContext } from "react";
import "./JobPost.css";
import { useForm } from "react-hook-form";
import { UserContext } from "./../../../App";

const JobPost = () => {
  const [user, setUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const jobInfo = { ...data };
    jobInfo.status = "pending";
    jobInfo.userEmail = user.email;

    fetch("https://peaceful-hamlet-87315.herokuapp.com/postJob", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Job post successfully");
          // window.location.reload();
        } else {
          console.log("hoi nai boss");
        }
      });

    console.log(jobInfo);
  };
  return (
    <div>
      <div className="login-main">
        <div className="login-box">
          <h3 className="text-info p-3 jobPost-title">Post your job here</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-field"
              {...register("recruiterName")}
              placeholder="Recruiter name"
              name="recruiterName"
              required
            />
            <br />
            <input
              className="input-field"
              {...register("companyName")}
              placeholder="Company Name"
              type="text"
              name="companyName"
              required
            />
            <br />
            <input
              className="input-field"
              {...register("positionName", { required: true })}
              placeholder="job Position"
              name="positionName"
              required
            />
            <br />
            <input
              className="input-field"
              {...register("requirements", { required: true })}
              placeholder="Requirements"
              name="requirements"
              required
            />
            <br />
            <input
              className="input-field"
              {...register("description", { required: true })}
              placeholder="Job Description"
              name="description"
              required
            />
            <br />
            <input
              className="input-field"
              {...register("vacancy", { required: true })}
              placeholder="vacancy"
              name="vacancy"
              required
            />
            <br />
            <input
              className="input-field"
              {...register("companyEmail", { required: true })}
              placeholder="companyEmail"
              name="companyEmail"
              type="email"
              required
            />
            <br />
            <select
              className="input-field"
              {...register("jobType", { required: true })}
              name="jobType"
            >
              <option>full-time</option>
              <option>intern</option>
              <option>contract</option>
            </select>
            <br />
            <input
              className="mt-4 mb-5 w-50 post-submit-btn"
              type="submit"
              value="POST"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
