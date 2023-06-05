import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const RequireUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) return <Navigate to="/login" />;
  const user = useSelector((state) => state.auth.userData);
  if (!user) return null;
  if (location.pathname.includes("admin") && user.role != "admin") navigate(-1);
  else return <Outlet />;
};

export default RequireUser;
