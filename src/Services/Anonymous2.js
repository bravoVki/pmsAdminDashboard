import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Anonymous2 = () => {
  const item = JSON.parse(localStorage.getItem("loggedin"));
  // const token = item?.accessToken;
  // console.log(token);

  return item ? <Navigate to="/" /> : <Outlet />;
};

export default Anonymous2;
