import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./EmployLogin.css";
import { useHistory, location } from "react-router-dom";
import { UserContext } from "./../../../App";

const EmployLogin = () => {
  const [error, setError] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://peaceful-hamlet-87315.herokuapp.com/employerLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setError(false);
          const userInfo = { ...user };
          userInfo.email = data.email;
          setUser(userInfo);
          handleOnClick();
          console.log("login hoise bro");
        } else {
          setError(true);
          console.log("login hoi naiiii bro");
        }
      });
    console.log(data);
  };

  let history = useHistory();
  const handleOnClick = () => history.push("/home");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <p style={{ color: "red" }}>Invalid Email or Password !</p>}
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
          {...register("password", { required: true })}
          placeholder="Password"
          name="password"
          type="password"
          required
        />
        <br />
        <input className="mt-2 w-25" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default EmployLogin;
