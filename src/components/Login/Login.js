import React, { useContext } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import SeekerLogin from "./SeekerLogin";
import { useState } from "react";
import { UserContext } from "./../../App";
import { useHistory, location } from "react-router-dom";

const Login = () => {
  const [account, setAccount] = useState();
  const [user, setUser] = useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://peaceful-hamlet-87315.herokuapp.com/userCreateAccount", {
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
          alert("Account created successfully");
          handleOnClick();
        }
      });

    console.log(data);
  };

  const [control, setControl] = useState(false);
  let history = useHistory();
  const handleOnClick = () => history.push("/home");
  return (
    <div>
      <h1>This is Login Page</h1>
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
              <input className="mt-2 w-25" type="submit" />
            </form>
          ) : (
            <div>
              <SeekerLogin></SeekerLogin>
            </div>
          )}
          {control ? (
            <button className="mt-3 mb-5" onClick={() => setControl(false)}>
              already have an account?{" "}
              <span style={{ color: "red" }}>Login</span>
            </button>
          ) : (
            <button className="mt-3 mb-5" onClick={() => setControl(true)}>
              are you new? Create an new account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
