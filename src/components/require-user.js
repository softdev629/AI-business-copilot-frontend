import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireUser = () => {
  const user = useSelector((state) => state.auth.userData);
  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export default RequireUser;
