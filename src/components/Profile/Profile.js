import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./../../App";
import MenuBar from "./../Sheared/MenuBar/MenuBar";
import profilePic from "../../images/logo/profile.png";
import "./Profile.css";
const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(
      "https://peaceful-hamlet-87315.herokuapp.com/profileInfo?email=" +
        user.email
    )
      .then((res) => res.json())
      .then((result) => {
        setInfo(result);
      });
  }, []);

  return (
    <div>
      <MenuBar></MenuBar>
      <div>
        <img className="profile-image" src={profilePic} alt="" />
      </div>
      <div className="text-center">
        <h2>Name:{info.name}</h2>
        <h4>Email:{info.email}</h4>
        <h4>packageType:{info.packageType}</h4>
        <h3>Your Skills: {info.jobKeywords}</h3>
      </div>
    </div>
  );
};

export default Profile;
