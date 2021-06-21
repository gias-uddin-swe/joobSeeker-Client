import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./EmployLogin.css";
import EmployLogin from "./EmployLogin";
import ProcessPayment from "./../ProcessPayment/ProcessPayment";
import { useContext } from "react";
import { UserContext } from "./../../../App";
import { useHistory, location } from "react-router-dom";

const EmployCreateAC = () => {
  const [user, setUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://peaceful-hamlet-87315.herokuapp.com/createAccount", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const userInfo = { ...user };
          userInfo.email = data.email;
          userInfo.name = data.name;
          setUser(userInfo);
          alert("account created Successfully");
          handleOnClick();
        } else {
        }
      });
    console.log(data);
  };

  const [control, setControl] = useState(false);
  let history = useHistory();
  const handleOnClick = () => history.push("/home");
  return (
    <div>
      <div className="login-main ">
        <div className="login-box">
          {control ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input-field"
                {...register("name")}
                placeholder="name"
                name="name"
                required
              />
              <br />
              <input
                className="input-field"
                {...register("email", { required: true })}
                placeholder="email"
                type="email"
                name="email"
                required
              />
              <br />

              <select
                className="input-field"
                {...register("packageType", { required: true })}
                name="packageType"
              >
                <option defaultValue={user.plan}>{user.plan}</option>
                <option>premium</option>
                <option>standard</option>
                <option>basic</option>
              </select>
              <br />
              <input
                className="input-field"
                {...register("jobKeywords", { required: true })}
                placeholder="job Keywords"
                name="jobKeywords"
                required
              />
              <br />
              <input
                className="input-field"
                {...register("password", { required: true })}
                placeholder="Password"
                name="password"
                type="password"
                required
              />
              <br />
              <ProcessPayment></ProcessPayment>
              <br />

              {user.payment ? (
                <input className="mt-2 w-25" type="submit" />
              ) : (
                <p style={{ color: "red", fontSize: "18px" }}>
                  After Payment successfully Submit Button will Appear
                </p>
              )}
            </form>
          ) : (
            <div>
              <EmployLogin></EmployLogin>
            </div>
          )}
          {control ? (
            <button className="mt-3 mb-5" onClick={() => setControl(false)}>
              already have an account?{" "}
              <span style={{ color: "red" }}>Login</span>
            </button>
          ) : (
            <button className="mt-3 mb-5" onClick={() => setControl(true)}>
              New employee? Create an new account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployCreateAC;
