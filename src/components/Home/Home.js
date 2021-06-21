import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import JobCarts from "./JobCarts/JobCarts";
import MenuBar from "./../Sheared/MenuBar/MenuBar";
import { UserContext } from "./../../App";

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="home-parent">
      <MenuBar></MenuBar>
      {user.email ? (
        <div className="job-cart">
          <JobCarts></JobCarts>
        </div>
      ) : (
        <div className="home-div">
          <div className="login-button">
            <div>
              <h1 className="mb-5 login-title">Choose your profile</h1>
            </div>
            <Link to="/membership">
              <button className="employee-btn home-btn mr-5">
                Became a Employee
              </button>
            </Link>
            <Link to="seekerLogin">
              <button className="seeker-btn home-btn ml-5">
                Became a Job Seeker
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
