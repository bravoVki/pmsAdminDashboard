import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedAdminRoutes = () => {
  const auth = localStorage.getItem("adminloggedin");
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedAdminRoutes;
