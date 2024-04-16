//protected routes (login na vaye home jaana na milne)ko laagi yaha kaam hunxa aba hai

import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = localStorage.getItem("loggedin");
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
