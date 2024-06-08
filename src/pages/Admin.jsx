import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin-components/mini-component/AdminNavbar";

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default Admin;
