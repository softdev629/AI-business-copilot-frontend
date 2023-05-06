import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RequireUser = () => {
  if (!localStorage.getItem("token")) return <Navigate to="/login" />;
  return <Outlet />;
};

export default RequireUser;
