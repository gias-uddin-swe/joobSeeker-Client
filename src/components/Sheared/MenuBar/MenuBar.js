import React, { useContext, useEffect } from "react";
import "./MenuBar.css";
import profile from "../../../images/logo/profile.png";
import { Link } from "react-router-dom";
import { UserContext } from "./../../../App";
import { useState } from "react";
const MenuBar = () => {
  const [user, setUser] = useContext(UserContext);

  const [isEmployee, setIsEmployee] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(
      "https://peaceful-hamlet-87315.herokuapp.com/checkAdmin?email=" +
        user.email
    )
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setIsAdmin(true);
        }
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://peaceful-hamlet-87315.herokuapp.com/checkEmployee?email=" +
        user.email
    )
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setIsEmployee(true);
        }
      });
  }, []);

  const handleSignOut = () => {
    window.location.reload();
  };
  return (
    <div>
      <nav>
        <div className=" text-right ml-auto menu-div">
          <Link to="/home">
            <li className="items">Home</li>
          </Link>
          {isEmployee && (
            <Link to="/EmployDashboard">
              <li className="items">Employer</li>
            </Link>
          )}

          {isAdmin ? (
            <Link to="/adminDashboard">
              <li className="items">Admin</li>
            </Link>
          ) : (
            <Link to="/adminLogin">
              <li className="items">Admin-Login</li>
            </Link>
          )}

          {user.email && (
            <li onClick={handleSignOut} className="items">
              logOut
            </li>
          )}
          <Link to="/profile">
            <li id="last-child" className="items  mr-5">
              <img src={profile} alt="" />
            </li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
