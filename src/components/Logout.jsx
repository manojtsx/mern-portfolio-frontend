import React from "react";
import { useAuth } from "../store/contextapi";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  logout();
  navigate("/");

  return null;
};

export default Logout;
