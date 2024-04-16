import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// const Anonymous = () => {
//   const item = JSON.parse(localStorage.getItem("loggedin"));
//   // const token = item?.accessToken;
//   // console.log(token);

//   return item ? <Navigate to="/" /> : <Outlet />;
// };

// export default Anonymous;

const Anonymous = () => {
  const item = JSON.parse(localStorage.getItem("adminloggedin"));
  // const token = item?.accessToken;
  // console.log(token);

  return item ? <Navigate to="/admin" /> : <Outlet />;
};

export default Anonymous;
