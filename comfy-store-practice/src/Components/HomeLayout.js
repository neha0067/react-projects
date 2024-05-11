import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="align-element">
      <Login />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
