import React from "react";
import "./MemberShip.css";
import premium from "../../../images/logo/premium.png";
import standard from "../../../images/logo/standerd.png";
import basic from "../../../images/logo/basic.png";
import { useContext } from "react";
import { UserContext } from "./../../../App";
import { useHistory, location } from "react-router-dom";
const MemberShip = () => {
  const [user, setUser] = useContext(UserContext);

  const handlePlan = (e) => {
    const userInfo = { ...user };
    userInfo.plan = e;
    setUser(userInfo);
    handleOnClick();
    console.log(e);
    console.log(user);
  };
  let history = useHistory();
  const handleOnClick = () => history.push("/employLogin");
  return (
    <div className="text-center">
      <h1 className="text-center text-info plan-title">Choose Your Plan</h1>
      <div className="row membership-main w-75 m-auto text-center">
        <div className="premium col-md-6 col-lg-4 col-sm-12">
          <div className="package">
            <img src={premium} alt="" />
            <h3>Premium</h3>
            <p>total post: 30hr</p>
            <h3 className="text-danger">49$</h3>
            <button
              onClick={() => handlePlan("premium")}
              className="btn btn-info"
            >
              Select
            </button>
          </div>
        </div>
        <div className="standard col-md-6 col-lg-4 col-sm-12">
          <div className="package">
            <img src={standard} alt="" />
            <h3>Standard</h3>
            <p>total post: 20hr</p>
            <h3 className="text-danger">39$</h3>
            <button
              onClick={() => handlePlan("standard")}
              className="btn btn-info"
            >
              Select
            </button>
          </div>
        </div>
        <div className="basic col-md-6 col-lg-4 col-sm-12">
          <div className="package">
            <img src={basic} alt="" />
            <h3>Basic</h3>
            <p>total post: 10hr</p>
            <h3 className="text-danger">29$</h3>
            <button
              onClick={() => handlePlan("basic")}
              className="btn btn-info"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
