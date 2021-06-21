import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployCreateAC from "./components/Employer/EmployLogin/EmployCreateAC";
import Home from "./components/Home/Home";
import MemberShip from "./components/Employer/MemberShip/MemberShip";
import { createContext } from "react";
import { useState } from "react";
import EmployDashboard from "./components/Employer/EmployDashboard/EmployDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import Profile from "./components/Profile/Profile";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
    payment: false,
    package: "",
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/seekerLogin">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/membership">
              <MemberShip></MemberShip>
            </Route>
            <Route path="/employLogin">
              <EmployCreateAC></EmployCreateAC>
            </Route>
            <Route path="/EmployDashboard">
              <EmployDashboard></EmployDashboard>
            </Route>
            <Route path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route path="/adminLogin">
              <AdminLogin></AdminLogin>
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
